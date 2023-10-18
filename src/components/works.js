import Image from "next/image"
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default function Wbanner(props) {
    const divRef = useRef(null);

    useEffect(() => {
      gsap.set(divRef.current, { x: (props.td === "order-1" ? 100 : -100) });
  
      ScrollTrigger.create({
        trigger: divRef.current,
        start: 'top 80%', // Adjust the start point based on your needs
        end: 'top 20%', // Adjust the end point based on your needs
        animation: gsap.to(divRef.current, {
          x: 0,
          duration: 1, // Animation duration
          ease: 'power2.out', // Easing function
        }),
        toggleActions: 'play none none none',
      });
    }, [props.td]);

    return (
        <div className={`display sm:relative flex sm:flex-row  flex-col text-722d68 items-center pb-20 sm:pt-10 ${props.td === "order-1"  ? 'sm:justify-end' : 'justify-start'}` }>
            <div className={` sm:w-70% `}>
                <Image className=' sm:h-o ' src={props.path} alt="Search Icon"></Image>
            </div>

            <div ref={divRef} className={`sm:absolute sm:w-30% z-10 flex flex-col justify-items-center   ${props.td === "order-1"  ? 'right-2/3' : 'left-2/3'}  ` }>
                <h1 className=" sm:text-4xl text-xl font-black ">{props.title}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    )
}