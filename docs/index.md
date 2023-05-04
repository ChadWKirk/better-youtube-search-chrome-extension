---
title: Home
layout: home
nav_order: 1
---

# Big Picture Stuff

Repo URL - [https://github.com/ChadWKirk/youtube-search-fixer-chrome-extension](https://github.com/ChadWKirk/youtube-search-fixer-chrome-extension)

Chrome Extension Install Link -

## Project Goals:

This is a Google Chrome Extension made to make YouTube search stop giving you "People Also Watched" or "For You" videos in your search results after only showing you 5-10 actual search results.

So far, this extension will only add the URL flag for "Relevance" since if you are adding a filter like "View Count", then it will fix the problem just by doing that. If users say they would like me to add a "default search" option where the user can choose which search sort/filter URL flags to add other than "Relevance" by default, then I will be glad to.

## How I Accomplished This:

I added the URL flag for the "Relevance" sorting option when you first search on YouTube.

Let me explain.

When you search on YouTube, it gives you a url like "https://youtube.com/results?search_query=Mr+Beast".

If you go to Filters > Sort By after you search, and click any of the sorting options, you will notice that the URL will change slightly. YouTube adds a URL flag to the end of the URL to indicate which sorting option you chose.

These URL flags are as follows:

- Relevance - &sp=CAASAhAB
- Upload Date - &sp=CAISAhAB
- View Count - &sp=CAMSAhAB
- Rating - &sp=CAESAhAB

If you choose any of these sorting options, the "People also watched" or "For You" section never appears.

You will notice that all of the sorting options have the same beginning, "&sp=". All of the other filter options have this too, like "Uploaded within 1 hour ago" etc.

So, what I did was I told the Chrome Extension I made that "If the URL contains youtube.com/results?search_query=" AND does NOT already include "&sp=", then make the URL whatever the current URL is + "&sp=CAASAhAB". This makes sure that the "Relevance" flag doesn't get added when another filter option is already being applied. If that did happen, then the URL would be broken and would make YouTube unuseable for whoever uses this Chrome Extension.
