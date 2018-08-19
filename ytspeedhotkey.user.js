// ==UserScript==
// @name         Youtube Speed Hotkey
// @namespace    ytspeedhotkey
// @version      0.0.4
// @description  Toogle Youtube playback speed with a hotkey (Q)
// @author       DerEnderKeks
// @website      https://github.com/DerEnderKeks/YTSpeedHotkey
// @supportURL   https://github.com/DerEnderKeks/YTSpeedHotkey/issues
// @updateURL    https://github.com/DerEnderKeks/YTSpeedHotkey/raw/master/ytspeedhotkey.user.js
// @downloadURL  https://github.com/DerEnderKeks/YTSpeedHotkey/raw/master/ytspeedhotkey.user.js
// @include      https://www.youtube.com/watch*
// @include      https://www.youtube.com/embed/*
// @grant        none
// ==/UserScript==

(function() {
    this.addEventListener('keypress', (event) => {
        if (event.key === 'q') {
            var videos = document.getElementsByTagName('video');
            for (let video of videos) {
                video.playbackRate = video.playbackRate === 2 ? 1 : 2;
                console.log(`Changed video speed to ${video.playbackRate}x`);
            }
        }
    });
})();
