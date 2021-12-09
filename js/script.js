function removeTransition(e) {
    if( e.propertyName !== 'playing' )
    e.target.classList.remove('playing')
    else {
      e.target.classList.add('playing');
    }

  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;{
    }
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const cards = Array.from(document.querySelectorAll('.card'));
  cards.forEach(card => card.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);;