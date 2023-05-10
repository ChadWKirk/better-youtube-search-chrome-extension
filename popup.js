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
let sliderBallTransition = document.querySelector("::before");

let universal = document.querySelectorAll("*");

//checks chrome.storage.local for isOn to enable or disable extension in new session
//so extension maintains whether it was on or off the last time the user used Chrome
//so they don't have to turn it on again each time they open Chrome
//also changes icon in toolbar and topbar stuff from red to grey color scheme when extension is turned off and vice versa
//also changes slider::before's transition time
function checkIfTurnedOn() {
  chrome.storage.local.get(["isOn"]).then((result) => {
    if (result.isOn) {
      checkbox.checked = true;
      console.log(sliderBallTransition);
      offLabel[0].style.color = "#a3a3a3";
      onLabel[0].style.color = "#000";
      chrome.action.setIcon({
        path: "./images/better-youtube-search-icon-16.png",
      });
      setTimeout(() => {
        document.documentElement.style.setProperty("--transition", "0.2s");
      }, 300);
      document.getElementById("topbar").style.backgroundColor = "#eb0000";
      document.getElementById("star").style.opacity = "1";
      document.getElementById("triangle").style.opacity = "1";
      document.getElementById("mag").style.opacity = "1";
      document.querySelectorAll("span")[0].style.color = "#282828";
      document.querySelectorAll("span")[1].style.color = "#fff";
      document.querySelectorAll("span")[2].style.color = "#282828";
      console.log(result);
    } else {
      checkbox.checked = false;
      offLabel[0].style.color = "#000";
      onLabel[0].style.color = "#a3a3a3";
      chrome.action.setIcon({
        path: "./images/better-youtube-search-icon-16-grey.png",
      });
      document.documentElement.style.setProperty("--transition", "0.2s");
      document.getElementById("topbar").style.backgroundColor = "#e7e7e7";
      document.getElementById("star").style.opacity = "0";
      document.getElementById("triangle").style.opacity = "0";
      document.getElementById("mag").style.opacity = "0";
      document.querySelectorAll("span")[0].style.color = "#828282";
      document.querySelectorAll("span")[1].style.color = "#828282";
      document.querySelectorAll("span")[2].style.color = "#828282";

      console.log(result);
    }
  });
}

checkIfTurnedOn();

//turns extension on and off with toggle slider in popup html
//so user can easily enable or disable the extension without having to go to their extensions tab to do so
//also changes icon in toolbar and topbar stuff from red to grey color scheme when extension is turned off and vice versa
//also changes slider::before's transition time
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
      document.getElementById("topbar").style.transition = "0.2s";
      document.querySelectorAll("span")[0].style.transition = "0.2s";
      document.querySelectorAll("span")[1].style.transition = "0.2s";
      document.querySelectorAll("span")[2].style.transition = "0.2s";
      document.getElementById("star").style.transition = "0.2s";
      document.getElementById("triangle").style.transition = "0.2s";
      document.getElementById("mag").style.transition = "0.2s";
      document.querySelector(".on-label").style.transition = "0.2s";
      document.querySelector(".off-label").style.transition = "0.2s";
      document.querySelector(".slider").style.transition = "0.2s";
      document.documentElement.style.setProperty("--transition", "0.2s");
      document.getElementById("topbar").style.backgroundColor = "#eb0000";
      document.querySelectorAll("span")[0].style.color = "#282828";
      document.querySelectorAll("span")[1].style.color = "#fff";
      document.querySelectorAll("span")[2].style.color = "#282828";
      document.getElementById("star").style.opacity = "1";
      document.getElementById("triangle").style.opacity = "1";
      document.getElementById("mag").style.opacity = "1";
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
      document.getElementById("topbar").style.transition = "0.2s";
      document.querySelectorAll("span")[0].style.transition = "0.2s";
      document.querySelectorAll("span")[1].style.transition = "0.2s";
      document.querySelectorAll("span")[2].style.transition = "0.2s";
      document.getElementById("star").style.transition = "0.2s";
      document.getElementById("triangle").style.transition = "0.2s";
      document.getElementById("mag").style.transition = "0.2s";
      document.querySelector(".on-label").style.transition = "0.2s";
      document.querySelector(".off-label").style.transition = "0.2s";
      document.querySelector(".slider").style.transition = "0.2s";
      document.documentElement.style.setProperty("--transition", "0.2s");
      document.getElementById("topbar").style.backgroundColor = "#e7e7e7";
      document.getElementById("star").style.opacity = "0";
      document.getElementById("triangle").style.opacity = "0";
      document.getElementById("mag").style.opacity = "0";
      document.querySelectorAll("span")[0].style.color = "#828282";
      document.querySelectorAll("span")[1].style.color = "#828282";
      document.querySelectorAll("span")[2].style.color = "#828282";
      console.log("is not checked");
    });
  }
}

checkbox.addEventListener("click", toggleOffOn);
