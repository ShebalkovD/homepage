let burger = document.querySelector('.burger')
let burgerMenu = document.querySelector('.burger__menu')
let burgerItem = document.querySelectorAll('.burger__menu-item')
let body = document.querySelector('body')
burger.onclick = () => {
 
  burgerMenu.classList.add('burger__active')
 
  burgerMenu.classList.toggle('animate__fadeInRight')
  burger.classList.toggle('burgerBtn__active')
  body.classList.toggle('lock')
  if(burgerMenu.classList.contains('burger__active')){
    burgerMenu.classList.toggle('animate__fadeOutRight')

    // setTimeout(() => burgerMenu.classList.remove('burger__active'), 500)
  }
}

burgerItem.forEach((el) => {
  el.onclick = () => {
    burgerMenu.classList.remove('burger__active')
    burger.classList.remove('burgerBtn__active')
    body.classList.remove('lock')
    burgerMenu.classList.add('animate__fadeOutRight')
    burgerMenu.classList.remove('animate__fadeInRight')
  }
})





// burger.onclick = () => {
//   burgerMenu.classList.toggle('burger__active')
//   burger.classList.toggle('burgerBtn__active')
//   body.classList.toggle('lock')

// }



