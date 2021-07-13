let btns = document.getElementById('btns');
let btnPlay = document.getElementById('btnPlay');
let btnPause = document.getElementById('btnPause');
let video = document.getElementById('video')
let preloader = document.getElementById('preloader')
let box = document.getElementById('box')

window.addEventListener('load', (video) => {
  preloader.classList.add('active')
  box.classList.add('active')
})

btns.addEventListener('click', (play) => {
  btnPlay.classList.toggle('active')
  btnPause.classList.toggle('active')

  if (btnPlay.classList.contains('active')) {
    video.pause()
  } else {
    video.play()
  }
})