// Color the code blocks tmdview handed to this plugin. tmdview gives us every
// fenced block whose language it can't color itself, as
// <pre class="tmdview-plugin" data-plugin="highlight" data-lang="…"><code>…</code></pre>.
(() => {
  for (const pre of document.querySelectorAll('pre[data-plugin="highlight"]')) {
    const code = pre.querySelector("code");
    const language = pre.dataset.lang;
    // Languages highlight.js doesn't know either stay as plain text.
    if (!code || !language || !hljs.getLanguage(language)) continue;
    code.innerHTML = hljs.highlight(code.textContent, { language, ignoreIllegals: true }).value;
    code.classList.add("hljs");
  }
})();
