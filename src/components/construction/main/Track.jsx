import React from 'react'
import './track.css'
import auto from '../main/trackAuto.png'

function Track() {
  return (
    <div>
        <div className='trackBackground'>
            <div className='trackContainer'>
                <div className='trackParagraph'>
                    <p className='trickTitle'>ТРЕК ПОРТИМАО</p>
                    <p className='trackParagraphText'>Autodromo Internacional do Algarve находится в одноименном регионе на юге Португалии, недалеко от города Портиман. Открытый в октябре 2008 года автогоночный комплекс является одним из самых современных в Европе, раскинувшись на площади около 300 гектаров среди холмов, окружающих португальский город, а длина самой трассы составляет 4684 метра.</p>
                </div>
            </div>
            <img src={auto} alt="" className='trackAuto' />
        </div>
    </div>
  )
}

export default Track