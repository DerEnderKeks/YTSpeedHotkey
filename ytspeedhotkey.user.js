// ==UserScript==
// @name         Youtube Speed Hotkey
// @namespace    ytspeedhotkey
// @version      0.0.1
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
    var speed = 1;

    this.addEventListener('keypress', (event) => {
        if (event.code === 'KeyQ') {
            speed = speed === 2 ? 1 : 2;
            var videos = document.getElementsByTagName('video');

            for (var i = 0; i < videos.length; i++) {
                if (!videos[i]) continue;
                video = videos[i];
                video.playbackRate = speed;
            }
            console.log('Changed video speed to ' + speed);
        }
    });
})();