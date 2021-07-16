/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
►►► Scripts/main
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

;('use strict')

import { subMenu } from './molecules/subMenu'
import { validationForm } from './molecules/contact'
import DeleteUser from './molecules/deleteUser'
import { quotationForm } from './molecules/quotation'
import Menu from './molecules/menu'
// import QcmFill from './molecules/qcmFill'
import Sticky from './molecules/sticky'
import Slider from './molecules/slider'
import CountDown from './molecules/countDown'
import Credits from './layouts/credits'


window.addEventListener('DOMContentLoaded', () => {
  subMenu()
  validationForm()
  quotationForm()
  Menu.sticky()
  // QcmFill.init()
  Sticky.init()
  Slider.init()
  CountDown.init()  
  DeleteUser.init()  
  Credits.init()
})
