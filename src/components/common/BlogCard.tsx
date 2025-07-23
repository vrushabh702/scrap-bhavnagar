import { BlogPost } from "@/data/blogData"
import Link from "next/link"
import Image from "next/image"

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="group bg-white shadow-lg hover:shadow-2xl transition-all rounded-xl overflow-hidden">
      <Link href={`/scrap-enterprise-blogs/${post.slug}`}>
        <div className="w-full h-56 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            width={600}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition">
            {post.title}
          </h3>
          <p className="text-sm text-gray-600 my-2">{post.summary}</p>
          <div className="text-xs text-gray-500">
            {post.author} | {post.date} • {post.readTime}
          </div>
        </div>
      </Link>
    </div>
  )
}
