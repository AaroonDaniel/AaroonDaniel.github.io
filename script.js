document.addEventListener("DOMContentLoaded", () => {
    const carta = document.getElementById("carta");
    const music = document.getElementById("background-music");
    const playPauseBtn = document.getElementById("play-pause-btn");

    // Abrir/cerrar carta
    carta.addEventListener("click", () => {
        carta.classList.toggle("open");
    });

    // Control de música
    playPauseBtn.addEventListener("click", () => {
        if (music.paused) {
            music.play();
            playPauseBtn.textContent = "🎵 Pausar Música";
        } else {
            music.pause();
            playPauseBtn.textContent = "🎵 Reproducir Música";
        }
    });
});