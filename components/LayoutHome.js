import Head from "next/head"
import Footer from "./Footer"
import Navbar from "./Navbar"
import miraiPng from '/public/mirai-kuriyama-chibi.png'
import Script from 'next/script'

export default function LayoutHome(props){
    return (
        <div>
            <Head>
                <title>{props.title} | Ariesta</title>
                <link rel="shortcut icon" href="/mirai-kuriyama-chibi.png"></link>
            </Head>

            {/* Navbar */}
            <Navbar>

            </Navbar>

            <div id="body" className="container w-full md:max-w-3xl mx-auto pt-20">
                <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">


                    {/* Post Content */}
                    {props.children}
                </div>
                {/* Tags */}

                {/* <hr className="border-b-2 border-gray-400 mb-8 mx-4" /> */}

                <p className="py-6 text-justify"></p>


            </div>

            {/* Footer */}
            <Footer>
                
            </Footer>
            <Script src="/js/jquery.min.js"></Script>
            <Script src="/js/main.js"></Script>
            <Script src="/js/track_home.js"></Script>
        </div>
    )
};