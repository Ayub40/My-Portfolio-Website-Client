/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }: { project?: any }) {
  if (!project) return <div>No project data found.</div>;

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* Image */}
      <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h1 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h1>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>


        <div className="mt-auto">
          <Link
            href={`/projects/${project.id}`}
            className="block text-center w-full bg-[#374151] text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

