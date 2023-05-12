---
title: Scripts
layout: home
nav_order: 3
---

# Scripts

## background.js

Background.js is a script that runs in the background.

There are two functions of this.

The first one runs whenever the tab url is updated, and it checks if it is on a youtube search results page to do it's thing, based on if isOn is on or off.

The second one **is a copy of the first one**, but runs when the user clicks the search button on the youtube page. This is done by content.js sending a message to background.js when the search button is clicked. This is to fix the error that happened when a user would search for something with the extension turned off, and then they turned it on and searched for the exact same thing. What would happen is that since the URL is not getting changed due to the exact same search query, the first background.js script wasn't running. But now this second function will run any time the user clicks the search button.

There is an edgecase of the user doing that but instead of clicking the search button, they hit enter in the search field. I haven't figured out how to capture that event yet. I have tried adding an eventlistener on the form for submit and keypress enter, but it doesn't work for some reason. If you're reading this, it means I still haven't figured it out. If you want to help, let me know! I'd be very curious of what you find!

## content.js

Content.js is a script that manipulates the DOM of the page it has access to from manifest.json matches

The comment in the content.js file explains it. It uses the chrome.runtime.sendMessage to send a message when the user clicks the search button on youtube, which is caught by background.js in it's second function (explained above).
