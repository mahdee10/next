'use client'

import Image from "next/image";
import bg from "../../public/imgs/bg.jpg"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef ,useEffect} from 'react';
import { useIsomorphicLayoutEffect } from '../helpers/isomerphicEffect';

gsap.registerPlugin(ScrollTrigger);

export default function Banner() {

  const main = useRef();
  useEffect(() => {
    const boxes = document.querySelectorAll('.box');
    const h2 = document.querySelector('.box h2');

    gsap.fromTo(boxes, {
      opacity: 0,
      y: 100,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: main.current,
        start: 'top center', // Adjust this as needed
        end: 'bottom center', // Adjust this as needed
        scrub: true,
      },
    });

    gsap.fromTo(h2, {
      fontSize: '2rem', // Start with a smaller font size
    }, {
      fontSize: '6rem', // End with a larger font size
      duration: 1,
      scrollTrigger: {
        trigger: main.current,
        start: 'top center', // Adjust this as needed
        end: 'bottom center', // Adjust this as needed
        scrub: true,
      },
    });
  }, []);

      return (

        <div className="my-1.5 mb-4 relative image-container2 sm:py-20 py-10 flex justify-center"  ref={main}>
            <Image className="my-0 mx-2.5 w-800 h-fit rounded-full box" src={bg} alt=""   />
            <div    className="overlay absolute top-2/4 left-1/2 text-white p-5 text-center  transform -translate-y-1/2 -translate-x-1/2">
                <h2   className="sm:text-6xl font-bold text-white">Featured Advertising Campaigns</h2>
            </div>
        </div>

    )

}