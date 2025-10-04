import { NextResponse } from "next/server";

export const projects = [
    {
        "id": 1,
        "title": "My Portfolio Website",
        "description": "A full-stack portfolio project using Next.js, Express, and Prisma",
        "thumbnail": "https://example.com/thumbnail.png",
        "liveUrl": "https://myportfolio.com",
        "clientRepo": "https://github.com/Ayub40/portfolio-client",
        "serverRepo": "https://github.com/Ayub40/portfolio-server",
        "technologies": [
            "Next.js",
            "Tailwind",
            "Express",
            "Prisma"
        ],
        "features": [
            "Responsive Design",
            "Blog System",
            "Authentication"
        ],
        "ownerId": 1,
        "createdAt": "2025-10-04T15:34:53.231Z",
        "updatedAt": "2025-10-04T15:34:53.231Z",
        "owner": {
            "id": 1,
            "name": "Ayub Khan",
            "email": "admin@gmail.com"
        }
    }
]



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