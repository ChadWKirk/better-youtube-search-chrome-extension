---
title: OnOff
layout: home
nav_order: 3
---

# On/Off

In popup.html, there is a **checkbox** input that is invisible and covered by a toggle slider.

When that checkbox is checked, the style of the extension popup is changed as well as a variable called isOn is changed.

The checkbox is unchecked by default but gets automatically checked when the extension's popup is opened based on if isOn is true or not. This is done in the checkIfTurnedOn function in popup.js.

## Storage

chrome.storage is an API that allows you to set, get and store variables with values.

## isOn

isOn is a variable I store to keep track of if the toggle slider is in the On position or Off position. It acts as a pseudo on/off switch.

### popup.js > checkIfTurnedOn

This function runs as soon as the extension's popup is opened. It gets isOn from chrome.storage and if it is true it checks the checkbox and shows on styling, if it is off it shows off styling and leaves checkbox to it's default unchecked position.

### popup.js > toggleOffOn

This function runs when the checkbox or it's label(s) are clicked. It checks if checkbox is checked or not, sets isOn accordingly and shows appropriate on/off styling.
