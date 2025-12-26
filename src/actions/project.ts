"use server";

import { getUserSession } from "@/helpers/getUserSession";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const createProject = async (data: FormData) => {
    // console.log(data);

    const session = await getUserSession();
    const projectInfo = Object.fromEntries(data.entries());

    const modifiedData = {
        ...projectInfo,
        technologies: projectInfo.technologies
            .toString()
            .split(",")
            .map((tech) => tech.trim()),
        features: projectInfo.features
            .toString()
            .split(",")
            .map((f) => f.trim()),
        challenges: projectInfo.challenges,
        futurePlans: projectInfo.futurePlans,
        ownerId: session?.user?.id,
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(modifiedData),
    });

    const result = await res.json();

    if (result?.id) {
        revalidateTag("PROJECTS");
        revalidatePath("/projects");
        redirect("/projects");
    }

    return result;
};


// Update Project Action
export const updateProjectAction = async (id: string, formData: FormData) => {
    try {
        const projectInfo = Object.fromEntries(formData.entries());
        const modifiedData = {
            ...projectInfo,
            technologies: projectInfo.technologies?.toString().split(",").map((t) => t.trim()),
            features: projectInfo.features?.toString().split(",").map((f) => f.trim()),
        };

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(modifiedData),
        });

        if (!res.ok) throw new Error("Failed to update");

        revalidatePath("/dashboard/project-table");
        revalidatePath("/projects");

        return { success: true };
    } catch (error) {
        return { success: false, error: "Update failed" };
    }
};

// Delete Project Action
export const deleteProjectAction = async (id: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${id}`, {
        method: "DELETE",
    });

    if (res.ok) {
        revalidateTag("PROJECTS");
        revalidatePath("/projects");
        return { success: true };
    }

    return { success: false };
};
