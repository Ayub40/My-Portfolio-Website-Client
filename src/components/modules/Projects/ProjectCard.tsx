/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }: { project?: any }) {
    if (!project) {
        return <div>No project data found.</div>;
    }


    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full">
            <div className="relative w-full h-48">
                <Image
                    src={project.thumbnail}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                />
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <h1 className="text-xl font-bold mb-2">{project.title}</h1>
                <p className="text-gray-700 text-sm mb-4 flex-grow">{project.description}</p>

                {/* Links */}
                <div className="flex flex-wrap gap-3 mb-4">
                    {project.liveUrl && (
                        <Link href={project.liveUrl} target="_blank" className="text-blue-600 text-sm hover:underline">
                            🌐 Live
                        </Link>
                    )}
                    {project.clientRepo && (
                        <Link href={project.clientRepo} target="_blank" className="text-purple-600 text-sm hover:underline">
                            🖥️ Client
                        </Link>
                    )}
                    {project.serverRepo && (
                        <Link href={project.serverRepo} target="_blank" className="text-orange-600 text-sm hover:underline">
                            🗄️ Server
                        </Link>
                    )}
                </div>

                {/* Technologies */}
                <div className="mb-3">
                    <h2 className="text-sm font-semibold mb-1">Technologies:</h2>
                    <ul className="flex flex-wrap gap-2">
                        {project.technologies?.map((tech: string, i: number) => (
                            <li key={i} className="bg-gray-100 px-2 py-1 rounded text-xs">{tech}</li>
                        ))}
                    </ul>
                </div>

                {/* Features */}
                <div>
                    <h2 className="text-sm font-semibold mb-1">Features:</h2>
                    <ul className="list-disc list-inside text-sm space-y-1">
                        {project.features?.map((feature: string, i: number) => (
                            <li key={i}>{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>








        // <div className="max-w-4xl mx-auto px-4 py-10">
        //     <Image
        //         src={project.thumbnail}
        //         alt={project.title}
        //         width={800}
        //         height={400}
        //         className="rounded-lg object-cover mb-6"
        //     />

        //     <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        //     <p className="text-gray-700 mb-6">{project.description}</p>

        //     {/* Links */}
        //     <div className="flex gap-4 mb-6">
        //         {project.liveUrl && (
        //             <Link href={project.liveUrl} target="_blank" className="text-blue-600 hover:underline">
        //                 Live Website
        //             </Link>
        //         )}
        //         {project.clientRepo && (
        //             <Link href={project.clientRepo} target="_blank" className="text-purple-600 hover:underline">
        //                 Client Repo
        //             </Link>
        //         )}
        //         {project.serverRepo && (
        //             <Link href={project.serverRepo} target="_blank" className="text-orange-600 hover:underline">
        //                 Server Repo
        //             </Link>
        //         )}
        //     </div>

        //     {/* Technologies */}
        //     <div className="mb-6">
        //         <h2 className="text-xl font-semibold mb-2">Technologies</h2>
        //         <ul className="flex flex-wrap gap-2">
        //             {project.technologies?.map((tech: string, i: number) => (
        //                 <li key={i} className="bg-gray-200 px-3 py-1 rounded-md text-sm">{tech}</li>
        //             ))}
        //         </ul>
        //     </div>

        //     {/* Features */}
        //     <div>
        //         <h2 className="text-xl font-semibold mb-2">Features</h2>
        //         <ul className="list-disc list-inside space-y-1">
        //             {project.features?.map((feature: string, i: number) => (
        //                 <li key={i}>{feature}</li>
        //             ))}
        //         </ul>
        //     </div>
        // </div>
    );
}