import Image from "next/image"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Power1 } from "gsap/dist/gsap";
export default function Members(props) {
    const imageRef = useRef(null);
    const lineRef = useRef(null);
    const textRef = useRef(null);
    useEffect(() => {
        const imageElement = imageRef.current;
        const lineElement = lineRef.current;
        const textElement = textRef.current;
        if (imageElement && lineElement) {
            const tl = gsap.timeline();

            tl.to(imageElement, {
                rotation: 360,
                duration: 2,
                ease: Power1.easeInOut, 
            });

            tl.fromTo(
                lineElement,
                { height: 0 },
                { height: "50%", duration: 1, ease: Power1.easeInOut },
                "-=1" 
            );
            tl.from(textElement, { opacity: 0, duration: 1, ease: Power1.easeInOut }, "-=0.5");

        }
    }, []);

    return (
        <div className="sm:pl-9 pl-4 sm:pr-7 pr-4 flex justify-center rounded-xl sm:mb-0 mb-3 min-h-400 ">
            <div className="relative text-white h-60">
                <div className="rounded-[50%] border border-fe424c flex items-center justify-center h-[240px] w-[240px]">
                    <Image ref={imageRef} className=' rounded-[50%] w-52 h-52' src={props.path} alt="Search Icon"></Image>
                </div>
                <div ref={lineRef} className="absolute top-full left-1/2 bg-black h-10 w-1 transform  -translate-x-1/2  bg-fe424c"></div>
                <div ref={textRef} className="absolute top-full left-3/4 transform -translate-x-1/2 text-white pt-5">
                    <p className="text-slate-400">{props.name}</p>
                    <p>{props.role}</p>
                </div>
            </div>
        </div>
    )

}