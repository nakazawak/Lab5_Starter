// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectVoice = document.getElementById('voice-select');
  const textInput = document.getElementById('text-to-speak');
  const talkButton = document.querySelector('#explore button');
  const faceIcon = document.querySelector('#explore img');

  let voices = [];

  function populateVoiceList() {
    voices = speechSynthesis.getVoices();

    for (const voice of voices) {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;

      if (voice.default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
      selectVoice.appendChild(option);
    }
  }

  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  talkButton.addEventListener('click', (event) => {
    event.preventDefault();
  
    const utterThis = new SpeechSynthesisUtterance(textInput.value);
    const selectedOption =
      selectVoice.selectedOptions[0].getAttribute("data-name");
    for (const voice of voices) {
      if (voice.name === selectedOption) {
        utterThis.voice = voice;
      }
    }
    utterThis.addEventListener('start', (event) => {
      faceIcon.src = 'assets/images/smiling-open.png';
    });

    utterThis.addEventListener('end', (event) =>{
      faceIcon.src = 'assets/images/smiling.png';
    });

    speechSynthesis.speak(utterThis);
  
    textInput.blur();
  });
}