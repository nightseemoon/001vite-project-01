function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function guidGenerator() {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    );
  }
  async function sendMessage() {
    // if (chrome.runtime.openOptionsPage) {
    //   chrome.runtime.openOptionsPage();
    // } else {
    //   window.open(chrome.runtime.getURL("options.html"));
    // }
    // guidGenerator();
    chrome.tabs.query(
      { active: true, currentWindow: true },
      function (tabs: chrome.tabs.Tab[]) {
        alert(`标签编号1: ${tabs[0].id} `);
        chrome.tabs.sendMessage(
          tabs[0].id as number,
          {
            url: chrome.runtime.getURL("images/stars.jpg"),
            imageDivId: guidGenerator(),
            tabId: tabs[0].id,
          },

          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          function (_response) {
            window.close();
          }
        );
      }
    );
  }
  return (
    <>
      <div>
        <a href="/index.html">&lt;-Index</a>
        <h1 className=" bg-blue-500">Display the NASA picture of the day.</h1>
        <h2>(Select the image to remove)</h2>
        <button
          type="button"
          id="sendmessageid"
          className=" bg-red-600 align-middle"
          onClick={sendMessage}
        >
          Display
        </button>
      </div>
    </>
  );
}

export default App;
