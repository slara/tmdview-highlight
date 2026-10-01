# tmdview-highlight

A [tmdview](https://github.com/slara/terminal-markdown-renderer) plugin that colors code blocks, using [highlight.js](https://highlightjs.org) 11.12.0.

tmdview doesn't color code itself, so this plugin takes every fenced block with a language that no other plugin claims.
It knows the ~40 languages in the standard highlight.js build, such as Rust, Python, Go, TypeScript, Kotlin, Swift, Bash, SQL and YAML, plus Clojure, Dockerfile, Elixir, Erlang, F#, Groovy, Haskell, Julia, LaTeX, Nginx, Nix, OCaml, PowerShell, Protobuf and Scala.
A language it doesn't know stays as plain text.

![sample.md in Vim beside tmdview, its code blocks colored by this plugin](screenshot.png)

## Install

```sh
tmdview plugins install slara/tmdview-highlight
```

tmdview then uses it on every page with a code block, in the page's light or dark theme.
Try it on `sample.md` in this repo.

## Themes

Pick one in `~/.config/tmdview/config.toml`:

```toml
[plugins.highlight]
theme = "catppuccin"
```

| Theme | Light pages | Dark pages |
|---|---|---|
| `github` (default) | GitHub | GitHub Dark |
| `catppuccin` | Latte | Mocha |
| `atom-one` | Atom One Light | Atom One Dark |
| `tokyo-night` | Tokyo Night Light | Tokyo Night Dark |

Code keeps tmdview's block background, so only the code's colors change.
To add a theme, add its two stylesheets to `THEMES` in `scripts/vendor.py` and its name to `THEMES` in `init.js`, then run the script.

## Files

| File | Job |
|---|---|
| `tmdview-plugin.toml` | The manifest tmdview reads |
| `init.js` | Sets the theme and colors the blocks tmdview hands to the plugin |
| `styles.css` | Every theme, scoped to its `data-code-theme` and to tmdview's light and dark theme. Generated |
| `vendor/` | highlight.js and extra languages. Generated |
| `scripts/vendor.py` | Downloads `vendor/` and builds `styles.css` for a pinned version |

To change the highlight.js version or add a language, edit `VERSION` or `LANGUAGES` in `scripts/vendor.py`, run `python3 scripts/vendor.py`, and copy the `scripts` list it prints into the manifest.

## License

MIT for this plugin's own files. highlight.js is BSD-3-Clause; see `vendor/LICENSE`. The Catppuccin theme is MIT; see `vendor/LICENSE-catppuccin`.
