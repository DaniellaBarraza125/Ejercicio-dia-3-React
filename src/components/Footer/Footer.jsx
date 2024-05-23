import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footerContainer">
            <footer>
            <div> 
                        <p>Teléfono: <a href="tel:+1234567890">+1 (234) 567-890</a>
                        </p>
                        <p><a target="_blank">www.nombrerestaurante.com</a></p>
                    </div>
                    <div className="logos">

                        <img src="https://i.pinimg.com/474x/e7/fc/c8/e7fcc89530a488a65f0035df69fd6a14.jpg" alt="" className='footerLogo'/>
                        <img src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-facebook-icon-png-image_3566130.jpg" alt=""  className='footerLogo'/>
                    </div>

                </footer>
        </div>
    )
}

export default Footer