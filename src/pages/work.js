import axios from "@/utils/axios";
import Footer from "@/components/footer";
import NavBar from "@/components/nav";
import Wbanner from "@/components/works";
import i1 from "../../public/imgs/i1.jpeg"
import i2 from "../../public/imgs/i2.jpg"
import i3 from "../../public/imgs/i3.jpg"

export default function Work({ data2 }) {
    const works=[
        {
            title:"WE INSTITUTIONALIZE, PROTECT, AND FROW YOUR WEALTH",
            text:"FOR THE GENERATIONS TO COME",
            path:i1,
            td:"order-1",
            id:"order-2"
        },
        {
            title:"WE INSTITUTIONALIZE, PROTECT, AND FROW YOUR WEALTH",
            text:"FOR THE GENERATIONS TO COME",
            path:i2,
            td:"order-2",
            id:"order-1"
        },
        {
            title:"WE INSTITUTIONALIZE, PROTECT, AND FROW YOUR WEALTH",
            text:"FOR THE GENERATIONS TO COME",
            path:i3,
            td:"order-1",
            id:"order-2"
        },
     

    ]
    return (
        <div>
            <link
                href="https://fonts.googleapis.com/css2?family=Geroma:wght@300;400;500;600;700&display=swap"
                rel="stylesheet"
            />
            <NavBar></NavBar>
            <section className="sm:px-24 px-5 sm:pt-5  pb-2  pt-10 mx-auto 2xl:container  overflow-hidden">
                <h1 className="text-center sm:text-4xl text-xl font-black text-white">Our Offers</h1>
            </section>
            <section className="sm:px-24 px-5 sm:pt-5 sm:pb-10 pb-14  mx-auto 2xl:container  overflow-hidden">
                <div className="flex  flex-col pt-10">
                    {works.map((work) => (
                        <Wbanner key={work.title} title={work.title} text={work.text} path={work.path} td={work.td} id={work.id}/>
                    ))}
                </div>

            </section>
            <Footer social={data2.data.social_media}></Footer>
        </div>
    )
}
export async function getServerSideProps({ locale }) {


    let data2;
    await axios
        .get("/settings", {
            headers: {
                "Accept-Language": locale,
            },
        })
        .then((res) => {
            data2 = res.data;
        })
        .catch(console.error);
    return { props: { data2 } };
}

