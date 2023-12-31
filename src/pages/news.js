import Footer from "@/components/footer";
import NavBar from "@/components/nav";
import MySwiperComponent from "@/components/swipe";
import axios from "@/utils/axios";

export default function News({ data ,data2}) {
    console.log(data.data.sections)
    console.log(data2)
    const news = data.data.sections;
    return (
        <div>
            <link
                href="https://fonts.googleapis.com/css2?family=Geroma:wght@300;400;500;600;700&display=swap"
                rel="stylesheet"
            />
            <NavBar></NavBar>
            <section className="sm:px-24 px-5 sm:pt-5  pb-2  pt-10 mx-auto 2xl:container  overflow-hidden">
                <h1 className="text-center sm:text-4xl text-xl font-black text-white">News</h1>
            </section>
            <section className="sm:px-24 px-5 sm:pt-5 sm:pb-10 pb-14  mx-auto 2xl:container  overflow-hidden">

                <div className="">
                    <MySwiperComponent news={news}></MySwiperComponent>
                </div>
            </section>
            <Footer social={data2.data.social_media}></Footer>
        </div>
    )
}


export async function getServerSideProps({ locale }) {
    let data;
    await axios
        .get("/page/news", {
            headers: {
                "Accept-Language": locale,
            },
        })
        .then((res) => {
            data = res.data;
        })
        .catch(console.error);

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
    return { props: { data ,data2} };
}

