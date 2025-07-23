import { JSX } from "react"

export default function AboutMetalScrap(): JSX.Element {
  return (
    <section className="w-full bg-green-900 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-50 mb-2">
          about Metal Scrap Trading
        </h2>
        <p className="text-slate-200 mb-10">
          We offer a wide range of services in the metal scrap trading industry,
          ensuring sustainable practices and global reach.
        </p>
        {/* Add your service details here */}
      </div>
    </section>
  )
}
