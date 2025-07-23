// // pages/blog/page/[page].tsx
// import { GetStaticPaths, GetStaticProps } from "next"
// import BlogCard from "@/components/common/BlogCard"
// import { blogPosts, BlogPost } from "@/data/blogData"
// import Link from "next/link"

// const POSTS_PER_PAGE = 4

// type Props = {
//   posts: BlogPost[]
//   currentPage: number
//   totalPages: number
// }

// export default function BlogListingPage({
//   posts,
//   currentPage,
//   totalPages,
// }: Props) {
//   return (
//     <section className="container mx-auto px-4 py-10">
//       <section className="w-full bg-slate-700 py-16 px-6">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-4xl font-bold text-slate-50 mb-2">
//             Scrap Enterprise Blogs
//           </h1>
//           <p className="text-slate-200 mb-10">
//             Explore our latest blogs on scrap enterprise, industry insights, and
//             sustainable practices.
//           </p>
//         </div>
//       </section>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
//         {posts.map((post) => (
//           <BlogCard key={post.slug} post={post} />
//         ))}
//       </div>

//       <div className="flex justify-center items-center gap-4 mt-10">
//         {currentPage > 1 && (
//           <Link
//             href={`/blog/page/${currentPage - 1}`}
//             className="px-3 py-1 bg-gray-200 rounded"
//           >
//             ← Prev
//           </Link>
//         )}
//         <span className="font-medium">
//           Page {currentPage} of {totalPages}
//         </span>
//         {currentPage < totalPages && (
//           <Link
//             href={`/blog/page/${currentPage + 1}`}
//             className="px-3 py-1 bg-gray-200 rounded"
//           >
//             Next →
//           </Link>
//         )}
//       </div>
//     </section>
//   )
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE)
//   const paths = Array.from({ length: totalPages }, (_, i) => ({
//     params: { page: (i + 1).toString() },
//   }))

//   return {
//     paths,
//     fallback: false,
//   }
// }

// export const getStaticProps: GetStaticProps = async (context) => {
//   const page = parseInt(context.params?.page as string) || 1
//   const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE)
//   const start = (page - 1) * POSTS_PER_PAGE
//   const end = start + POSTS_PER_PAGE

//   return {
//     props: {
//       posts: blogPosts.slice(start, end),
//       currentPage: page,
//       totalPages,
//     },
//   }
// }
