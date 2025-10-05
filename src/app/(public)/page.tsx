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
        {/* Project */}
        <div>
          <h2 className="text-center my-5 text-4xl font-bold mt-9">My Projects</h2>
          <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto my-5">
            {projects?.map((project: any) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>


        <h2 className="text-center my-5 text-4xl mt-9">Featured Posts</h2>
        <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto my-5 ">
          {blogs.slice(0, 3).map((blog: any) => (
            <BlogCard key={blog?.id} post={blog} />
          ))}
        </div>
      </div>
      );
}
