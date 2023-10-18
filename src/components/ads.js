import Image from "next/image";
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRouter } from 'next/router';
gsap.registerPlugin(ScrollTrigger);
export default function Ads(props){
    const adRef = useRef(null);
    const router = useRouter();

    const handleClick = () => {
        router.push(`/details?id=${props.id}`);
      };

  useEffect(() => {
    const animation = gsap.from(adRef.current, {
      y: 100,
      duration: 3, 
      ease: 'power2.out', 
    });

    ScrollTrigger.create({
      trigger: adRef.current,
      animation: animation,
      start: 'top 80%', 
      end: 'bottom 20%', 
      toggleActions: 'play none none none',
    });
  }, []);

    return (
        <div onClick={handleClick} ref={adRef} className=" sm:pl-9 pl-4 sm:pr-7 pr-4 flex flex-col rounded-xl sm:w-half w-full content-end sm:mb-0 mb-3">
            <img className='sm:pt-9 pt-4 '   src={props.path} alt="Search Icon"></img>
            <h4 className='sm:font-black font-bold text-white sm:text-xl text-base sm:pt-7 pt-3'>{props.title}</h4>
            <p className="sm:text-base text-xs text-white sm:pt-4 pt-3 sm:pb-9 pb-4 text-8a8a8a">{props.desc}</p>
        </div>
    )
}