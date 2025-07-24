"use client";
import { useState } from "react";
import BlogCard from "@/components/common/BlogCard";
import { blogPosts } from "@/data/blogData";
import { FaBlog } from "react-icons/fa";

const POSTS_PER_PAGE = 4;

export default function BlogListingPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

  const paginatedPosts = blogPosts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  interface BlogHeroProps {
    title?: string;
    subtitle?: string;
  }

  const blogData: BlogHeroProps = {
    title: "Scrap Enterprise Blogs",
    subtitle:
      "Explore our latest blogs on scrap enterprise, industry insights, global scrap trading, best practices in recycling, and how technology is transforming the sustainable metal industry worldwide",
  };

  return (
    <section>
      <section className="relative bg-green-900 text-white py-24 md:py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-green-800 to-green-900 opacity-80 z-0" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-3 mb-4">
            <FaBlog className="text-white text-4xl" />
            <h1 className="text-4xl md:text-5xl font-extrabold">
              {blogData.title}
            </h1>
          </div>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            {blogData.subtitle}
          </p>

          {/* Optional CTA */}
          <div className="mt-8">
            <input
              type="text"
              placeholder="Search blogs..."
              className="w-full max-w-md px-4 py-3 rounded-xl text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-8 md:py-16 md:px-24">
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
  );
}
