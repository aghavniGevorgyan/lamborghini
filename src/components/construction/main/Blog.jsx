import React, { useState } from "react";
import "./blog.css";
import right from './right.svg'
import left from './left.svg'
import blog1 from './blog1.jpg'
import blog2 from './blog2.jpg'


function Blog() {
  const [textStatus,setTextStatus]=useState(false)
  const [textStatus2,setTextStatus2]=useState(false)

  const paragraph1='Нельсон Пике-младший из Ansa Motorsports обеспечил возвращение титула Lamborghini Super Trofeo Grand Finals в Северную Америку впервые с 2017 года после победы и второе место в паре 50-минутных гонок на Autodromo Nacionale do Algarve в Портимане.Между тем, титул Pro-Am был подорван, поскольку Брайан Ортис и Себастьян Карасо из Precision Performance Motorsports стали первым полностью пуэрто-риканским составом, выигравшим Гранд-финал, сделав это драматично после того, как сравнялись по очкам с Брайсон Лью и Джон Дубетс.Анджей Левандовски из VS Racing одержал свою вторую победу в Гранд-финале, добавив титул Am к своему успеху Pro-Am, которого он добился с Каролем Башем в 2019 году, в то время как бельгийские братья и сестры Бенуа и Франсуа Семулен завоевали корону Кубка Lamborghini для Semspeed.Победитель Гранд-финала в категории Pro Нельсон Пике-младший (#130 Ansa Motorsports) сказал: « Выиграть титул удивительно, но это определенно была непростая гонка. Я попросил своего инженера еще немного стравить давление в шинах на пит-стопе, но этого оказалось недостаточно, поэтому на втором отрезке у меня были проблемы. Я видел, как приближается Дэнни [Формал] [Wayne Taylor Racing] и немного волновался, потому что он мог что-то попробовать, потому что ему было нечего терять. Я знал, что этой секунды было бы достаточно, чтобы выиграть титул, но всегда хочется сделать это, выиграв гонку».'
const paragraph2='Утренний дождь означал, что мокрая гонка была объявлена ​​до старта, и перед большинством экипажей стоял выбор: использовать слики или мокрые шины. Большинство участников предпочли мокрую трассу, но поулист Спинелли начал гонку на сликах и сразу же поплатился за это. Huracan № 61 опустился вниз, заняв всего 28-е место, поскольку Бондуэль опередил бегунов Pro-Am Кароля Баша (Micanek Motorsport) и Льюиса Уильямсона (Oregon Team).Вскоре Уильямсон опередил Баса, заняв первое место в Pro-Am и заняв второе место в общем зачете, но гонщик команды Орегона не был доволен тем, что остался на этом месте, поскольку он отнимал у Бондюэля часть времени впереди. Вскоре Уильямсон оказался позади Бондюэля и сделал решающий рывок на восьмом повороте, чтобы захватить лидерство на седьмом круге. Таков был темп машины под номером 27, Уильямсон построил трехсекундный отрыв и удерживал лидерство до пит-стопов.Бондуэль, который боролся с высоким давлением в шинах на первом отрезке, перешел на слики на пит-стопах и снова вышел в лидеры после того, как обогнал Бромека Форманека, в то время как автомобиль Target Racing из Milan Teekens оспаривал третье место с машиной Iron Dames. Дориан Пин. Пин № 83 поднялся на второе место перед Тикенсом после остановок, но в конце гонки попал под давление со стороны Тикенса. Teekens обогнал Пина на последних кругах и финишировал вторым после вращения Форманека за два круга до финиша, в то время как Пин также развернулся на последнем круге и занял пятое место в общем зачете.Получив прибыль от вращения Форманека, Сиглия и Уильямсон финишировали третьими в общем зачете и первыми в Pro-Am, завоевав титул на гонку раньше. Бенуа Семулен и Франсуа Семулен выиграли в классе Lamborghini Cup, опередив Ван дер Хорста и Ханса Фабри, а Левандовски одержал победу в классе Am.'
const sliceText=paragraph1.slice(0,paragraph1.indexOf('Precision'))
const sliceText2=paragraph2.slice(0,paragraph2.indexOf('Бондуэль'))

const etcClick=()=>{
  setTextStatus(true)
  if (textStatus) {
  setTextStatus(false)
  }
}

const etcClick2=()=>{
  setTextStatus2(true)
  if (textStatus2) {
    setTextStatus2(false)
    }
}

return (
    <div className="blogContainer">
      <p className="blogTitle">БЛОГ</p>
      <div>
        <img src={left} alt="" />
        <img src={right} alt="" />
      </div>
      <div className="blockParagraphContainer">
        <div>
            <img src={blog1} alt="" className="blogImg" />
            <div  className="blockChild">
                <p className="blogParagraphTitle">НЕЛЬСОН ПИКЕ СТАЛ ПОБЕДИТЕЛЕМ ГРАНД-ФИНАЛА В ПОРТИМАНЕ</p>
                <p className="blogParagraph">{textStatus?paragraph1:sliceText}</p>
                <span className="etc" onClick={etcClick}>{textStatus?'<<':'читать подробнее...'}</span>
            </div>
        </div>
        <div>
            <img src={blog2} alt="" className="blogImg" />
            <div className="blockChild">
                <p className="blogParagraphTitle">ГРАНД ФИНАЛ. ДЕНЬ 1</p>
                <p className="blogParagraph">{textStatus2?paragraph2:sliceText2}</p>
                <span className="etc" onClick={etcClick2}>{textStatus2 ?'<<':'читать подробнее...'}</span>

            </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
