var audio = document.getElementById('bg-music');
var playButton = document.getElementById('play-button');

function toggleAudio() {
    if (audio.paused) {
        audio.play();
        playButton.textContent = 'Pause';
    } else {
        audio.pause();
        playButton.textContent = 'Play';
    }
}
