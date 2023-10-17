
import Image from "next/image";
import l from "../../public/imgs/linked.png"
import insta from "../../public/imgs/insta.png"
import axios from "@/utils/axios"
export default function Footer(props) {
    // console.log("footer",data)
    // console.log(data)

    // console.log("footer",data)
    console.log(props)
    console.log(props.social.en.Linkedin)
    return (
        <div className="bg-fe424c">
            <div className="sm:px-24 text-white px-5 sm:pt-8 sm:pb-12 mx-auto 2xl:container pb-10 overflow-hidden sm:pt-20 pt-10 ">
                <div className="flex justify-center sm:flex-row ">

                    <div className="flex flex-col">
                        <h3 className="text-2xl text-center">sitemap</h3>
                        <a href="/news" className="pt-5 text-center">
                            news
                        </a>
                        <a className="text-center" href="/work">
                            our work
                        </a>
                        <a className="text-center" href="/clients">
                            our clients
                        </a>
                        <div className='flex  pt-4 rounded-xl sm:text-base text-xxxs  justify-center'>
                            <a target="_blank" href={props.social.en.Instagram}>
                                <Image className='sm:ml-5 sm:mr-3 mr-1 sm:w-fit sm:h-fit w-8 h-8' src={l} alt="Search Icon"></Image>

                            </a>
                            <a target="_blank" href={props.social.en.Linkedin}>
                                <Image className='  sm:mr-3 mr-1 sm:w-fit sm:h-fit w-8 h-8' src={insta} alt="Search Icon"></Image>

                            </a>
                        </div>
                    </div>

                </div>


            </div>
        </div >
    )

}

export async function getServerSideProps({ locale }) {
    let data;
    await axios
        .get("/projects", {
            headers: {
                "Accept-Language": locale,
            },
        })
        .then((res) => {
            data = res.data;
        })
        .catch(console.error);
    return { props: { data } };
}
