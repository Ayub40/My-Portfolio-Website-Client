import { NextResponse } from "next/server";
import { projects } from "@/lib/project";

export async function GET() {
    return Response.json(projects)
}

export const POST = async (request: Request) => {
    const project = await request.json();
    const newProject = {
        ...project,
        id: projects.length + 1,
    };
    projects.push(newProject);

    return new NextResponse(JSON.stringify(newProject), {
        status: 201,
        headers: {
            "Content-type": "application/json",
        },
    });
};