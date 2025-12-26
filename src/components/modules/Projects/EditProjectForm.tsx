/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { updateProjectAction } from "@/actions/project";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function EditProjectForm({ project }: { project: any }) {
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const loadingToast = toast.loading("Updating project...");

        try {
            const result = await updateProjectAction(project.id, formData);
            
            if (result.success) {
                toast.success("Project updated successfully!", { id: loadingToast });
                router.push("/dashboard/project-table");
                router.refresh(); 
            } else {
                toast.error(result.error || "Update failed", { id: loadingToast });
            }
        } catch (error) {
            toast.error("Something went wrong!", { id: loadingToast });
        }
    };

    const techString = project.technologies?.join(", ");
    const featureString = project.features?.join(", ");

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4 w-full"
        >
            <h2 className="text-xl font-semibold mb-4 text-black">Update Project: {project.title}</h2>


            <div>
                <label className="block text-sm font-medium mb-1 text-black">Title</label>
                <input type="text" name="title" defaultValue={project.title}
                    className="w-full rounded-md border px-3 py-2 text-black" required />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1 text-black">Description</label>
                <textarea name="description" rows={4} defaultValue={project.description}
                    className="w-full rounded-md border px-3 py-2 text-black" required />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1 text-black">Thumbnail URL</label>
                <input type="text" name="thumbnail" defaultValue={project.thumbnail}
                    className="w-full rounded-md border px-3 py-2 text-black" />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium mb-1 text-black">Live URL</label>
                    <input type="text" name="liveUrl" defaultValue={project.liveUrl}
                        className="w-full rounded-md border px-3 py-2 text-black" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1 text-black">Client Repo</label>
                    <input type="text" name="clientRepo" defaultValue={project.clientRepo}
                        className="w-full rounded-md border px-3 py-2 text-black" />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium mb-1 text-black">Technologies (comma separated)</label>
                <input type="text" name="technologies" defaultValue={techString}
                    className="w-full rounded-md border px-3 py-2 text-black" />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1 text-black">Features (comma separated)</label>
                <input type="text" name="features" defaultValue={featureString}
                    className="w-full rounded-md border px-3 py-2 text-black" />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1 text-black">Challenges Faced</label>
                <textarea name="challenges" rows={3} defaultValue={project.challenges}
                    className="w-full rounded-md border px-3 py-2 text-black" />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1 text-black">Future Plans</label>
                <textarea name="futurePlans" rows={3} defaultValue={project.futurePlans}
                    className="w-full rounded-md border px-3 py-2 text-black" />
            </div>

            <button type="submit"
                className="w-full bg-green-600 text-white font-medium py-2 rounded-md hover:bg-green-700 transition">
                Update Project
            </button>
        </form>
    );
}