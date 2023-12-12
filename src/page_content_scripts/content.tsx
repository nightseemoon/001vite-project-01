chrome.runtime.onMessage.addListener(function (_request, sender, sendResponse) {
  (async () => {
    const response = await chrome.runtime.sendMessage({ greeting: "hello" });
    // do something with response here, not outside the function
    console.log(response);
  })();
  const img: HTMLImageElement = document.createElement("img");
  img.src = _request.url;
  img.className = "slide-image";
  img.id = _request.imageDivId;
  img.onclick = (e: MouseEvent) => {
    console.log("img.onclick=>", e.target);
    (e.target as HTMLElement).remove();
  };
  window.document.body.prepend(img);
  const style: HTMLStyleElement = document.createElement("style");
  style.textContent = `
.slide-image { \r
  height: auto; \r
  width: 100vw; \r
  border: solid 2px #f00;\r
}
`;
  window.document.head.prepend(style);
  const script: HTMLScriptElement = document.createElement("script");
  script.textContent = `
  window.document.query
  `;

  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension666"
  );

  sendResponse({ farewell: "goodbye" });
});
