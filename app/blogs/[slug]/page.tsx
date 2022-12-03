import {NextPage} from "next";
import {getBlogBySlug, getBlogs} from "../../../lib/blogs";
import {ParsedUrlQuery} from "querystring";
import { use } from "react";

interface Params extends ParsedUrlQuery {
  slug: string
}

type PropsType = {
  params: Params
}

const getInitialBlog = async (slug: string) => {
  const blog = getBlogBySlug(slug)
  return blog
}

const BlogDetail: NextPage<PropsType> = ({params}) => {
  const blog = use(getInitialBlog(params.slug))
  return (
      <div className={'w-2/3 m-auto'}>
        <article className={"prose lg:prose-xl"}>
          <div dangerouslySetInnerHTML={{__html: blog.content}}/>
        </article>
      </div>

  )
}

export function generateStaticParams() {
  const blogs = getBlogs()
  return blogs.map(blog => ({slug: blog.slug}))
}

export default BlogDetail