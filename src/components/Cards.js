import React, { useEffect } from "react";
import CardItem from "./CardItem";
import "../style/Cards.scss";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Cards() {
  useEffect(() => {
    gsap.from(".achievements", {
      duration: 1,
      y: "100",
      opacity: 0,
      ease: Power3.easeout,
      scrollTrigger: {
        trigger: ".achievements",
        start: "top 100%",

        toggleActions: "restart complete  reset",
      },
    });
    //Animation Start
    /*let t1 = new TimelineLite({delay:0.3});
        t1.from('.achievements',1,{
            y:30, opacity:0, ease:Power3.easeout, delay:0.2},'start');
        */
    //ScrollTRigger cards - GSAP
    gsap.from(".achi-1-row", {
      duration: 1,
      y: "100",
      opacity: 0,
      ease: Power3.easeout,
      delay: 0.9,
      scrollTrigger: {
        trigger: ".cards__items",
        start: "top 100%",
        toggleActions: "restart complete  reset",
      },
    });
    gsap.from(".achi-2-row", {
      duration: 1,
      y: "100",
      opacity: 0,
      ease: Power3.easeout,
      delay: 0.9,
      scrollTrigger: {
        trigger: ".achi-2-row ",
        start: "top 100%",

        toggleActions: "restart complete  reset",
      },
    });
    gsap.from(".credits", {
      duration: 1,
      y: "100",
      opacity: 0,
      ease: Power3.easeout,
      delay: 0.9,
      scrollTrigger: {
        trigger: ".credits",
        start: "top 100%",
        toggleActions: "restart complete  reset",
      },
    });
  }, []);
  return (
    <>
      <div className="cards">
        <h1 className="achievements">Nuestros Logros</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items achi-1-row trophy">
              <CardItem
                src="images/real.jpg"
                text="- Nuestra Banda  destacada traida desde Bolivia -  Primeros en traer a unas de las Mejores Bandas La Real Imperial de Oruro"
                label="2019 -  Bs. As."
                url="/https://www.facebook.com/"
              />

              <CardItem
                src="images/queen.jpg"
                text="- Primera Predilecta Cholita Orureña en Bs. As. - 
              Pamela Fernandez"
                path="/services"
                label="2019 - Bs. As."
              />
            </ul>
            <ul className="cards__items achi-2-row">
              <CardItem
                src="images/bands.jpg"
                text="3 años ya trabajando con Bandas de Bolivia en las Grandes Fiestas"
                label="2017 - 2019"
                path="/services"
              />
              <CardItem
                src="images/trophy3.jpg"
                text="- Mejor Morenada Orureña -  Únicos hasta la actualidad en recibir tal reconocimiento"
                label="2018 Bs. As."
                path="/services"
              />
              <CardItem
                src="images/raymi.jpg"
                text="Únicos en Traer 3 años seguidos a uno de los Mejores Grupos Foklóricos - Raymi Bolivia -"
                label="2016 - 2018"
                
              />
            </ul>
          </div>
          <p
            className="credits"
          >
            Todo esto es posible gracias a cada uno de nuestros queridos
            Integrantes!!!
          </p>
        </div>
        {/** 
        <div className="custom-shape-divider-bottom-1606860921">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        */}
      </div>
    </>
  );
}

export default Cards;
