function validate() {
  if (document.getElementById("checkbox").checked) {
    console.log("check");
    chrome.storage.local.set({ [isOn]: true }).then((result) => {
      console.log(chrome.storage);
    });
  } else {
    chrome.storage.local.set({ isOn: false }).then((result) => {
      console.log(result, " result");
    });
  }
}

// if (chrome.storage.local.get(["isOn"])) {
//   document.getElementById("checkbox").checked = true;
// }

document.querySelector("#checkbox").addEventListener("click", validate);
