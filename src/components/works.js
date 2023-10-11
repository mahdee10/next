import Image from "next/image"
export default function Wbanner(props) {

    return (
        <div className="display flex sm:flex-row flex-col text-722d68 items-center pt-10">
            <div className={`sm:w-70% ${props.id}`}>
                <Image className=' sm:h-o' src={props.path} alt="Search Icon"></Image>
            </div>

            <div className={`sm:w-30% z-10 flex flex-col justify-items-center   ${props.td === "order-1"  ? 'sm:pl-20' : ''} ${props.td} ` }>
                <h1 className=" sm:text-4xl text-xl font-black ">{props.title}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    )
}