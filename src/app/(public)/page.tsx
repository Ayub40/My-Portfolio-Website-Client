// /* eslint-disable @typescript-eslint/no-explicit-any */
// import BlogCard from "@/components/modules/Blogs/BlogCard";
// import Hero from "@/components/modules/Home/Hero";
// import Skill from "./aboutHome/page";
// import ProjectCard from "@/components/modules/Projects/ProjectCard";
// import Link from "next/link";

// export default async function HomePage() {
//   // Blogs
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
//     next: { tags: ["BLOGS"] },
//   });
//   const { data: blogs } = await res.json();

//   // Projects
//   const projectRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
//     next: { revalidate: 30 },
//   });
//   const { data: projects } = await projectRes.json();

//   return (
//     <div className="mb-10">
//       {/* Hero */}
//       <Hero />

//       {/* Skills */}
//       <section className="my-20">
//         <Skill />
//       </section>

//       {/* Projects Section */}
//       <section className="my-20 px-4">
//         <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10">
//           🚀 My Projects
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {projects?.slice(0, 6).map((project: any) => (
//             <ProjectCard key={project.id} project={project} />
//           ))}
//         </div>

//         <div className="text-center mt-10">
//           <Link
//             href="/projects"
//             className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
//           >
//             View All Projects →
//           </Link>
//         </div>
//       </section>

//       {/* Blogs Section */}
//       <section className="my-20 px-4 bg-gray-50 py-16">
//         <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10">
//           ✍️ Featured Posts
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {blogs?.slice(0, 3).map((blog: any) => (
//             <BlogCard key={blog.id} post={blog} />
//           ))}
//         </div>

//         <div className="text-center mt-10">
//           <Link
//             href="/blogs"
//             className="inline-block px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
//           >
//             Read All Blogs →
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }








/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogCard from "@/components/modules/Blogs/BlogCard";
import Hero from "@/components/modules/Home/Hero";
import Skill from "./aboutHome/page";
import ProjectCard from "@/components/modules/Projects/ProjectCard";

export default async function HomePage() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    next: {
      // revalidate: 30,
      tags: ["BLOGS"],
    }
  });
  const { data: blogs } = await res.json();
  // console.log(blogs);

  // Project data 
  const projectRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
    next: { revalidate: 30 }
  });
  const { data: projects } = await projectRes.json();



  return (
    <div className="mb-7">

      <Hero />
      <Skill />
      {/* Projects Section */}
      <section className="my-20 px-4">
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects?.slice(0, 6).map((project: any) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Blogs Section */}
      <section className="my-20 px-4 bg-gray-50 py-16">
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10">
          Blogs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogs?.slice(0, 3).map((blog: any) => (
            <BlogCard key={blog.id} post={blog} />
          ))}
        </div>
      </section>

    </div>
  );
}
