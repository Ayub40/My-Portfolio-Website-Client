"use server";

import { getUserSession } from "@/helpers/getUserSession";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const createProject = async (data: FormData) => {
    console.log(data);

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
