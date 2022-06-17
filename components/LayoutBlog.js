import Head from "next/head"
import Link from "next/link"
import Footer from "./Footer"
import Navbar from "./Navbar"
import miraiPng from '/public/mirai-kuriyama-chibi.png'
import Script from 'next/script'

export default function LayoutBlog(props){
    return (
        <div>
            <Head>
                <title>{props.title} | Ariesta</title>
                <link rel="shortcut icon" href="/mirai-kuriyama-chibi.png"></link>
            </Head>

            {/* Navbar */}
            <Navbar>

            </Navbar>

            <div className="container w-full md:max-w-3xl mx-auto pt-20">
                <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
                    <div className="font-sans">
                        <Link href="/">
                            <p className="text-base md:text-sm text-green-500 font-bold">&lt; <a href="#" className="text-base md:text-sm text-green-500 font-bold no-underline hover:underline">BACK TO HOME</a></p>
                        </Link>

                        <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">{props.title}</h1>
                        <div className="flex">
                            <p className="text-sm md:text-base font-normal text-gray-600">Published {props.date} |&nbsp;</p>
                            <div id="views" className="rounded-full bg-green-400 px-2 text-sm md:text-base font-normal text-gray-600">? views</div>
                        </div>
                    </div>

                    {/* Post Content */}
                    {props.children}
                    {/* End of Post Content */}
                </div>

                {/* Tags */}
                <div className="text-base md:text-sm text-gray-500 px-4 py-6">
                    <div className="flex-col">
                        Tags :  
                        {props.tags.map((tag, index) => (
                            <a key={index} href="#" className="text-base md:text-sm text-green-500 no-underline hover:underline">{tag} </a>
                        ))}                    
                    </div>
                </div>
                <hr className="border-b-2 border-gray-400 mb-8 mx-4" />
                {/* End of Tags */}

                <div className="font-sans flex justify-between content-center px-4 pb-12">
                    <div className="text-left">
                        <span className="text-xs md:text-sm font-normal text-gray-600">&lt; Previous Post</span><br/>
                        <p><a href="#" className="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline">Unavailable</a></p>
                    </div>
                    <div className="text-right">
                        <span className="text-xs md:text-sm font-normal text-gray-600">Next Post &gt;</span><br/>
                        <p><a href="#" className="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline">Unavailable</a></p>
                    </div>
                </div>

            </div>

            {/* Footer */}
            <Footer>
                
            </Footer>
            <Script src="/js/jquery.min.js"></Script>
            <Script src="/js/main.js"></Script>
            <Script src="/js/track_blog.js"></Script>
        </div>
    )
};