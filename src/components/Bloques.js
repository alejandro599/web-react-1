import React,{useEffect} from "react";
import "../style/Bloques.scss";
import "../style/Bloques-2.scss";
import "../style/Bloques-3.scss";

import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Bloques() {
  useEffect(() => {
    gsap.from(".scroll-1", {
      duration: 1,
      y: "100",
      opacity: 0,
      ease: Power3.ease,
      scrollTrigger: {
        trigger: ".scroll-1",
        start: "top 100%",
        toggleActions: "restart complete  reset",
      },
    });
    gsap.from(".scroll-2", {
      duration: 1,
      y: "100",
      opacity: 0,
      ease: Power3.ease,
      scrollTrigger: {
        trigger: ".scroll-2",
        start: "top 100%",
        toggleActions: "restart complete  reset",
      },
    });
    gsap.from(".scroll1", {
      duration: 1,
      y: "100",
      opacity: 0,
      ease: Power3.ease,
      scrollTrigger: {
        trigger: ".scroll1",
        start: "top 100%",
        toggleActions: "restart complete  reset",
      },
    });
    gsap.from(".scroll2", {
      duration: 1,
      y: "100",
      opacity: 0,
      ease: Power3.ease,
      scrollTrigger: {
        trigger: ".scroll2",
        start: "top 100%",
        toggleActions: "restart complete  reset",
      },
    });
    gsap.from(".scroll3", {
      duration: 1,
      y: "100",
      opacity: 0,
      ease: Power3.ease,
      scrollTrigger: {
        trigger: ".scroll3",
        start: "top 100%",
        toggleActions: "restart complete  reset",
      },
    });
    gsap.from(".scroll4", {
      duration: 1,
      y: "100",
      opacity: 0,
      ease: Power3.ease,
      scrollTrigger: {
        trigger: ".scroll4",
        start: "top 100%",
        toggleActions: "restart complete  reset",
      },
    });
    gsap.from(".scroll5", {
      duration: 1,
      y: "100",
      opacity: 0,
      ease: Power3.ease,
      scrollTrigger: {
        trigger: ".scroll5",
        start: "top 100%",
        toggleActions: "restart complete  reset",
      },
    });
    gsap.from(".scroll6", {
      duration: 1,
      y: "100",
      opacity: 0,
      ease: Power3.ease,
      scrollTrigger: {
        trigger: ".scroll6",
        start: "top 100%",
        toggleActions: "restart complete  reset",
      },
    });
    gsap.from(".scroll7", {
      duration: 1,
      y: "100",
      opacity: 0,
      ease: Power3.ease,
      scrollTrigger: {
        trigger: ".scroll7",
        start: "top 100%",
        toggleActions: "restart complete  reset",
      },
    });
    gsap.from(".scroll8", {
      duration: 1,
      y: "100",
      opacity: 0,
      ease: Power3.ease,
      scrollTrigger: {
        trigger: ".scroll8",
        start: "top 100%",
        toggleActions: "restart complete  reset",
      },
    });
    gsap.from(".scroll9", {
      duration: 1,
      y: "100",
      opacity: 0,
      ease: Power3.ease,
      scrollTrigger: {
        trigger: ".scroll9",
        start: "top 100%",
        toggleActions: "restart complete  reset",
      },
    });
    gsap.from(".scroll10", {
      duration: 1,
      y: "100",
      opacity: 0,
      ease: Power3.ease,
      scrollTrigger: {
        trigger: ".scroll10",
        start: "top 100%",
        toggleActions: "restart complete  reset",
      },
    });
    gsap.from(".scroll11", {
      duration: 1,
      y: "100",
      opacity: 0,
      ease: Power3.ease,
      scrollTrigger: {
        trigger: ".scroll11",
        start: "top 100%",
        toggleActions: "restart complete  reset",
      },
    });
  }, []);
  return (
    <>
      <div className="bloq-section">
        {/** 
      <div class="custom-shape-divider-bottom-1606860921">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        */}
        <h1 className="tittle scroll">Nuestros Bloques!!! </h1>
        {/****************** SEBASTIÁN PAGADOR*****************/ }
        <div className="block-container iconos scroll-1">
          <div className="info-container">
            <div className="logo-container">
              <div className="logo"></div>
            </div>
            <div className="text">
              <h2>Íconos</h2>
              <p>
                Figuras Icónicas de nuestra Familia, Jorge Bravo y Ramiro Rojas.
              </p>
            </div>
          </div>
          <div className="img-container">
            <div className="img"></div>
          </div>
        </div>
        {/****************** SEBASTIÁN PAGADOR*****************/ }
        <div className="block-container scroll-2">
          <div className="info-container">
            <div className="logo-container">
              <div className="logo"></div>
            </div>
            <div className="text">
              <h2>Sebastián Pagador</h2>
              <p>
                Un Bloque compuesto por Figuras Caporales, caracterizados por su elegancia
              </p>
            </div>
          </div>
          <div className="img-container">
            <div className="img"></div>
          </div>
        </div>
        {/****************** KACHAMOSAS*****************/ }
        <div className="block-container kacha scroll1 ">
          <div className="info-container">
            <div className="logo-container">
              <div className="logo"></div>
            </div>
            <div className="text">
              <h2>K'achamosas</h2>
              <p>
                Un Bloque Compuesto por Bellas Figuras o Chinas como se las conoce, al cual pertenece la Reyna Actual, Noyta Ugarte. <br/>
                
              </p>
            </div>
          </div>
          <div className="img-container ">
            <div className="img"></div>
          </div>
        </div>
        {/***************BLOQUE MISKIS CHOLAS***************/ }
        <div className="block-container cholas scroll2 ">
          <div className="info-container">
            <div className="logo-container">
              <div className="logo"></div>
            </div>
            <div className="text">
              <h2>Miski Cholas</h2>
              <p>
                Nuestras querida Cholas antiguas, pioneras en nuestra institución.
              </p>
            </div>
          </div>
          <div className="img-container">
            <div className="img"></div>
          </div>
        </div>
        {/***************BLOQUE ARAWI***************/ }
        <div className="block-container arawi scroll3">
          <div className="info-container">
            <div className="logo-container">
              <div className="logo"></div>
            </div>
            <div className="text">
              <h2>Arawi</h2>
              <p>
                Bellas Figuras de nuestra Familia, ya con una trayectoria por nuestra Fraternidad.
              </p>
            </div>
          </div>
          <div className="img-container">
            <div className="img"></div>
          </div>
        </div>
         {/***************BLOQUE ORURO***************/ }
         <div className="block-container oruro scroll4">
          <div className="info-container">
            <div className="logo-container">
              <div className="logo"></div>
            </div>
            <div className="text">
              <h2>Bloque Oruro</h2>
              <p>
                hermosas cholitas vicuñas y Morenos, siendo el bloque más numeroso en esta categoria, a donde pertenece nuestra Reyna de Reynas Orureñas, Pamela Fernandez.
              </p>
            </div>
          </div>
          <div className="img-container">
            <div className="img"></div>
          </div>
        </div>
         {/***************Miskis Huaris***************/ }
         <div className="block-container m-h scroll5">
          <div className="info-container">
            <div className="logo-container">
              <div className="logo"></div>
            </div>
            <div className="text">
              <h2>Miskis Huaris</h2>
              <p>
                Jóvenes Chinas y Super Achachis, caracterizados por su gran carisma y combinación de trajes.
              </p>
            </div>
          </div>
          <div className="img-container">
            <div className="img"></div>
          </div>
        </div>
        {/***************BLOQUE San Isidro***************/ }
        <div className="block-container sanIsidro scroll6 ">
          <div className="info-container">
            <div className="logo-container">
              <div className="logo"></div>
            </div>
            <div className="text">
              <h2>San Isidro</h2>
              <p>
                Un bloque querido por venir desde muy lejos, compuesto por chinas y sus achachis.
              </p>
            </div>
          </div>
          <div className="img-container">
            <div className="img"></div>
          </div>
        </div>
        {/***************Chinas Morenas Baires***************/ }
        <div className="block-container chinas  scroll7">
          <div className="info-container">
            <div className="logo-container">
              <div className="logo"></div>
            </div>
            <div className="text">
              <h2>Chinas Morenas Baires</h2>
              <p>
                Nuestras queridas chinas Morenas. 
              </p>
            </div>
          </div>
          <div className="img-container">
            <div className="img"></div>
          </div>
        </div>
        {/***************BLOQUE Reyes Morenos***************/ }
        <div className="block-container reyes scroll8">
          <div className="info-container">
            <div className="logo-container">
              <div className="logo"></div>
            </div>
            <div className="text">
              <h2>Reyes Morenos</h2>
              <p>
                Nuestro magno bloque de reyes morenos, caracterizados por su gran energia.
              </p>
            </div>
          </div>
          <div className="img-container">
            <div className="img"></div>
          </div>
        </div>
        {/***************Central Pagador***************/ }
        <div className="block-container central scroll9">
          <div className="info-container">
            <div className="logo-container">
              <div className="logo"></div>
            </div>
            <div className="text">
              <h2>Central Pagador</h2>
              <p>
                Extraordinario bloque Central pagador, integrado por sus Cholas Antiguas, Bellas Figuras y sus poderosos Achachis.
              </p>
            </div>
          </div>
          <div className="img-container ">
            <div className="img"></div>
          </div>
        </div>
        {/***************BLOQUE Candila***************/ }
        <div className="block-container candila scroll10">
          <div className="info-container">
            <div className="logo-container">
              <div className="logo"></div>
            </div>
            <div className="text">
              <h2>Candila</h2>
              <p>
                Un bloque compuesto por Jóvenes y bellas Chinas, acompañados de sus Figuras Caporal, Distinguidos por su alegria y sobre todo Prolijidad.
              </p>
            </div>
          </div>
          <div className="img-container ">
            <div className="img"></div>
          </div>
        </div>
        {/*************** Orureños de Corazón ***************/ }
        <div className="block-container orureños scroll11">
          <div className="info-container">
            <div className="logo-container">
              <div className="logo"></div>
            </div>
            <div className="text">
              <h2>Orureños de Corazón</h2>
              <p>
                Miembros nuevos reconocidos, y ya queridos dentro de nuestra Familia, constituido por Cholas antiguas, sus hermosas Chinas con sus grandes Achachis.
              </p>
            </div>
          </div>
          <div className="img-container">
            <div className="img"></div>
          </div>
        </div>
        
      </div>
    </>
  );
}
