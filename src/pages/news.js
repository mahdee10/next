import Footer from "@/components/footer";
import NavBar from "@/components/nav";
import MySwiperComponent from "@/components/swipe";
import axios from "@/utils/axios";

export default function News({ data }) {
    console.log(data.data.sections)
    const news = data.data.sections;
    return (
        <div>
            <link
                href="https://fonts.googleapis.com/css2?family=Geroma:wght@300;400;500;600;700&display=swap"
                rel="stylesheet"
            />
            <NavBar></NavBar>
            <section className="sm:px-24 px-5 sm:pt-5 sm:pb-10 pb-5  mx-auto 2xl:container  overflow-hidden">
                <div className="">
                    <MySwiperComponent news={news}></MySwiperComponent>
                </div>
            </section>
            <Footer></Footer>
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
    return { props: { data } };
}