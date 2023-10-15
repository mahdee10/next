import Image from "next/image";
import r from "../../public/imgs/rate.png"
export default function Movies(props) {
    return (
        <div className=" sm:pl-9 pl-4 sm:pr-7 pr-4 flex flex-col rounded-xl sm:w-30% w-half content-end sm:mb-0 mb-3">
            <div className="relative">
                <Image className='sm:pt-9 pt-4 ' src={props.path} alt="Search Icon" />
                <div className="flex absolute items-center  sm:top-10 top-5 right-0">
                    <p className="text-amber-400">{props.rate}</p>
                    <Image className=" " src={r} alt="rate"></Image>

                </div>
            </div>
            <h4 className='sm:font-black font-bold text-white sm:text-xl text-base sm:pt-7 pt-3'>{props.title}</h4>
            <p className="sm:text-base text-xs text-white sm:pt-4 pt-3  text-8a8a8a">{props.desc}</p>
            <p className="sm:text-base text-xs text-white sm:pb-2 ">{props.category}</p>
            <p className="sm:text-small text-xs text-white  sm:pb-9 pb-4">{props.duration}</p>
        </div>
    )
}