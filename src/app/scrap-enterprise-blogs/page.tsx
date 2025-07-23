"use client"
import { useState } from "react"
import BlogCard from "@/components/common/BlogCard"
import { blogPosts } from "@/data/blogData"

const POSTS_PER_PAGE = 4

export default function BlogListingPage() {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE)

  const paginatedPosts = blogPosts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  )

  return (
    <section className="container mx-auto px-4 py-10">
      {/* <h2 className="text-3xl font-bold mb-6">Latest Blogs</h2> */}
      <section className="w-full bg-slate-700 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-slate-50 mb-2">
            Scrap Enterprise Blogs
          </h1>
          <p className="text-slate-200 mb-10">
            Explore our latest blogs on scrap enterprise, industry insights, and
            sustainable practices.
          </p>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {paginatedPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          ← Prev
        </button>
        <span className="font-medium">
          Page {page} of {totalPages}
        </span>
        <button
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next →
        </button>
      </div>
    </section>
  )
}
