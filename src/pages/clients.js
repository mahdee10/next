'use client'
import InfoSwiper from "@/components/infoSwipe";
import NavBar from "@/components/nav";
import React, { useState } from "react";
export default function Clients() {
    const [activeInfo, setActive] = useState(0);
    function changeActive(id){
        console.log(id)
        setActive(id)
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
        <div>
            <link
          href="https://fonts.googleapis.com/css2?family=Geroma:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      <NavBar></NavBar>
        
        <section className="sm:px-44 px-5 sm:pt-5  pb-2  pt-10 mx-auto 2xl:container  overflow-hidden">
            <div className="flex">
                <div className="text-white flex flex-col w-2/4">
                    {information.map((info) => (
                        <h2 className={` text-2xl pt-4 cursor-pointer ${info.id ===activeInfo ? "font-black headingActive" : "heading"}`} onClick={()=>{changeActive(info.id)}} key={info.id}>{info.title}</h2>
                    ))}
                </div>
                <div className="w-2/4 pt-10">
                   <InfoSwiper information={information} activeInfo={activeInfo}></InfoSwiper>
                </div>
            </div>
        </section>
        </div>
    )
}