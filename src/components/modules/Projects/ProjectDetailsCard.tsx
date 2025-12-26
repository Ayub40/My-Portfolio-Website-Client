/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";

const ProjectDetailsCard = ({ project }: { project: any }) => {
    return (
        <div className="py-16 mt-10 px-4 max-w-7xl mx-auto">
            <Link href="/projects" className="text-blue-500 hover:underline mb-6 inline-block">
                ← Back to All Projects
            </Link>

            {/* Thumbnail */}
            <div className="relative w-full h-[300px] md:h-[500px] mb-8 shadow-lg overflow-hidden rounded-2xl">
                <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority 
                />
            </div>

            <h1 className="text-4xl font-bold mb-4 text-gray-900">{project.title}</h1>

            {/* Links Section */}
            <div className="flex flex-wrap gap-4 mb-10">
                {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition">
                        🌐 Live Preview
                    </a>
                )}
                {project.clientRepo && (
                    <a href={project.clientRepo} target="_blank" className="bg-gray-800 text-white px-6 py-2 rounded-full font-medium hover:bg-gray-900 transition">
                        💻 Client Repo
                    </a>
                )}
                {project.serverRepo && (
                    <a href={project.serverRepo} target="_blank" className="bg-purple-800 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-900 transition">
                        🗄️ Server Repo
                    </a>
                )}
            </div>

            <div className="grid gap-12">
                {/* Description */}
                <section>
                    <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3">Description</h2>
                    <p className="text-gray-700 leading-relaxed text-lg">{project.description}</p>
                </section>

                {/* Features */}
                {project.features && project.features.length > 0 && (
                    <section>
                        <h2 className="text-2xl font-bold mb-4 border-l-4 border-green-600 pl-3">Key Features</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {project.features.map((feature: string, i: number) => (
                                <li key={i} className="flex items-start gap-2 text-gray-700 bg-green-50 p-3 rounded-lg">
                                    <span className="text-green-600 font-bold">✓</span> {feature}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Tech Stack */}
                <section>
                    <h2 className="text-2xl font-bold mb-4 border-l-4 border-purple-600 pl-3">Technology Stack</h2>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies?.map((tech: string, i: number) => (
                            <span key={i} className="bg-purple-50 text-purple-600 px-4 py-1.5 rounded-lg text-sm font-semibold border border-purple-100">
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Challenges and Future Plans */}
                <div className="grid md:grid-cols-2 gap-6">
                    <section className="bg-red-50 p-6 rounded-2xl border border-red-100">
                        <h2 className="text-xl font-bold text-red-800 mb-3 flex items-center gap-2">
                            Challenges Faced
                        </h2>
                        <p className="text-red-700 whitespace-pre-line">{project.challenges || "No challenges specified."}</p>
                    </section>

                    <section className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                        <h2 className="text-xl font-bold text-indigo-800 mb-3 flex items-center gap-2">
                            Future Plans
                        </h2>
                        <p className="text-indigo-700 whitespace-pre-line">{project.futurePlans || "No future plans listed."}</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsCard;