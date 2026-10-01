// Color the code blocks tmdview handed to this plugin. tmdview gives us every fenced
// block with a language that no other plugin claims, as
// <pre class="tmdview-plugin" data-plugin="highlight" data-lang="…"><code>…</code></pre>.
(() => {
  // The theme from [plugins.highlight] in tmdview's config. These are the names in
  // scripts/vendor.py's THEMES, which styles.css has a light and dark version of.
  const THEMES = ["github", "catppuccin", "atom-one", "tokyo-night"];
  let theme = tmdview.config.highlight?.theme ?? "github";
  if (!THEMES.includes(theme)) {
    console.warn(`tmdview-highlight: no theme "${theme}"; the themes are ${THEMES.join(", ")}`);
    theme = "github";
  }
  document.documentElement.dataset.codeTheme = theme;

  for (const pre of document.querySelectorAll('pre[data-plugin="highlight"]')) {
    const code = pre.querySelector("code");
    const language = pre.dataset.lang;
    // Languages highlight.js doesn't know stay as plain text.
    if (!code || !language || !hljs.getLanguage(language)) continue;
    code.innerHTML = hljs.highlight(code.textContent, { language, ignoreIllegals: true }).value;
    code.classList.add("hljs");
  }
})();
