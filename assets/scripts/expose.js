// expose.js

const jsConfetti = new JSConfetti();
window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornImg = document.querySelector("img");
  const horn = document.getElementById("horn-select");
  const vol = document.getElementById("volume");
  const volImg = document.querySelector("div[id='volume-controls'] > img");
  const sound = document.querySelector("audio");
  const soundButton = document.querySelector("button");

  horn.addEventListener("change", function() {
    if (horn.value == "air-horn"){
      hornImg.src = "assets/images/air-horn.svg";
      hornImg.alt = "Air horn image";
      sound.src = "assets/audio/air-horn.mp3";
    } else if (horn.value == "car-horn") {
      hornImg.src = "assets/images/car-horn.svg";
      hornImg.alt = "Car horn image";
      sound.src = "assets/audio/car-horn.mp3";
    } else {
      hornImg.src = "assets/images/party-horn.svg";
      hornImg.alt = "Party horn image";
      sound.src = "assets/audio/party-horn.mp3";
    } 
  })

  vol.addEventListener("input", function() {
    sound.volume = vol.value / 100;
  
    if (vol.value == 0) {
      volImg.src = "assets/icons/volume-level-0.svg";
      volImg.alt = "Volume level 0";
    } else if (vol.value >= 1 && vol.value < 33) {
      volImg.src = "assets/icons/volume-level-1.svg";
      volImg.alt = "Volume level 1";
    } else if (vol.value >= 33 && vol.value < 67) {
      volImg.src = "assets/icons/volume-level-2.svg";
      volImg.alt = "Volume level 2";
    } else {
      volImg.src = "assets/icons/volume-level-3.svg";
      volImg.alt = "Volume level 3";
    }
  })

  soundButton.addEventListener("click", function() {
    sound.play();

    if (horn.value == "party-horn") {
      jsConfetti.addConfetti();
    }
  })
}