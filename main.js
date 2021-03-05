import Flickity from 'flickity'

window.onload = function() {
  var elem = document.querySelector('.main-carousel');

  var flkty = new Flickity( elem, {
    draggable: 1,
    cellAlign: 'left',
    contain: true,
    wrapAround: false,
    prevNextButtons: false,
    pageDots: false,
    lazyLoad: 1,
  });
}


function stickHeader (item) {
  const head = document.querySelector(item)
  
  window.addEventListener('scroll', function() {
    const scrollDistance = window.scrollY
  
    if (scrollDistance >= 10) {
      head.classList.add('shadow-sm')
    } else {
      head.classList.remove('shadow-sm')
    }
  })
}

stickHeader('header')