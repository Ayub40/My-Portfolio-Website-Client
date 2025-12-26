import { NextResponse } from "next/server";
import { projects } from "@/lib/project";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ projectId: string }> }
) {
    const { projectId } = await params;
    const project = projects.find((project) => project.id === parseInt(projectId));
    return NextResponse.json(project);
}