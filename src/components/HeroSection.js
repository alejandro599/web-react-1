import React,{useRef,useEffect} from "react";
import {TweenMax, Power3} from 'gsap';
import "../App.scss";
import "../style/HeroSection.scss";
//import { Button } from "./Button";

function HeroSection() {
  let h1Item = useRef(null);
  let pItem = useRef(null);
  useEffect(() => {
    TweenMax.to(
      h1Item,
      .6,
      {
        opacity:1,
        y:50,
        ease:Power3.easeout,
        delay:.1,
        
      }
    )
    TweenMax.to(
      pItem,
      .8,
      {
        opacity:1,
        y:10,
        ease:Power3.easeout,
        delay:.9,
        
      }
    )
  },[]);
  
  return (
    <div className="hero-container">
      <video src="videos/home.mp4" autoPlay loop muted></video>
      <h1 ref={el => {h1Item = el}}>Quirquinchos de Corazón</h1>
      <p ref= {el=>{pItem =el}}>Cultura Orureña!!!</p>
      <div className="hero-btns">
        
      </div>
     
    </div>
    
  );
}

export default HeroSection;
/*
<Button
          className="btns"
          buttonStyle="btn-outline"
          buttonSize="btn-large"
        >
          Get Started
        </Button>
        <Button
          className="btns"
          buttonStyle="btn-primary"
          buttonSize="btn-large"
        >
         Wath Trailer <i className="far-fa-circle"/>
        </Button>
*/