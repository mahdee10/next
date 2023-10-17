import Image from "next/image";
import bg from "../../public/imgs/bg.jpg"

export default function Banner() {
    return (

        <div className="my-1.5 mb-4 relative image-container2 sm:py-20 py-10 flex justify-center">
            <Image className="my-0 mx-2.5 w-800 h-fit rounded-full" src={bg} alt="" />
            <div className="overlay absolute top-2/4 left-1/2 text-white p-5 text-center  transform -translate-y-1/2 -translate-x-1/2">
                <h2 className="sm:text-6xl font-bold text-white">Featured Advertising Campaigns</h2>
            </div>
        </div>

    )

}