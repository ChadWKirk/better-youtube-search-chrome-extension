//checkbox in popup.html
//checkbox is 0 opacity so you can't see it, but it is represented by the toggle slider
let checkbox = document.getElementById("checkbox");

//checks chrome.storage.local for isOn to enable or disable extension in new session
//so extension maintains whether it was on or off the last time the user used Chrome
//so they don't have to turn it on again each time they open Chrome
function checkIfTurnedOn() {
  chrome.storage.local.get(["isOn"]).then((result) => {
    if (result.isOn) {
      checkbox.checked = true;
      console.log(result);
    } else {
      checkbox.checked = false;
      console.log(result);
    }
  });
}

checkIfTurnedOn();

//turns extension on and off with toggle slider in popup html
//so user can easily enable or disable the extension without having to go to their extensions tab to do so
function toggleOffOn() {
  if (checkbox.checked) {
    chrome.storage.local.set({ isOn: true }).then((result) => {
      chrome.storage.local.get(["isOn"]).then((result) => {
        console.log(result);
      });
      console.log("is checked");
    });
  } else {
    chrome.storage.local.set({ isOn: false }).then((result) => {
      chrome.storage.local.get(["isOn"]).then((result) => {
        console.log(result);
      });
      console.log("is not checked");
    });
  }
}

checkbox.addEventListener("click", toggleOffOn);
