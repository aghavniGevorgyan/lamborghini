import React from "react";
import "./superTrofeo.css";
import pol1 from "../main/Polygon1.svg";
import pol2 from "../main/Polygon2.svg";
import auto from "../main/auto.png";

function SuperTrofeo() {
  return (
    <div className="trofeoContainer">
      <div className="TrofeoFirstPart">
        <div className="firstPartDiv">
          <p className="trofeoTitle">СУПЕР ТРОФЕО ЭВО</p>
          <div className="trofeoParagraph">
            <p>
              Новый Huracán Super Trofeo EVO достигает еще больших высот, чем
              его прославленный предшественник, благодаря полностью
              переработанной аэродинамике. Huracán Super Trofeo EVO является
              идеальной стартовой площадкой для всех водителей, которые хотят
              начать карьеру в гонках класса GT.
            </p>
            <p>
              Huracán EVO — это эволюция самого успешного Lamborghini с
              двигателем V10. В результате тонкой настройки и усовершенствования
              существующих функций в сочетании с новыми конструктивными
              решениями, повышающими производительность, автомобиль выделяется
              своей способностью предугадывать и удовлетворять поведение,
              ожидания и желания водителя.
            </p>
          </div>
        </div>
        <div className="polygonsDiv">
          <div className="pol1"> </div>
          <div className="pol2"> </div>
          <div className="auto"></div>

        </div>
        <div className="aboutAuto">
            <p>ПЕРЕМЕЩЕНИЕ 5204 см³</p>
            <p>КРУТЯЩИЙ МОМЕНТ 570 Нм при 6500 об/мин</p>
            <p>МОЩНОСТЬ (л.с.) / МОЩНОСТЬ (КВТ) 620 л.с. при 8250 об/мин</p>
            <p>МАКС. СКОРОСТЬ 325 км /ч</p>
            <p>0-100 КМ/Ч 2,9 с</p>
          </div>
      </div>
      <div className="secondPartDiv">
        <div className="secondDivChild">
        <div className="secondDivText">
          <div className="first">
            <p>Его неповторимый дизайн — это естественная эволюция культовых линий Huracán, включающая новые сложные решения, поднимающие производительность и вызывающие эмоции на невиданный ранее уровень.</p>
          </div>
          <div className="second">
            <p>Беспрецедентный обвес был разработан инженерами отдела автоспорта Automobili Lamborghini в сотрудничестве с Dallara Engineering и Lamborghini Centro Stile. Последний также разработал стартовую ливрею для автомобиля в честь партнерства между Lamborghini Squadra Corse и Roger Dubuis, которое началось в 2018 году.</p>
          </div>
          <div className="third">
            <p>Среди наиболее очевидных изменений в обвесе Lamborghini Huracan Super Trofeo EVO — задний спойлер на заднем капоте и верхний воздухозаборник, которые делают его мгновенно узнаваемым для зрителей.</p>
          </div>
        </div>
        <div className="autoPoly1"></div>
        <div className="autoPoly2"></div>

        </div>

      </div>
    </div>
  );
}

export default SuperTrofeo;
