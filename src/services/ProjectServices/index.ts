
export const getProjectById = async (projectId: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${projectId}`);

    const project = await res.json();
    console.log("Project:", project);
    
    return project?.data || project;

    // return await res.json();
}