/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function BlogManagementTable() {
    const [blogs, setBlogs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchBlogs = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`);
            const data = await res.json();
            setBlogs(data.data || []);
        } catch (err) {
            console.error(err);
            toast.error("Failed to fetch blogs");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const handleDelete = async (id: number) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                setBlogs((prev) => prev.filter((b) => b.id !== id));
                toast.success("Blog deleted successfully!");
            } else {
                toast.error("Failed to delete blog");
            }
        } catch (err) {
            console.error(err);
            toast.error("An error occurred while deleting");
        }
    };

    const askDelete = (id: number, title: string) => {
        toast.custom((t: any) => (
            <div className="bg-white p-4 shadow-md rounded-md flex flex-col gap-4 w-[300px]">
                <p className="text-sm">Are you sure you want to delete <strong>{title}</strong>?</p>
                <div className="flex justify-end gap-2">
                    <Button
                        size="sm"
                        variant="outline"
                        onClick={() => toast.dismiss(t.id)}
                    >
                        Cancel
                    </Button>
                    <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => {
                            handleDelete(id);
                            toast.dismiss(t.id);
                        }}
                    >
                        Delete
                    </Button>
                </div>
            </div>
        ), { duration: Infinity });
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div className="overflow-x-auto p-4">
            <Table className="border border-gray-300">
                <TableHeader>
                    <TableRow>
                        <TableHead className="border px-4 py-2">ID</TableHead>
                        <TableHead className="border px-4 py-2">Title</TableHead>
                        <TableHead className="border px-4 py-2">Views</TableHead>
                        <TableHead className="border px-4 py-2">Read</TableHead>
                        <TableHead className="border px-4 py-2">Update</TableHead>
                        <TableHead className="border px-4 py-2">Delete</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {blogs.map((blog) => (
                        <TableRow key={blog.id}>
                            <TableCell className="border px-4 py-2">{blog.id}</TableCell>
                            <TableCell className="border px-4 py-2">{blog.title}</TableCell>
                            <TableCell className="border px-4 py-2">{blog.views}</TableCell>
                            <TableCell className="border px-4 py-2">
                                <Link href={`/blogs/${blog.id}`} className="text-blue-600 hover:underline">
                                    View
                                </Link>
                            </TableCell>
                            <TableCell className="border px-4 py-2">
                                <Link
                                    href={`/dashboard/update-blog/${blog.id}`}
                                    className="text-green-600 hover:underline"
                                >
                                    Update
                                </Link>
                            </TableCell>
                            <TableCell className="border px-4 py-2">
                                <Button
                                    size="sm"
                                    variant="ghost"
                                    className="text-red-600 hover:underline"
                                    onClick={() => askDelete(blog.id, blog.title)}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>


        // <div className="overflow-x-auto p-4">
        //     <Table>
        //         <TableHeader>
        //             <TableRow>
        //                 <TableHead>ID</TableHead>
        //                 <TableHead>Title</TableHead>
        //                 <TableHead>Views</TableHead>
        //                 <TableHead>Read</TableHead>
        //                 <TableHead>Update</TableHead>
        //                 <TableHead>Delete</TableHead>
        //             </TableRow>
        //         </TableHeader>
        //         <TableBody>
        //             {blogs.map((blog) => (
        //                 <TableRow key={blog.id}>
        //                     <TableCell>{blog.id}</TableCell>
        //                     <TableCell>{blog.title}</TableCell>
        //                     <TableCell>{blog.views}</TableCell>
        //                     <TableCell>
        //                         <Link href={`/blogs/${blog.id}`} className="text-blue-600 hover:underline">
        //                             View
        //                         </Link>
        //                     </TableCell>
        //                     <TableCell>
        //                         <Link
        //                             href={`/dashboard/update-blog/${blog.id}`}
        //                             className="text-green-600 hover:underline"
        //                         >
        //                             Update
        //                         </Link>
        //                     </TableCell>
        //                     <TableCell>
        //                         <Button
        //                             size="sm"
        //                             variant="ghost"
        //                             className="text-red-600 hover:underline"
        //                             onClick={() => askDelete(blog.id, blog.title)}
        //                         >
        //                             Delete
        //                         </Button>
        //                     </TableCell>
        //                 </TableRow>
        //             ))}
        //         </TableBody>
        //     </Table>
        // </div>





        // <div className="overflow-x-auto p-4">
        //   <table className="min-w-full border border-gray-300">
        //     <thead className="bg-gray-100">
        //       <tr>
        //         <th className="px-4 py-2 border">ID</th>
        //         <th className="px-4 py-2 border">Title</th>
        //         <th className="px-4 py-2 border">Views</th>
        //         <th className="px-4 py-2 border">Read</th>
        //         <th className="px-4 py-2 border">Update</th>
        //         <th className="px-4 py-2 border">Delete</th>
        //       </tr>
        //     </thead>
        //     <tbody>
        //       {blogs.map((blog) => (
        //         <tr key={blog.id} className="text-center border">
        //           <td className="px-4 py-2 border">{blog.id}</td>
        //           <td className="px-4 py-2 border">{blog.title}</td>
        //           <td className="px-4 py-2 border">{blog.views}</td>
        //           <td className="px-4 py-2 border">
        //             <Link
        //               href={`/blogs/${blog.id}`}
        //               className="text-blue-600 hover:underline"
        //             >
        //               View
        //             </Link>
        //           </td>
        //           <td className="px-4 py-2 border">
        //             <Link
        //               href={`/dashboard/update-blog/${blog.id}`}
        //               className="text-green-600 hover:underline"
        //             >
        //               Update
        //             </Link>
        //           </td>
        //           <td className="px-4 py-2 border">
        //             <Button
        //               variant="ghost"
        //               size="sm"
        //               onClick={() => askDelete(blog.id, blog.title)}
        //               className="text-red-600 hover:underline"
        //             >
        //               Delete
        //             </Button>
        //           </td>
        //         </tr>
        //       ))}
        //     </tbody>
        //   </table>
        // </div>

    );
}
