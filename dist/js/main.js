const burger = document.querySelector('.burger')
const burgerMenu = document.querySelector('.burger__menu')
burger.onclick = () => {
  burgerMenu.classList.toggle('burger__active')
}

addEventListener('click', () => {
    if( event.target != burger  ){
      burgerMenu.classList.remove('burger__active') 
    }
})

