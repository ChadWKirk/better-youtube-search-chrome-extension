---
title: Style
layout: home
nav_order: 2
---

# Style

This is very simple stylistically. There is just one toggle slider. When it is **On**, the elements are in a red color scheme. When it is **Off**, the elements are more grey. The extension's **toolbar icon** also goes to and from red/grey when on/off.

There is a transition time for the colors and toggle slider ball to change so it is a smooth animation to make it smoother.

The changes are done in **Javascript** because if I just let CSS handle it, the transition would run every time a user opens the popup when the extension is in the On position. This gave the false impression that it is going from off to on when the popup is opened because it slides from Off to On for the given transition time each time the popup is opened.

## On/Off

The extension has a red color scheme when turned on, and a B&W color scheme when turned off.

## document.documentElement.style.setProperty("--transition", "0.2s")

This is to be able to manipulate .slider::before's **(the slider ball's)** transition time. The ::before pseudo element can't be directly manipulated by Javascript, so what we do is we give :root a transition variable, pass it to .slider::before and manipulate THAT in Javascript.

document.documentElement is how you control :root that is in CSS.

The reason I have to control that is to stop it from taking time to slide to the position it needs to be in when the popup opens. If I just set it to 0.2s, it will take 0.2s to move to the fully on position. That's why I set the --transition variable in CSS to 0, and change it to 0.2s in Javascript when the toggle slider is clicked on or off. When the popup is opened, the slider ball's transition time is 0 meaning it will instantly be at the position it needs to be in.

In the checkIfTurnedOn function in popup.js, I set it to 0.2s after 300ms if it is currently already on, because it needs to have transition time if user turns it off but it has to not have transition time on the initial popup opening so it instantly goes to the on position without sliding.
