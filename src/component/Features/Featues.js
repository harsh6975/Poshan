import React from 'react'
import menu from "../../Assests/bottom-banner-2.jpg"
import smoothe from "../../Assests/smoothie-drinks.jpg"
import order from "../../Assests/bottom-banner-3.jpg"
import './Featur.css'
function Featues() {
    return (
        <div className="feature">
            <img src={menu} alt="smoothe"></img>
            <img src={smoothe} alt="smoothe"></img>
            <img src={order} alt="smoothe"></img>
        </div>
    )
}

export default Featues
