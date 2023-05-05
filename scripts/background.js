chrome.tabs.onUpdated.addListener((tabId, tab) => {
  chrome.storage.local.get(["isOn"]).then((result) => {
    if (result.isOn) {
      if (
        tab.url &&
        tab.url.includes("youtube.com/results?search_query=") &&
        !tab.url.includes("&sp=")
      ) {
        chrome.tabs.update({ url: tab.url + "&sp=CAASAhAB" });
      }
    } else {
      return;
    }
  });
});
