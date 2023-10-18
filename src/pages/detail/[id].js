import { useRouter } from 'next/router'
import Footer from '@/components/footer'
import axios from "@/utils/axios";
import NavBar from '@/components/nav'
export default function Detail({ data, data2 }) {
    const router = useRouter()
    console.log(router.query)
    const selectedItem = data.data.find(item => item.id === parseInt(router.query.id, 10));
    console.log(selectedItem)

    return (

        <div className='text-white'>
            <link
                href="https://fonts.googleapis.com/css2?family=Geroma:wght@300;400;500;600;700&display=swap"
                rel="stylesheet"
            />
            <NavBar></NavBar>
            <section className="sm:px-24 px-5 sm:pt-5 pt-10 sm:pb-10 pb-14  mx-auto 2xl:container  overflow-hidden">
                <div className=' flex justify-center '>
                    <img className='sm:pt-9 pt-4 sm:w-1/2' src={selectedItem.image} alt="Search Icon"></img>
                </div>
                <h2 className='sm:text-center sm:font-black font-bold text-722d68 sm:text-2xl text-base sm:pt-7 pt-3'>{selectedItem.title}</h2>

                <div className='flex sm:flex-row flex-col justify-around sm:pt-20 pt-3 sm:pb-9 pb-4'>
                    <div className=' sm:w-1/2 sm:pt-3'>
                        <p className='sm:text-lg text-base text-white  text-8a8a8a'>
                            {selectedItem.text}
                        </p>
                    </div>

                    <div className=' sm:text-lg text-text-base sm:pt-0 pt-10'>
                        <p className='sm:border-b sm:border-722d68'>CLIENT: {selectedItem.client}</p>
                        <p className='sm:pt-3 sm:border-b sm:border-722d68'>DIRECTOR: {selectedItem.directors}</p>
                        <p className='sm:pt-3 sm:border-b sm:border-722d68'>DP: {selectedItem.cinematographer}</p>
                        <p className='sm:pt-3 sm:border-b sm:border-722d68'>AGENCY: {selectedItem.agency}</p>
                    </div>
                </div>
            </section>

            <Footer social={data2.data.social_media}></Footer>

        </div>
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
    return { props: { data, data2 } };
}
