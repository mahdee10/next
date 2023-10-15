'use client'
import axios from "@/utils/axios";
import Image from "next/image";
import InfoSwiper from "@/components/infoSwipe";
import NavBar from "@/components/nav";
import React, { useState, useEffect } from "react";
import r from "../../public/imgs/r.png"
import l from "../../public/imgs/l.png"
import m1 from "../../public/imgs/m1.jpg"
import m2 from "../../public/imgs/m2.jpg"
import m3 from "../../public/imgs/m3.jpg"
import m4 from "../../public/imgs/m4.jpg"
import m5 from "../../public/imgs/m5.jpg"
import m6 from "../../public/imgs/m6.jpg"
import m7 from "../../public/imgs/m7.jpg"
import m8 from "../../public/imgs/m8.jpg"
import m9 from "../../public/imgs/m9.jpg"
import m10 from "../../public/imgs/m10.jpg"
import m11 from "../../public/imgs/m11.jpg"
import m12 from "../../public/imgs/m12.jpg"
import sort from "../../public/imgs/sort.png"
import Footer from "@/components/footer";
import Movies from "@/components/movies";
export default function Clients({ data2 }) {
    const [activeInfo, setActive] = useState(0);
    const [sortedTextVisible, setSortedTextVisible] = useState(false);
    const [originalMovies, setOriginalMovies] = useState([
        {
            image: m1,
            title: "This Much I Know to Be True",
            category: "Horror",
            duration: "running time: 1h 45m",
            rate: 8
        },
        {
            image: m2,
            title: "Paris, 13th District",
            category: "Drama",
            duration: "running time: 1h 45m",
            rate: 9

        },
        {
            image: m3,
            title: "Memory",
            category: "Action",
            duration: "running time: 1h 54m",
            rate: 8.2
        },
        {
            image: m4,
            title: "Top Gun: Maverick",
            category: "Action",
            duration: "running time: 2h 11m",
            rate: 9.2
        },
        {
            image: m5,
            title: "The Bad Guys",
            category: "Comedy",
            duration: "running time: 1h 40m",
            rate: 7.3
        },
        {
            image: m6,
            title: "Operation Mincemeat",
            category: "Drama",
            duration: "running time: 2h 8m",
            rate: 9.2
        },
        {
            image: m9,
            title: "The Black Phone",
            category: "Horror",
            duration: "running time: 1h 42m",
            rate: 8.8
        },
        {
            image: m7,
            title: "Downtown Abbey",
            category: "Drama",
            duration: "running time: 1h 50m",
            rate: 7.5

        },
        {
            image: m8,
            title: "Men",
            category: "Horror",
            duration: "running time: 1h 57m",
            rate: 9.5
        },

        {
            image: m10,
            title: "Little Allan: The Human Antenna",
            category: "Family",
            duration: "running time: 1h 15m",
            rate: 8.1
        },
        {
            image: m11,
            title: "Where the Crawdads Singe",
            category: "Drama",
            duration: "running time: 1h 50m",
            rate: 9
        },

        {
            image: m12,
            title: "The Snow Queen",
            category: "Family",
            duration: "running time: 1h 20m",
            rate: 7.5
        },

    ]);

    const [movies, setMovies] = useState(originalMovies);

    function changeActive(id) {
        console.log(id)
        setActive(id)
    }



    const filterMovies = (category) => {
        if (category === '') {
            setMovies(originalMovies);
        } else {
            const formattedCategory =
                category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
            const filteredMovies = originalMovies.filter(
                (movie) => movie.category === formattedCategory
            );
            setMovies(filteredMovies);
        }
    };

    const sortMovies = () => {
        const sortedMovies = [...movies];
        sortedMovies.sort((a, b) => b.rate - a.rate);
        setMovies(sortedMovies);
        setSortedTextVisible(true);

        setTimeout(() => {
            setSortedTextVisible(false);
        }, 1000);
    };

    function right() {
        if (activeInfo < 3) {
            setActive(activeInfo + 1)
            console.log(activeInfo)
        }

    }
    function left() {
        if (activeInfo > 0) {
            setActive(activeInfo - 1)
        }

    }
    const information = [
        {
            title: "Consolidated Reporting",
            text1: "1 Through this service, we aim to provide a family with a complete picture of their wealth across relevant asset classes, and a streamlined set of consolidated reports on an ongoing basis. ",
            text2: "We also provide a value assessment, a comprehensive analysis of costs, charges and other key factors, and agreed portfolio analytics.",
            id: 0,
        },
        {
            title: "Estated Planning & Structuring",
            text1: "2 Through this service, we aim to provide a family with a complete picture of their wealth across relevant asset classes, and a streamlined set of consolidated reports on an ongoing basis. ",
            text2: "We also provide a value assessment, a comprehensive analysis of costs, charges and other key factors, and agreed portfolio analytics.",
            id: 1,
        },
        {
            title: "Real Estate Solutions",
            text1: "3 Through this service, we aim to provide a family with a complete picture of their wealth across relevant asset classes, and a streamlined set of consolidated reports on an ongoing basis. ",
            text2: "We also provide a value assessment, a comprehensive analysis of costs, charges and other key factors, and agreed portfolio analytics.",
            id: 2,
        },
        {
            title: "Private Office",
            text1: "4 Through this service, we aim to provide a family with a complete picture of their wealth across relevant asset classes, and a streamlined set of consolidated reports on an ongoing basis. ",
            text2: "We also provide a value assessment, a comprehensive analysis of costs, charges and other key factors, and agreed portfolio analytics.",
            id: 3,
        },
    ]
    return (
        <div className="">
            <link
                href="https://fonts.googleapis.com/css2?family=Geroma:wght@300;400;500;600;700&display=swap"
                rel="stylesheet"
            />
            <NavBar></NavBar>

            <section className="sm:px-44 px-5 sm:pt-14 sm:pb-20  pb-2  pt-10 mx-auto 2xl:container  overflow-hidden">
                <h1 className="text-white font-cold sm:text-4xl text-2xl text-center pb-4">Services</h1>
                <div className="flex sm:flex-row flex-col">
                    <div className="text-white flex flex-col  sm:w-2/4 justify-between sm:pl-0 pl-5">
                        {information.map((info) => (
                            <h2 className={` sm:text-2xl  pt-4 cursor-pointer ${info.id === activeInfo ? "font-black headingActive sm:text-white text-722d68" : "heading"}`} onClick={() => { changeActive(info.id) }} key={info.id}>{info.title}</h2>
                        ))}
                    </div>
                    <div className="sm:w-2/4 pt-10">
                        <InfoSwiper information={information} activeInfo={activeInfo}></InfoSwiper>
                    </div>
                </div>
                <div className='flex   rounded-xl sm:text-base text-xxxs  justify-center sm:w-2/4 pt-3 pb-5'>
                    <Image onClick={() => { left() }} className='cursor-pointer sm:mr-3 mr-1 sm:w-fit sm:h-fit w-8 h-8' src={l} alt="Search Icon"></Image>
                    <Image onClick={() => { right() }} className='cursor-pointer sm:mr-3 mr-1 sm:w-fit sm:h-fit w-8 h-8' src={r} alt="Search Icon"></Image>
                </div>



            </section>

            <h1 className="text-white font-cold sm:text-4xl text-2xl text-center sm:pb-10">Movies</h1>

            <section className="sm:px-24 mx-auto 2xl:container">
                <div className="sm:ml-20 flex items-center sm:pt-0 pt-4 flex-wrap sm:justify-start justify-center" >

                    <div className="sm:pl-0  pl-4">
                        <label className="sm:pl-0 pl-4 text-white mr-2" for="mySelect">Select an option:</label>
                        <select id="mySelect" name="mySelect" onChange={(e) => filterMovies(e.target.value)}>
                            <option value="" disabled selected>Select a category</option>
                            <option value="Drama">Drama</option>
                            <option value="Horror">Horror</option>
                            <option value="Action">Action</option>
                            <option value="Family">Family</option>
                        </select>
                    </div>
                    <Image onClick={() => { sortMovies() }} className='cursor-pointer sm:ml-6 ml-3  sm:w-8 sm:h-8 w-6 h-6' src={sort} alt="Search Icon"></Image>
                    {sortedTextVisible && (
                        <div className="text-white ml-2 ">Sorted by rate</div>
                    )}
                </div>

                <div className="image-container flex  justify-center flex-row  flex-wrap  pt-10">
                    {movies.map((movie) => (
                        <Movies movie={movie.title} rate={movie.rate} title={movie.title} duration={movie.duration} path={movie.image} category={movie.category} />
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