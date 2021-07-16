export const subMenu = function () {
  const submenus = document.querySelectorAll('.has-submenu')

  const burgerMenu = document.querySelector('.burger')
  const mobileMenu = document.querySelector('.mobile-menu-items')

  burgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('destination-is-open')
  })

  document.querySelector('.submenu').addEventListener('mouseenter', () => {
    document.querySelector('.a-menu-paren-icon').style.display = 'none'
    document.querySelector('.a-menu-paren-icon-active').style.display = 'inline-block'
    document.querySelector('#overlay').classList.add('-active')
  })
  
  document.querySelector('.submenu').addEventListener('mouseleave', () => {
    document.querySelector('.a-menu-paren-icon').style.display = 'inline-block'
    document.querySelector('.a-menu-paren-icon-active').style.display = 'none'
    document.querySelector('#overlay').classList.remove('-active')

    document.querySelectorAll('.has-submenu').forEach((item) => {
      if (item.classList.contains('is-open')) {
        item.classList.remove('is-open')
        // item.querySelector('.sub-submenu-ul').style.height = '0px'
      }
    })
  })

  // submenus.forEach((submenu) => {
  //   // const submenuEl = submenu.querySelector('.sub-submenu-ul')
  //   // const heightSubmenu = submenuEl.scrollHeight

  //   submenu.querySelector('button').addEventListener('click', () => {
  //     if (submenu.classList.contains('is-open')) {
  //       submenu.classList.remove('is-open')
  //       // submenuEl.style.height = '0px'
  //     } else {
  //       submenu.classList.toggle('is-open')
  //       // submenuEl.style.height = heightSubmenu + 'px'
  //     }
  //   })
  // })
}
