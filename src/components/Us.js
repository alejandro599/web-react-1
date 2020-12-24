import React, { useEffect} from "react";
import "../style/Us.scss";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Us() {
  useEffect(() => {
    gsap.from(".about-us", {
      duration: 1,
      width:"-200",
      height:"-100",
      opacity: 0,
      ease: Power3.easeout,
      scrollTrigger: {
        trigger: ".about-us",
        start: "top 100%",
        end:"bottom 30% ",
        toggleActions: "restart complete  reset",
      },
    });
    gsap.from(".h2", {
      duration: 1.5,
      y: "-100",
     
      opacity: 0,
      ease: Power3.ease,
      scrollTrigger: {
        trigger: ".h2",
        start: "top 100%",
        toggleActions: "restart complete  reset",
      },
    });
    gsap.from(".p", {
      duration: 2,
      x: "10",
      opacity: 0,
      ease: Power3.ease,
      scrollTrigger: {
        trigger: ".p",
        start: "top 100%",
        toggleActions: "restart complete  reset",
      },
    });
    gsap.from(".lema", {
      duration: 1.5,
      y: "-100",
     
      opacity: 0,
      ease: Power3.ease,
      scrollTrigger: {
        trigger: ".lema",
        start: "top 100%",
        toggleActions: "restart complete  reset",
      },
    });
    gsap.from(".virgen", {
      duration: 2,
      width:"100",
     
     
      opacity: 0,
      ease: Power3.easeout,
      scrollTrigger: {
        trigger: ".virgen",
        
        start: "top 100%",
        toggleActions: "restart complete  ",
      },
    });
  
}, []);
  return (
    
      <div className="us-containter">
        <img className="virgen" src="images/virgen.jpg" alt="" />
        
        
        <div className="about-us">
          <h2 className="h2">Sobre Nosotros...</h2>
          <p className="p">
            Somos una Fraternidad de danza folklórica boliviana radicada en Bs.
            As. , Argentina en devoción a la Virgen del Socavón. <br />
            Nuestra organización fue fundada como institución el 30 de Agosto de
            2013, organización sin fines de lucro. <br/>
            Tenemos como Objetivo Llevar a lo más alto nuestra Cultura.  <br/><br/></p>
            <p className="lema">
            <u> Nuestro Lema:</u> <i><b className="cult">CULTURA ORUREÑA!!!</b></i> </p>
            
          
        </div>
      </div>
    
  );
}

export default Us;
