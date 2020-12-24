import React, { useEffect, useRef } from "react";
import "../style/GaleryHeader.scss";
import { TweenMax, Power3 } from "gsap";
import { motion } from "framer-motion";

export default function GaleryHeader() {
  let logoItem = useRef(null);
  let china = useRef(null);
  let more = useRef(null);
  let capo =useRef(null);
  let cholita =useRef(null);
  useEffect(() => {
    TweenMax.to(logoItem, {
      opacity: 0.5,
      ease: Power3.ease,
      delay: 0.9,
    });
    TweenMax.to(china, {
     
      opacity: 0.5,
      ease: Power3.ease,
      delay: 1.5,
    });
    TweenMax.to(more, {
     
      opacity: 0.5,
      ease: Power3.ease,
      delay: 2.5,
    });
    TweenMax.to(capo, {
     
      opacity: 0.5,
      ease: Power3.ease,
      delay: 3,
    });
    TweenMax.to(cholita, {
     
      opacity: 0.5,
      ease: Power3.ease,
      delay: 2,
    });
  }, []);
  return (
    <>
      <div className="galery-cont">
        <ul>
          <motion.li whileHover={{
              opacity: 1,
              borderRadius: "100%"
            }}
            ref= {el=>{more =el}} className="item1">
            <div className="bg1"></div>
          </motion.li>
          <motion.li
            whileHover={{
              opacity: 1,
              borderRadius: "100%"
            }}
            ref= {el=>{china =el}}
            className="item2"
          >
            <div className="bg2"></div>
          </motion.li>
          <motion.li
            whileHover={{
              opacity: 1,
              borderRadius: "100%"
            }}
            ref={(el) => {
              logoItem = el;
            }}
            className="item3  "
          >
            <div className="bg3"></div>
          </motion.li>
          <motion.li whileHover={{
              opacity: 1,
              borderRadius: "100%"
            }}
            ref= {el=>{cholita =el}} className="item4">
            <div className="bg4"></div>
          </motion.li>
          <motion.li whileHover={{
              opacity: 1,
              borderRadius: "100%"
            }}
            ref= {el=>{capo =el}} className="item5">
            <div className="bg5"></div>
          </motion.li>
        </ul>
      </div>
    </>
  );
}
