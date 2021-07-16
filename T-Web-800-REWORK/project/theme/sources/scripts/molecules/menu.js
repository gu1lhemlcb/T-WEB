/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
►►► Scripts/molecules/menu
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
'use strict'

const Menu = {
  
  sticky: () => {
    if (!window.matchMedia("(max-width: 1024px)").matches) {
      
      
      let header = document.querySelector('.desktop-header')
      let main = document.querySelector('main')
      
      window.onscroll = () => {
        if (window.scrollY > 1) {
          header.classList.add('sticky')
          main.style.marginTop = 120   + 'px'
          header.style.padding =  '1.8rem'
        } else {
          header.classList.remove('sticky')
          main.style.marginTop = '0'
          header.style.padding =  '3.8rem'
        }
      }
    } else {
      return
    }
  }
}

export default Menu
