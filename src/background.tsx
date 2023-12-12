chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );
  if (request.greeting === "hello")
    sendResponse({ farewell: "goodbye greenting" });
});
// chrome.action.onClicked.addListener(function () {
//   if (chrome.runtime.openOptionsPage) {
//     // New way to open options pages, if supported (Chrome 42+).
//     chrome.runtime.openOptionsPage();
//     console.log("888888999999");
//   } else {
//     // Reasonable fallback.
//     window.open(chrome.runtime.getURL("options.html"));
//   }
// });
