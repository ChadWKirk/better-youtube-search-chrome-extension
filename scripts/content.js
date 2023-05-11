//send a message to background.js whenever the search button is clicked
//this triggers the extension to add the flag to the end of the URL
//so it adds the flag when user searches for the same thing twice, when extension was off for the first search but is turned on for the 2nd search

let searchBtn = document.getElementById("search-icon-legacy");

searchBtn.addEventListener("click", () => {
  chrome.runtime.sendMessage({ message: "submit" }, function (response) {
    console.log("message sent");
  });
});
