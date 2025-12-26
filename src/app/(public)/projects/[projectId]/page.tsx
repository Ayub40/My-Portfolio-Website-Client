/* eslint-disable @typescript-eslint/no-explicit-any */

// import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";
import ProjectDetailsCard from "@/components/modules/Projects/ProjectDetailsCard";
import { getProjectById } from "@/services/ProjectServices";

export const generateStaticParams = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`);
    const { data: projects } = await res.json();

    return projects.slice(0, 2).map((project: any) => ({
        projectId: String(project.id)
    }));
};

// ==========Extra add For ISR===================
export const revalidate = 30;
// =============================

// For Dynamic Metadata 
export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ projectId: string }>;
}) => {
    const { projectId } = await params

    const project = await getProjectById(projectId)

    return {
        title: project?.title,
        description: project?.content,
    };
}

const ProjectDetailsPage = async ({ params }: { params: Promise<{ projectId: string }> }) => {
    const { projectId } = await params;
    const project = await getProjectById(projectId);

    if (!project) {
        return <div className="text-center py-20 text-2xl font-bold">Project not found!</div>;
    }

    return <ProjectDetailsCard project={project} />;
};

export default ProjectDetailsPage;