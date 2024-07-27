import React from 'react'

import { BsBrightnessHigh } from "react-icons/bs";
import { BsBrightnessHighFill } from "react-icons/bs";


const MenuTab = () => {
  return (
    <>
    <div className="menu_tab">
<div className="brightness_icon">
    <BsBrightnessHigh style={{fontSize: "20px"}} />
    <BsBrightnessHighFill style={{fontSize: "20px"}}/>
</div>
    </div>
    </>
  )
}

export default MenuTab