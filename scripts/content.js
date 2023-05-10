//send a message to background.js whenever the search-form submits a search
//this triggers the extension to add the flag to the end of the URL
//so it adds the flag when user searches for the same thing twice, when extension was off for the first search but is turned on for the 2nd search

let searchForm = document.getElementById("search-form");
let searchBtn = document.getElementById("search-icon-legacy");

function enterSubmitFunction() {
  if (e.key === "Enter") {
    chrome.runtime.sendMessage({ message: "submit" }, function (response) {
      console.log(response);
    });
  }
}

function clickSubmitFunction() {
  chrome.runtime.sendMessage({ message: "submit" }, function (response) {
    console.log(response);
  });
}

searchForm.addEventListener("keypress", enterSubmitFunction);

searchBtn.addEventListener("click", clickSubmitFunction);
