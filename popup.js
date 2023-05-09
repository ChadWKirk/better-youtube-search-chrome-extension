//checkbox in popup.html
//checkbox is 0 opacity so you can't see it, but it is represented by the toggle slider
let checkbox = document.getElementById("checkbox");

//off and on labels
//so their color changes when checkbox is checked or not checked
let offLabel = document.getElementsByClassName("off-label");
let onLabel = document.getElementsByClassName("on-label");

//slider and slider:before
//to set their transition times to 0 when initially bringing up the extension
//to make it instantly be in either the off or on position instead of sliding up or down when opening extension popup
let slider = document.getElementsByClassName("slider");
let sliderBallTransition = window
  .getComputedStyle(document.querySelector(".slider"), ":before")
  .getPropertyValue("transition");

//checks chrome.storage.local for isOn to enable or disable extension in new session
//so extension maintains whether it was on or off the last time the user used Chrome
//so they don't have to turn it on again each time they open Chrome
//also changes icon in toolbar and topbar background color from red to grey when extension is turned off and vice versa
function checkIfTurnedOn() {
  chrome.storage.local.get(["isOn"]).then((result) => {
    if (result.isOn) {
      checkbox.checked = true;
      offLabel[0].style.color = "#a3a3a3";
      onLabel[0].style.color = "#000";
      chrome.action.setIcon({
        path: "./images/better-youtube-search-icon-16.png",
      });
      document.getElementById("topbar").style.backgroundColor = "#eb0000";
      console.log(result);
    } else {
      checkbox.checked = false;
      offLabel[0].style.color = "#000";
      onLabel[0].style.color = "#a3a3a3";
      chrome.action.setIcon({
        path: "./images/better-youtube-search-icon-16-grey.png",
      });
      document.getElementById("topbar").style.backgroundColor = "#e7e7e7";
      console.log(result);
    }
  });
}

checkIfTurnedOn();

//turns extension on and off with toggle slider in popup html
//so user can easily enable or disable the extension without having to go to their extensions tab to do so
//also changes icon in toolbar and topbar background color from red to grey when extension is turned off and vice versa
function toggleOffOn() {
  if (checkbox.checked) {
    chrome.storage.local.set({ isOn: true }).then((result) => {
      chrome.storage.local.get(["isOn"]).then((result) => {
        console.log(result);
      });
      offLabel[0].style.color = "#a3a3a3";
      onLabel[0].style.color = "#000";
      chrome.action.setIcon({
        path: "./images/better-youtube-search-icon-16.png",
      });
      document.getElementById("topbar").style.backgroundColor = "#eb0000";
      console.log("is checked");
    });
  } else {
    chrome.storage.local.set({ isOn: false }).then((result) => {
      chrome.storage.local.get(["isOn"]).then((result) => {
        console.log(result);
      });
      offLabel[0].style.color = "#000";
      onLabel[0].style.color = "#a3a3a3";
      chrome.action.setIcon({
        path: "./images/better-youtube-search-icon-16-grey.png",
      });
      document.getElementById("topbar").style.backgroundColor = "#e7e7e7";
      console.log("is not checked");
    });
  }
}

checkbox.addEventListener("click", toggleOffOn);
