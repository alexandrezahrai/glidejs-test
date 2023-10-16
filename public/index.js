var glide = new Glide('.glide', {
  // focusAt: 'center',
  startAt: 0,
  gap: 20,
  keyboard: true,
  perView: 3,
  breakpoints: {
    992: {
      perView: 2
    },
    600: {
      perView: 1
    }
  }
})

glide.mount()