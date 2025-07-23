import { blogPosts } from "@/data/blogData"
import { notFound } from "next/navigation"

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  console.log("Post:", post)
  // if (!post) return notFound()
  if (!post) return notFound()

  return (
    <article className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="text-sm text-gray-600 mb-4">
        {post.author} • {post.date} • {post.readTime}
      </div>
      <img
        src={post.image}
        alt={post.title}
        className="w-full max-h-[500px] object-cover rounded-xl mb-6"
      />
      <p className="text-lg text-gray-800 leading-relaxed">
        {/* Replace with real blog content */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
        exercitationem...
      </p>
    </article>
  )
}
