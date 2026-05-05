// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectedHorn = document.getElementById('horn-select'); 
  const hornImage = document.querySelector('#expose img');
  const hornAudio = document.querySelector('#expose audio');

  selectedHorn.addEventListener('change', (event) => {
    const selectedHorn = event.target.value;
    
    hornImage.src = `assets/images/${selectedHorn}.svg`;
    hornAudio.src = `assets/audio/${selectedHorn}.mp3`;
  });

  const volumeSlider = document.getElementById('volume');
  const volumeLogo = document.querySelector('#volume-controls img');

  volumeSlider.addEventListener('input', () => {
    const volume = volumeSlider.value;
    hornAudio.volume = volume / 100;

    if(volume == 0)
      volumeLogo.src = `assets/icons/volume-level-0.svg`;
    else if(volume >= 1 && volume < 33)
      volumeLogo.src = `assets/icons/volume-level-1.svg`;
    else if(volume >= 33 && volume < 67)
      volumeLogo.src = `assets/icons/volume-level-2.svg`;
    else if(volume >= 67 && volume <= 100)
      volumeLogo.src = `assets/icons/volume-level-3.svg`;
  });

  const playButton = document.querySelector('#expose > button');
  const jsConfetti = new JSConfetti();

  playButton.addEventListener('click', () => {
    hornAudio.play();

    if(selectedHorn.value == 'party-horn')
      jsConfetti.addConfetti();
  });


  
}