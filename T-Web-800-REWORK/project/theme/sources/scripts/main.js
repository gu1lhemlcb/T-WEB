/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
►►► Scripts/main
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

;('use strict')

import { subMenu } from './molecules/subMenu'
import DeleteUser from './molecules/deleteUser'
import Menu from './molecules/menu'
import Sticky from './molecules/sticky'
import Slider from './molecules/slider'
import Credits from './layouts/credits'
import Locations from './layouts/locations'
import Contact from './layouts/contact'


window.addEventListener('DOMContentLoaded', () => {
  subMenu()
  Contact.init()
  Menu.sticky()
  // QcmFill.init()
  Sticky.init()
  Slider.init()
  DeleteUser.init()  
  Credits.init()
  Locations.init()

})
