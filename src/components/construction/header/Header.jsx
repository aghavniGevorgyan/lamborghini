import React from 'react'

import '../header/header.css'
import LinkPages from './LinkPages'
import logo from './Logo.svg'
const links1=['О гонке','Трек','Lamborghini Super trofeo','Новости']
const links2=['Купить билеты','Смотреть онлайн','Контакты']

function Header() {

const link1=links1.map((el,idx)=><LinkPages el={el} key={idx} />)
const link2=links2.map((el,idx)=><LinkPages el={el} key={idx} />)

  return (
    <div className='headerContainer'>
      <div className='headerContainerChild'>
      <ul className='headerUl'>
      {link1}
      </ul>
        <div>
          <img src={logo} alt="Logo" className='imgLogo' />
        </div>
        <ul className='headerUl'>
          {link2}
        </ul>
      </div>
      <div className='titles'>
      <h1>LAMBORGHINI SUPER TROFEO</h1>
      <h2 className='grandFinalTime'>Гранд-финал 2022</h2>
      <p className='time'>3-6 ноября </p>
      <hr/>
      <p>автодром Портимао,Португалия</p>
      </div>
      <i className="fa fa-long-arrow-down" aria-hidden="true"></i>
    </div>
  )
}

export default Header