import 'tailwindcss/tailwind.css'
import LayoutHome from '/components/LayoutHome'
import Image from 'next/image'
import miraiPng from '/public/mirai-kuriyama-chibi.png'
import Link from 'next/link'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function Index({posts}){
    // console.log(posts)
    return (
        <LayoutHome title="Home">
            <div className="font-sans">
                <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">Halo 👋, Saya Ariesta Putra</h1>
            </div>

            <p className="py-6 text-justify">
                Situs ini berisi tulisan, opini dan juga merupakan dokumentasi saya pribadi dalam mengerjakan tugas kuliah Pemrograman Web (IF184504).
                Untuk mendapatkan informasi yang sifatnya curahan hati silakan ikuti saya di Twitter <a className="text-blue-600 no-underline hover:underline" href="https://www.twitter.com/AriestaHrt">@AriestaHrt</a>. Jika ingin menghubungi saya, silakan menuju ke halaman contact.
            </p>
            <p className="py-2">
                <Link href="/about">
                    <a className="text-blue-600 no-underline hover:underline py-2" href="#">
                        Selengkapnya tentang saya...
                    </a>
                </Link>
            </p>

            <div className="font-sans">
                <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-2xl md:text-3xl">Tulisan Terakhir</h1>
            </div>
            <div id="post" className="font-sans text-xl flex flex-col">
                {posts.map((post, index) => (
                    <Link key={index} href={`/blog/${post.slug}`}>
                        <div data-slug={`/blog/${post.slug}`} className="list_post flex items-center hover:bg-gray-100 pl-2"> 
                            <div className="text-gray-600 font-semibold hover:text-black py-1" href="#">
                                <Image src={miraiPng} width={32} height={32} alt="Mirai" />
                            </div>
                            <a className="text-gray-600 text-lg hover:text-black py-1 px-3" href="#">
                                {post.frontmatter.title}
                            </a>
                            <div className="flex-grow"></div>
                            <div className="views_count rounded-full bg-green-400 px-2 text-sm md:text-base text-gray-600">? views</div>
                        </div>
                    </Link>
                ))}
            </div>
			<blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12 text-justify">
                Padahal aku sudah imunisasi campak dan rubella. Tapi mengapa aku masih dicampakkan dan gapernah dibela :&#39;(.
                Sekarang sudah disuntik vaksin corona, tetap saja hidupku tidak berwarna. Apa perlu aku mencoba vaksin rabies agar hidupku sukses?
            </blockquote>
        </LayoutHome>
    )
};

export async function getStaticProps(){
    // get files from posts dir
    const files = fs.readdirSync(path.join('posts'))

    // get slug and frontmatter
    const posts = files.map(filename =>{
        const slug = filename.replace('.md', '')

        // get front matter
        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

        const {data:frontmatter} = matter(markdownWithMeta)

        return {
            slug,
            frontmatter
        }
    })

    console.log(posts)

    return {
        props : {
            posts: posts,
        },
    }
}