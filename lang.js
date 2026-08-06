(async () => {
  const res = await fetch('translations.json');
  const dict = await res.json();

  const lang = localStorage.getItem("lang") || "ar";

  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );

  let node;
  while ((node = walker.nextNode())) {
    const t = node.nodeValue.trim();
    if (dict[lang] && dict[lang][t]) {
      node.nodeValue = dict[lang][t];
    }
  }
})();
