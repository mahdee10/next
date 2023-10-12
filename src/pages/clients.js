'use client'
import axios from "@/utils/axios";
import Image from "next/image";
import InfoSwiper from "@/components/infoSwipe";
import NavBar from "@/components/nav";
import React, { useState } from "react";
import r from "../../public/imgs/r.png"
import l from "../../public/imgs/l.png"
import Footer from "@/components/footer";
export default function Clients({ data2 }) {
    const [activeInfo, setActive] = useState(0);
    function changeActive(id){
        console.log(id)
        setActive(id)
    }
    function right(){
        if(activeInfo<3){
            setActive(activeInfo+1)
            console.log(activeInfo)
        }
        
    }
    function left(){
        if(activeInfo>0){
            setActive(activeInfo-1)}
        
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
            <div className="flex sm:flex-row flex-col">
                <div className="text-white flex flex-col  sm:w-2/4 justify-between sm:pl-0 pl-5">
                    {information.map((info) => (
                        <h2 className={` sm:text-2xl  pt-4 cursor-pointer ${info.id ===activeInfo ? "font-black headingActive sm:text-white text-722d68" : "heading"}`} onClick={()=>{changeActive(info.id)}} key={info.id}>{info.title}</h2>
                    ))}
                </div>
                <div className="sm:w-2/4 pt-10">
                   <InfoSwiper information={information} activeInfo={activeInfo}></InfoSwiper>
                </div>
            </div>
            <div  className='flex   rounded-xl sm:text-base text-xxxs  justify-center sm:w-2/4 pt-3 pb-5'>
                            <Image onClick={()=>{left()}} className='cursor-pointer sm:mr-3 mr-1 sm:w-fit sm:h-fit w-8 h-8' src={l} alt="Search Icon"></Image>
                            <Image onClick={()=>{right()}} className='cursor-pointer sm:mr-3 mr-1 sm:w-fit sm:h-fit w-8 h-8' src={r} alt="Search Icon"></Image>
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