/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
►►► Scripts/layouts/credits
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
'use strict'

const Credits = {
  init: () => {
    const credits = document.querySelector('#credits')
    const creditsOpen = document.querySelector('#credits-opener')
    const creditsClose = document.querySelector('#credits-closer')

    if (!credits) {
      return
    }

    creditsOpen.addEventListener('click', (e) => {
      e.preventDefault()

      credits.classList.toggle('active')
    })

    creditsClose.addEventListener('click', (e) => {
      e.preventDefault()

      credits.classList.toggle('active')
    })
  }
}

export default Credits

