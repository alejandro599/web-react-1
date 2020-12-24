import React, { useEffect } from "react";
import "../style/AboutUs.scss";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function AboutUs() {
  useEffect(() => {
    gsap.from(".tittle-1", {
      duration: 1,
      y: "100",
      opacity: 0,
      ease: Power3.easeout,
      scrollTrigger: {
        trigger: ".tittle-1",
        start: "top 100%",

        toggleActions: "restart complete  reset",
      },
    });
    gsap.from(".card-1", {
      duration: 1,
      y: "100",
      opacity: 0,
      ease: Power3.easeout,
      scrollTrigger: {
        trigger: ".card-1",
        start: "top 100%",

        toggleActions: "restart complete  reset",
      },
    });
    gsap.from(".card-2", {
      duration: 1.3,
      y: "150",
      opacity: 0,
      ease: Power3.easeout,
      scrollTrigger: {
        trigger: ".card-2",
        start: "top 100%",

        toggleActions: "restart complete  reset",
      },
    });
    gsap.from(".card-3", {
      duration: 1.6,
      y: "200",
      opacity: 0,
      ease: Power3.easeout,
      scrollTrigger: {
        trigger: ".card-3",
        start: "top 100%",

        toggleActions: "restart complete  reset",
      },
    });
    gsap.from(".card-4", {
      duration: 1,
      y: "100",
      opacity: 0,
      ease: Power3.easeout,
      scrollTrigger: {
        trigger: ".card-4",
        start: "top 100%",

        toggleActions: "restart complete  reset",
      },
    });
    gsap.from(".card-5", {
      duration: 1.3,
      y: "150",
      opacity: 0,
      ease: Power3.easeout,
      scrollTrigger: {
        trigger: ".card-5",
        start: "top 100%",

        toggleActions: "restart complete  reset",
      },
    });
    gsap.from(".card-6", {
      duration: 1.6,
      y: "200",
      opacity: 0,
      ease: Power3.easeout,
      scrollTrigger: {
        trigger: ".card-6",
        start: "top 100%",

        toggleActions: "restart complete  reset",
      },
    });
  }, []);

  return (
    <>
      <div className="pros-container">
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
        <h2 className="tittle tittle-1 ">¿Por qué elegirnos?</h2>
        <div className="card card-1">
          <i className="fas fa-hands hands"></i>
          <div className="text-card">
            <h2>Tradición</h2>
            <p>
              Partiendo desde la devocion, respetamos arduamente todas nuestras tradiciones de Nuestra Cultura Orureña.
            </p>
          </div>
        </div>
        <div className="card card-2">
          <i className="fas fa-user-tie hands"></i>
          <div className="text-card">
            <h2>Exigencia</h2>
            <p>
              Creemos en el valor positivo de esta, más en cuanto a la vestimenta se refiere, poniendo en conciencia el respeto por esta.
            </p>
          </div>
        </div>
        <div className="card card-3">
          <i className="fas fa-level-up-alt hands"></i>
          <div className="text-card">
            <h2>Crecimiento</h2>
            <p>
              Siguiendo el linaje por el que vamos, no nos gusta quedarnos en el mismo lugar, tenemos la convicción de que en el detalle está la diferencia, buscando siempre el constante avanze.
            </p>
          </div>
        </div>
        <div className="card card-4">
        <i class="fas fa-book-open hands"></i>
          <div className="text-card">
            <h2>Transparencia</h2>
            <p>
              Creemos que en la Transparencia está la Confianza, por lo que mantenemos las cuentas claras, así como en cada actividad, a dispocisión de cada uno de nuestros integrantes.
            </p>
          </div>
        </div>
        <div className="card card-5">
        <i class="far fa-grin-beam hands"></i>
          <div className="text-card">
            <h2>Diversión</h2>
            <p>
              Todo con una sonsira es mejor, por lo que nos enfocamos en que en todo momento disfruten, priorizando su bienestar.
            </p>
          </div>
        </div>
        <div className="card card-6">
        <i class="fas fa-briefcase hands"></i>
          <div className="text-card">
            <h2>Kit del Moreno</h2>
            <p>
              Tenemos nuestro propio Kit del Moreno, repleto de diferentes artículos únicos y exclusivamente Quirquinchos.
            </p>
          </div>
        </div>
        <div className="card card-6">
        <i class="fas fa-shield-alt hands"></i>
          <div className="text-card">
            <h2>Respaldo</h2>
            <p>
              Pertenecemos a la F.A.F.C.B.A. la única y gran federación de Morenadas en Bs. As., contando con su respaldo para las grandes fiestas y diferentes actividades. 
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
