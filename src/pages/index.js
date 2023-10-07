import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import NavBar from '@/components/nav'
import Banner from '@/components/banner'
import Collection from '@/components/collection'
import Footer from '@/components/footer'
import axios from "@/utils/axios";


export default function Home({ data }) {
  console.log(data)
  return (
    
    <div>
      <link
          href="https://fonts.googleapis.com/css2?family=Geroma:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      <NavBar></NavBar>
      <Banner></Banner>
      <Collection collections={data}></Collection>
      <Footer></Footer>
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
  return { props: { data } };
}
