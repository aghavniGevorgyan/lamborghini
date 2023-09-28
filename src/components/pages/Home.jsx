import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchInfo } from '../../redux/slice/infoSlice'
import Footer from '../construction/footer/Footer'
import Header from '../construction/header/Header'
import Blog from '../construction/main/Blog'
import Calendar from '../construction/main/Calendar'
import Quotes from '../construction/main/Quotes'
import Race from '../construction/main/Race'
import Staff from '../construction/main/Staff'
import SuperTrofeo from '../construction/main/SuperTrofeo'
import Track from '../construction/main/Track'
import Video from '../construction/main/Video'
import '../pages/pages.css'


function Home() {
  const dispatch=useDispatch()
  const getData=async ()=>{
    const url='https://6507f86856db83a34d9b8549.mockapi.io/lamborghini'
    dispatch(fetchInfo({url}))
  }
useEffect (()=>{
  getData()
},[])
  return (
    <div>
        <Header />
        <div className='center'>
        <Race />
        <Staff />
        <Calendar />
        </div>
        <Track />
        <SuperTrofeo />
        <div className='center'>
          <Video />
          <Blog />
          <Quotes />
        </div>
        <Footer />
    </div>
  )
}

export default Home