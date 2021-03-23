const mySwiper = new Swiper('.swiper-container', {
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
})
//------Scroll Links smooth--------
const scrollLinks = Array.from(document.querySelectorAll('.scroll-link'))
const scrollLinksHandler = arrayLinks => {
  arrayLinks.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault()
      const href = item.getAttribute('href')
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  })
}
scrollLinksHandler(scrollLinks)

//-------Cart---------
const cartBtn = document.querySelector('.button-cart')
const overlay = document.querySelector('.overlay')

const cartBtnHandler = e => {
	e.preventDefault()
	overlay.classList.add('show')
}
cartBtn.addEventListener('click', cartBtnHandler)

function modalHandler(e){
	if(e.target.classList.contains('modal-close')){
			this.classList.remove('show')
	}else if(e.target.classList.contains('overlay')){
			this.classList.remove('show')
	}
}
overlay.addEventListener('click', modalHandler)
