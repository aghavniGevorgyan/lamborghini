import React, { useState } from 'react'
import './quotes.css'
import quotes from './quotes.png'

function Quotes() {
    const [status,setStatus]=useState(false)
    const text='«Я очень доволен титулом, моей второй победой в Am и четвертой в Super Trofeo, мне очень приятно делать это в этом году, потому что уровень соревнований очень высок. Должен Обладатель кубка Lamborghini добавил: «Здорово выиграть титул, спустя четыре года после последнего, а за это время произошло так много всего. Из-за COVID-19, а затем моей тяжелой аварии в Барселоне я не мог так много ездить в последние годы, поэтому я очень доволен своим возвращением. Сегодня утром была тяжелая гонка, но я справился». сказать, сегодня было довольно легко, так как я все время контролировал ситуацию».'
    const showText=()=>{
        setStatus(true)
        if (status) {
            setStatus(false)
        }
    }
    const sliceText=text.slice(0,text.indexOf('время'))

    return (
    <div className='quotesContainer'>
        <div className='qoutesParagraphContainer'>
            <div>
                <p className='firstQuotes'>Чемпион Am</p>
                <p className='secondQuotes'>Анджей Левандовски </p>
                <p className='thirdQuotes'>«Я очень доволен титулом, моей второй победой в Am и четвертой в Super Trofeo, мне очень приятно делать это в этом году, потому что уровень соревнований очень высок. Должен сказать, сегодня было довольно легко, так как я все время контролировал ситуацию».</p>
            </div>
            <div>
                <p className='firstQuotes'>Обладатель кубка Lamborghini</p>
                <p className='secondQuotes'>Жерар ван дер Хорст </p>
                <p className='thirdQuotes' onClick={showText}>
{status?text:sliceText+'...'}
                   </p>
                    </div>
        </div>
        <div>
            <img src={quotes} alt="" className='smallImage' />
        </div>
    </div>
  )
}

export default Quotes