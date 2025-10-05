import { NextRequest, NextResponse } from "next/server";
import { blogs } from "../route";

// GET
export async function GET(
    request: NextRequest,
    context: { params: Promise<{ blogId: string }> }
) {
    const { blogId } = await context.params;
    const blog = blogs.find(blog => blog.id === parseInt(blogId));
    return NextResponse.json(blog || null);
}

// DELETE
export async function DELETE(
    request: NextRequest,
    context: { params: Promise<{ blogId: string }> }
) {
    const { blogId } = await context.params;
    const id = parseInt(blogId);
    const index = blogs.findIndex(blog => blog.id === id);
    if (index > -1) {
        blogs.splice(index, 1);
        return NextResponse.json({ message: "Deleted successfully" });
    }
    return NextResponse.json({ message: "Blog not found" }, { status: 404 });
}

// PATCH
export async function PATCH(
    request: NextRequest,
    context: { params: Promise<{ blogId: string }> }
) {
    const { blogId } = await context.params;
    const id = parseInt(blogId);
    const updatedData = await request.json();
    const blogIndex = blogs.findIndex(blog => blog.id === id);

    if (blogIndex > -1) {
        blogs[blogIndex] = { ...blogs[blogIndex], ...updatedData };
        return NextResponse.json(blogs[blogIndex]);
    }

    return NextResponse.json({ message: "Blog not found" }, { status: 404 });
}


















// import { NextRequest, NextResponse } from "next/server";
// import { blogs } from "../route";

// export async function GET(
//     // request: Request,
//     // { params }: { params: Promise<{ blogId: string }> }
//     request: NextRequest,
//     { params }: { params: { blogId: string } }
// ) {
//     // const { blogId } = await params;
//     const { blogId } = params;
//     const blog = blogs.find((blog) => blog.id === parseInt(blogId));
//     return NextResponse.json(blog);
// }

// // =========================== Extra Code ============================
// // DELETE
// export async function DELETE(
//     // request: Request,
//     request: NextRequest,
//     { params }: { params: { blogId: string } }
// ) {
//     const id = parseInt(params.blogId);
//     const index = blogs.findIndex(blog => blog.id === id);
//     if (index > -1) {
//         blogs.splice(index, 1);
//         return NextResponse.json({ message: "Deleted successfully" });
//     }
//     return NextResponse.json({ message: "Blog not found" }, { status: 404 });
// }

// // PATCH
// export async function PATCH(
//     // request: Request,
//     request: NextRequest,
//     { params }: { params: { blogId: string } }
// ) {
//     const id = parseInt(params.blogId);
//     const updatedData = await request.json();
//     const blogIndex = blogs.findIndex(blog => blog.id === id);

//     if (blogIndex > -1) {
//         blogs[blogIndex] = { ...blogs[blogIndex], ...updatedData };
//         return NextResponse.json(blogs[blogIndex]);
//     }

//     return NextResponse.json({ message: "Blog not found" }, { status: 404 });
// }











// export async function DELETE(
//     request: Request,
//     { params }: { params: { id: string } }
// ) {
//     const id = parseInt(params.id);
//     const index = blogs.findIndex(blog => blog.id === id);
//     if (index > -1) {
//         blogs.splice(index, 1);
//         return NextResponse.json({ message: "Deleted successfully" });
//     }
//     return NextResponse.json({ message: "Blog not found" }, { status: 404 });
// }


// export async function PATCH(
//     request: Request,
//     { params }: { params: { id: string } }
// ) {
//     const id = parseInt(params.id);
//     const updatedData = await request.json();
//     const blogIndex = blogs.findIndex(blog => blog.id === id);

//     if (blogIndex > -1) {
//         blogs[blogIndex] = { ...blogs[blogIndex], ...updatedData };
//         return NextResponse.json(blogs[blogIndex]);
//     }

//     return NextResponse.json({ message: "Blog not found" }, { status: 404 });
// }
