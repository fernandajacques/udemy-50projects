const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener('click', () => {

    stopSong()
    document.getElementById(sound).play()
  })

  document.getElementById("buttons").appendChild(btn);
});

// Adding a function to stop playing an audio when another button is clicked
function stopSong() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause()
        song.currentTime = 0;
    })
}