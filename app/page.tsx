import {NextPage} from "next";
import { use } from "react";
import {getBlogs} from "../lib/blogs";
import Image from "next/image";

async function getInitialBlogs() {
    const blogs = getBlogs()
    return blogs
}

const Page: NextPage = () => {

    const blogs = use(getInitialBlogs())

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Blogs</h2>

                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {blogs.map((blogs, index) => (
                        <a key={index} href={''} className="group">
                            <div className="relative aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                <Image
                                    fill
                                    src={blogs.coverImage}
                                    alt={''}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{blogs.title}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{blogs.description}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Page