< !DOCTYPE html >
    <
    html lang = "en" >
    <
    head >
    <
    meta charset = "UTF-8" / >
    <
    meta name = "viewport"
content = "width=device-width, initial-scale=1.0" / >
    <
    meta http - equiv = "X-UA-Compatible"
content = "ie=edge" / >
    <
    title > Document < /title> < /
    head > <
    style >
    html {
        box - sizing: border - box;
    }

*,
*: before,
*: after {
    box - sizing: inherit;
}

body {
    margin: 0;
    padding: 0;
    display: flex;
    background: #7a419b;
      min-height: 100vh;
      background: linear-gradient(
        135deg,
        # 7 c1599 0 % ,
    #921099 48%,
        # 7e4 ae8 100 %
);
background - size: cover;
align - items: center;
justify - content: center;
}

.player {
    max - width: 750 px;
    border: 5 px solid rgba(0, 0, 0, 0.2);
    box - shadow: 0 0 20 px rgba(0, 0, 0, 0.2);
    position: relative;
    font - size: 0;
    overflow: hidden;
}

/* This css is only applied when fullscreen is active. */
.player: fullscreen {
        max - width: none;
        width: 100 % ;
    }

    .player: -webkit - full - screen {
        max - width: none;
        width: 100 % ;
    }

    .player__video {
        width: 100 % ;
    }

    .player__video::-webkit - media - controls {
        display: none!important;
    }

    .player__button {
        background: none;
        border: 0;
        line - height: 1;
        color: white;
        text - align: center;
        outline: 0;
        padding: 0;
        cursor: pointer;
        max - width: 50 px;
    }

    .player__button: focus {
        border - color: #ffc600;
    }

    .player__slider {
        width: 10 px;
        height: 30 px;
    }

    .player__controls {
        display: flex;
        position: absolute;
        bottom: 0;
        width: 100 % ;
        transform: translateY(100 % ) translateY(-5 px);
        transition: all 0.3 s;
        flex - wrap: wrap;
        background: rgba(0, 0, 0, 0.1);
    }

    .player: hover.player__controls {
        transform: translateY(0);
    }

    .player: hover.progress {
        height: 15 px;
    }

    .player__controls > * {
        flex: 1;
    }

    .progress {
        flex: 10;
        position: relative;
        display: flex;
        flex - basis: 100 % ;
        height: 5 px;
        transition: height 0.3 s;
        background: rgba(0, 0, 0, 0.5);
        cursor: ew - resize;
    }

    .progress__filled {
        width: 50 % ;
        background: #ffc600;
        flex: 0;
        flex - basis: 50 % ;
    }

/* unholy css to style input type="range" */

input[type = "range"] {
    -webkit - appearance: none;
    background: transparent;
    width: 100 % ;
    margin: 0 5 px;
}
input[type = "range"]: focus {
    outline: none;
}
input[type = "range"]::-webkit - slider - runnable - track {
    width: 100 % ;
    height: 8.4 px;
    cursor: pointer;
    box - shadow: 1 px 1 px 1 px rgba(0, 0, 0, 0),
    0 0 1 px rgba(13, 13, 13, 0);
    background: rgba(255, 255, 255, 0.8);
    border - radius: 1.3 px;
    border: 0.2 px solid rgba(1, 1, 1, 0);
}
input[type = "range"]::-webkit - slider - thumb {
    height: 15 px;
    width: 15 px;
    border - radius: 50 px;
    background: #ffc600;
    cursor: pointer; -
    webkit - appearance: none;
    margin - top: -3.5 px;
    box - shadow: 0 0 2 px rgba(0, 0, 0, 0.2);
}
input[type = "range"]: focus::-webkit - slider - runnable - track {
    background: #bada55;
}
input[type = "range"]::-moz - range - track {
    width: 100 % ;
    height: 8.4 px;
    cursor: pointer;
    box - shadow: 1 px 1 px 1 px rgba(0, 0, 0, 0),
    0 0 1 px rgba(13, 13, 13, 0);
    background: #ffffff;
    border - radius: 1.3 px;
    border: 0.2 px solid rgba(1, 1, 1, 0);
}
input[type = "range"]::-moz - range - thumb {
        box - shadow: 0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(13, 13, 13, 0);
        height: 15 px;
        width: 15 px;
        border - radius: 50 px;
        background: #ffc600;
        cursor: pointer;
    } <
    /style> <
body >
    <
    div class = "player" >
    <
    video
class = "player__video viewer"
src = "http://vali.cp31.ott.cibntv.net/youku/69755208c153f7196ff005216/03000801005C405D450C1CE003E880B9203DF1-045F-40B1-A924-C3CB87A12E61.mp4?_retry=2&ccode=0502&duration=15&expire=18000&psid=f30c8da8519a719974956818779bf813&ups_client_netip=3cbf00b6&ups_ts=1548754428&ups_userid=&utid=wsYvE2rmE2MCASp4SmdJtYjp&vid=&vkey=A0ff13c955709f12aae2852f36eb5f272" >
    <
    /video> <
div class = "player__controls" >
    <
    div class = "progress" > < div class = "progress__filled" > < /div></div >
    <
    button class = "player__button toggle"
title = "Toggle Play" > ► < /button> <
input
type = "range"
name = "volume"
class = "player__slider"
min = "0"
max = "1"
step = "0.05"
value = "1" /
    >
    <
    input
type = "range"
name = "playbackRate"
class = "player__slider"
min = "0.5"
max = "2"
step = "0.1"
value = "1" /
    >
    <
    button data - skip = "-10"
class = "player__button" > «10 s < /button> <
button data - skip = "25"
class = "player__button" > 25 s» < /button> <
button class = "fullscreen__button player__button" > [] < /button> < /
    div > <
    /div> < /
    body > <
    /html> <
script >
    // 实在没空写了，从GitHub复制了一遍，思路差不多
    const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const fullscreenButton = player.querySelector(".fullscreen__button");

video.controls = false;

function togglePlay() {
    const method = video.paused ? "play" : "pause";
    video[method]();
}

function updatePlayButton() {
    const icon = this.paused ? "►" : "❚ ❚";
    toggle.textContent = icon;
    // console.log('update');
}

function skip() {
    video.currentTime += +this.dataset.skip;
    // console.log(this.dataset.skip);
}

function handleRangeUpdate() {
    // console.log(this.value);
    // console.log(this.name);
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    console.log(e);
}

function handleFullscreen() {
    console.log(
        video.requestFullscreen,
        video.mozRequestFullScreen,
        video.webkitRequestFullscreen
    );
    if (!document.webkitIsFullScreen) {
        video.webkitRequestFullscreen();
    } else {
        video.webkitExitFullScreen();
    }
    console.dir(video);
}

// hook listener
video.addEventListener("click", togglePlay);
video.addEventListener("dblclick", handleFullscreen);
video.addEventListener("play", updatePlayButton);
video.addEventListener("pause", updatePlayButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);

skipButtons.forEach(skipButton => skipButton.addEventListener("click", skip));
ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
progress.addEventListener("click", scrub);

let mousedown = false;
progress.addEventListener("mousemove", e => mousedown && scrub(e));
progress.addEventListener("mouseup", () => (mousedown = false));
progress.addEventListener("mousedown", () => (mousedown = true));
fullscreenButton.addEventListener("click", handleFullscreen); <
/script>