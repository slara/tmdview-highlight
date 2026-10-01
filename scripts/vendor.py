#!/usr/bin/env python3
"""Download a pinned highlight.js release into vendor/.

Run it from the repository root after changing VERSION or LANGUAGES, then
commit the result:  python3 scripts/vendor.py
"""

import urllib.request
from pathlib import Path

VERSION = "11.12.0"
# Added on top of the ~40 languages in the standard highlight.min.js build.
LANGUAGES = ["dockerfile", "elixir", "haskell", "nix", "protobuf"]

BASE = f"https://cdn.jsdelivr.net/npm/@highlightjs/cdn-assets@{VERSION}"
ROOT = Path(__file__).resolve().parent.parent


def fetch(path: str) -> str:
    with urllib.request.urlopen(f"{BASE}/{path}") as response:
        return response.read().decode("utf-8")


def main() -> None:
    vendor = ROOT / "vendor"
    (vendor / "languages").mkdir(parents=True, exist_ok=True)
    (vendor / "highlight.min.js").write_text(fetch("highlight.min.js"))
    for lang in LANGUAGES:
        (vendor / "languages" / f"{lang}.min.js").write_text(fetch(f"languages/{lang}.min.js"))
    (vendor / "LICENSE").write_text(fetch("LICENSE"))

    scripts = ["vendor/highlight.min.js"] + [f"vendor/languages/{l}.min.js" for l in LANGUAGES] + ["init.js"]
    print("scripts = [\n" + "".join(f'  "{s}",\n' for s in scripts) + "]")


if __name__ == "__main__":
    main()
