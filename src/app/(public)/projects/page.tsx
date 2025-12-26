/* eslint-disable @typescript-eslint/no-explicit-any */
import ProjectCard from "@/components/modules/Projects/ProjectCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "All Blogs | Next Blog",
    description: "Browse all blog posts on web development, Next.js, React, and more. Stay updated with the latest tutorials and articles.",
}

const AllProjectPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
        // cache: 'no-store'
        next: { revalidate: 30 }
    });
    const { data: projects } = await res.json();

    return (
        <div className="py-30 px-4 max-w-7xl mx-auto">
            <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10">
                🚀 All Projects
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project: any) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default AllProjectPage;
