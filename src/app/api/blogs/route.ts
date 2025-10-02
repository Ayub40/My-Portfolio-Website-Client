import { NextResponse } from "next/server";

export const blogs = [
    {
        "id": 1,
        "title": "Node.js Performance Tips",
        "content": "Learn how to optimize Node.js apps for better performance.",
        "thumbnail": "https://picsum.photos/seed/node/400/200",
        "isFeatured": false,
        "tags": [
            "node",
            "backend",
            "performance"
        ],
        "views": 4,
        "authorId": 2,
        "createdAt": "2025-09-14T18:11:13.144Z",
        "updatedAt": "2025-09-23T15:18:28.604Z",
        "author": {
            "id": 2,
            "name": "Faisal Khan",
            "email": "faisal@gmail.com",
            "password": null,
            "role": "USER",
            "phone": "01712345671",
            "picture": null,
            "status": "ACTIVE",
            "isVerified": false,
            "createdAt": "2025-09-14T16:30:52.549Z",
            "updatedAt": "2025-09-14T16:30:52.549Z"
        }
    }
]



export async function GET() {
    return Response.json(blogs)
}

export const POST = async (request: Request) => {
    const blog = await request.json();
    const newBlog = {
        ...blog,
        id: blogs.length + 1,
    };
    blogs.push(newBlog);

    return new NextResponse(JSON.stringify(newBlog), {
        status: 201,
        headers: {
            "Content-type": "application/json",
        },
    });
};