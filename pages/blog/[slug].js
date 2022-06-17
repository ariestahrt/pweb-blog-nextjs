import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import LayoutBlog from '/components/LayoutBlog'

export default function PostPage({
    frontmatter: { title, date, cover_image },
    slug,
    content,
    tags,
}){
    return (
        <LayoutBlog title={title} date={date} tags={tags}>
            <div className="post-body text-justify">
                <div dangerouslySetInnerHTML={{__html: marked(content)}}>
                </div>
            </div>
        </LayoutBlog>
    )
};

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))

    console.log(paths)

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', slug + '.md'),
      'utf-8'
    )
  
    const { data: frontmatter, content } = matter(markdownWithMeta)
    const tags = frontmatter.tags.split(",")

    return {
      props: {
        frontmatter,
        slug,
        content,
        tags,
      },
    }
  }