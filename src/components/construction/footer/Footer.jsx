import React from 'react'
import '../footer/footer.css'
import logo from '../header/Logo.svg'
import Contact from './Contact'

function Footer() {
  return (
    <div className='footerContainer'>
        <Contact />
        <div className='footPart'>
          <p>Design by Aghavni Gevorgyan</p>
        <img src={logo} alt="" />
        <p>Политика конфиденциальности </p>
        </div>
    </div>
  )
}

export default Footer