import EditProjectForm from "@/components/modules/Projects/EditProjectForm";
import { getProjectById } from "@/services/ProjectServices";

const EditProjectPage = async ({ params }: { params: Promise<{ projectId: string }> }) => {
    const { projectId } = await params;
    const project = await getProjectById(projectId);

    if (!project) {
        return <div className="text-center py-20">Project not found!</div>;
    }

    return (
        <div className="w-full flex justify-center items-center py-10">
            <EditProjectForm project={project} />
        </div>
    );
};

export default EditProjectPage;