import Image from "next/image"
export default function Wbanner(props) {

    return (
        <div className={`display sm:relative flex sm:flex-row  flex-col text-722d68 items-center pt-10 ${props.td === "order-1"  ? 'sm:justify-end' : 'justify-start'}` }>
            <div className={` sm:w-70% `}>
                <Image className=' sm:h-o ' src={props.path} alt="Search Icon"></Image>
            </div>

            <div className={`sm:absolute sm:w-30% z-10 flex flex-col justify-items-center   ${props.td === "order-1"  ? 'right-2/3' : 'left-2/3'}  ` }>
                <h1 className=" sm:text-4xl text-xl font-black ">{props.title}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    )
}