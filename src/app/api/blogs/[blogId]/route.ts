/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { blogs } from "../route";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ blogId: string }> }
) {
    const { blogId } = await params;
    const blog = blogs.find((blog) => blog.id === parseInt(blogId));
    return NextResponse.json(blog);
}

// =========================== Extra Code ============================


export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = parseInt(params.id);
    const index = blogs.findIndex(blog => blog.id === id);
    if (index > -1) {
        blogs.splice(index, 1);
        return NextResponse.json({ message: "Deleted successfully" });
    }
    return NextResponse.json({ message: "Blog not found" }, { status: 404 });
}


export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = parseInt(params.id);
    const updatedData = await request.json();
    const blogIndex = blogs.findIndex(blog => blog.id === id);

    if (blogIndex > -1) {
        blogs[blogIndex] = { ...blogs[blogIndex], ...updatedData };
        return NextResponse.json(blogs[blogIndex]);
    }

    return NextResponse.json({ message: "Blog not found" }, { status: 404 });
}
