import React from 'react'
import './calendar.css'
import { useSelector } from 'react-redux';
import Tr from './Tr';
function Calendar() {
const {info}=useSelector((store)=>store.getInfo)
const tab=info.map((el,idx)=><Tr el={el} key={idx} />)

  return (
    <div className='calendarContainer'>
        <div className='calendarParagraphContainer'>
        <p className='calendarTitle'>календарь сезона Super Trofeo Europe 2022 года</p>
<p className='calendarParagraph'>14 в истории серии GT, посвященный автомобилям Lamborghini Huracan Super Trofeo Evo. Шесть этапов, в общей сложности 12 гонок и 600 минут соревнований будут разыграны на некоторых из самых престижных трасс Европы.</p>
        </div>
        <div>
            <table className='raceTimeTable'>
              <tbody>
              {tab}

              </tbody>
                {/* <tr>
                  <td>Этап 1: </td>
                  <td>Имола (Италия)</td>
                  <td>1-3 апреля</td>
                </tr>
                <tr>
                  <td>Этап 2:</td>
                  <td>Ле-Кастелле (Франция)</td>
                  <td>3–5 июня</td>
                </tr>
                <tr>
                  <td>Этап 3:</td>
                  <td>Мизано (Италия)</td>
                  <td>1–3 июля</td>
                </tr>
                <tr>
                  <td>Этап 4:</td>
                  <td>Спа-Франкоршам (Бельгия)</td>
                  <td>29–30 июля</td>
                </tr>
                <tr>
                  <td>Этап 5:</td>
                  <td>Барселона (Испания)</td>
                  <td>30 сентября–2 октября</td>
                </tr>
                <tr>
                  <td>Этап 6:</td>
                  <td>Портимао (Португалия)</td>
                  <td>3-4 ноября</td>
                </tr>
                <tr>
                  <td>Гранд-финал 2022 :</td>
                  <td>Портимао (Португалия)</td>
                  <td>5-6 ноября</td>
                </tr> */}
            </table>
        </div>
    </div>
  )
}

export default Calendar