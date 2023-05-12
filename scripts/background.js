//for when tab is updated
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

//for when youtube search button is clicked
//this makes it so that if a user searches for something with the extension off, and then turns it on and searches for the exact same thing, it still adds the flag
//even though the url isn't being updated since the search terms are the same
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  chrome.storage.local.get(["isOn"]).then((result) => {
    if (result.isOn) {
      if (request.message === "submit") {
        //timeout is just to make it change URL at a specific time to make it look more smooth for the user
        setTimeout(() => {
          //using chrome.tabs.query to bring in the tabs API to have access to tab and tab.url
          chrome.tabs.query(
            { active: true, currentWindow: true },
            function (tab) {
              if (
                tab[0].url &&
                tab[0].url.includes("youtube.com/results?search_query=") &&
                !tab[0].url.includes("&sp=")
              ) {
                chrome.tabs.update({ url: tab[0].url + "&sp=CAASAhAB" });
              }
            }
          );
        }, 200);
      }
    } else {
      console.log("proceed");
    }
  });
});
