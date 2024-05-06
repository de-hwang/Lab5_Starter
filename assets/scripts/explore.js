// explore.js

window.addEventListener('DOMContentLoaded', init);

const synth = window.speechSynthesis;
const voiceSelect = document.getElementById("voice-select");
let voices = [];

function populateVoiceList() {
  voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    option.setAttribute("value", voices[i].name);
    voiceSelect.appendChild(option);
  }
}

function init() {
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  const text = document.getElementById("text-to-speak");
  const button = document.querySelector("button");
  const face = document.querySelector("img");

  button.addEventListener("click", function() {
    const inputText = text.value;
    const choice = voiceSelect.selectedOptions[0].getAttribute("value");

    if (inputText.length != 0 && choice !== "select") {
      const utterThis = new SpeechSynthesisUtterance(inputText);

      for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === choice) {
          utterThis.voice = voices[i];
        }
      }

      face.src = "assets/images/smiling-open.png";
      synth.speak(utterThis);

      utterThis.addEventListener("end", function() {
        face.src = "assets/images/smiling.png";
      })
    }
  })
}