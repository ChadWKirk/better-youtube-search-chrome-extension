# youtube-search-fixer-chrome-extension

![GitHub last commit](https://img.shields.io/github/last-commit/ChadWKirk/better-youtube-search-chrome-extension) ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/ChadWKirk/better-youtube-search-chrome-extension) ![GitHub all releases](https://img.shields.io/github/downloads/ChadWKirk/better-youtube-search-chrome-extension/total?label=Downloads)

## This is a Google Chrome Extension designed to get YouTube search to stop showing you "People also watched" and "For You" in your YouTube search results.

Link to extension download - placeholder because not live yet

## How This Thing Works

Developer Documentation - [https://chadwkirk.github.io/better-youtube-search-chrome-extension/](https://chadwkirk.github.io/better-youtube-search-chrome-extension/)

### The Quick And Dirty:

This extension stops the "For You" and "People Also Watched" videos from showing up in your YouTube search results.

It does this by adding a URL flag to the end of your search query URL when you search for videos on YouTube. This URL flag is the same one that YouTube adds to the end of a search query URL when you choose the "Relevance" filter after you search.

There is just one button, an On/Off button. This is put in the extension popup to allow the user to quickly and easily disable/enable the extension if they want to.

It handles turning Off/On by using the chrome.storage api to store and access a variable I call isOn. If isOn is true that means the extension will run, if isOn is false then it will not run.

Anything else you want to know is in the documentation.

## How To Run

If you would like to use this as a template for something, all you have to do is clone the repo > go to your extensions tab in Chrome > turn on Developer mode > click Load Unpacked button on top left > select the folder containing the repo.
