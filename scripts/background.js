chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (
    tab.url &&
    tab.url.includes("youtube.com/results?search_query=") &&
    !tab.url.includes("&sp=")
  ) {
    chrome.tabs.update({ url: tab.url + "&sp=CAASAhAB" });
  }
});
