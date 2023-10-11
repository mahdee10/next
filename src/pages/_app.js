import "../assets/scss/global.css";
import "../assets/scss/main.scss";
import fav from "../../public/imgs/fav.png"
import Head from "next/head";

export default function App({ Component, pageProps }) {
  
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Here you can find the latest news"/>
        <meta name="author" content="Mahdi El Dirani"/>
        <link rel="icon" href="/favicon.png" />
        <title>News</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
