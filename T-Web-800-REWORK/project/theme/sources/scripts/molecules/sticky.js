/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
►►► Scripts/molecules/sticky
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
'use strict'

import StickySidebar from 'sticky-sidebar'

const Sticky = {
  init: () => {
    let container = document.querySelector('.sticky-container')


    if (!container) {
      return
    }

    var stickySidebar = new StickySidebar('#sidebar', {
      containerSelector: '.sticky-container',
      innerWrapperSelector: '.sidebar-inner',
      topSpacing: 100,
      bottomSpacing: 0,
      minWidth: 800
    })
    stickySidebar.updateSticky();
  }
}

export default Sticky
