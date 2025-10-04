/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Loading from "@/components/ui/Loading";

export default function UpdateBlogPage() {
    const router = useRouter();
    const { blogId } = useParams();
    const [blog, setBlog] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const form = useForm({
        defaultValues: {
            title: "",
            content: "",
            thumbnail: "",
            tags: "",
            isFeatured: "false",
        },
    });

    const { handleSubmit, setValue } = form;

    const fetchBlog = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`);
            const data = await res.json();
            setBlog(data);

            // Set form values dynamically
            setValue("title", data.title);
            setValue("content", data.content);
            setValue("thumbnail", data.thumbnail);
            setValue("tags", data.tags.join(", "));
            setValue("isFeatured", data.isFeatured ? "true" : "false");
        } catch (err) {
            toast.error("Failed to fetch blog");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlog();
    }, []);

    const onSubmit = async (values: any) => {
        if (values.tags && typeof values.tags === "string") {
            values.tags = values.tags.split(",").map((t: string) => t.trim());
        }
        values.isFeatured = values.isFeatured === "true";

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });

            if (res.ok) {
                toast.success("Blog updated successfully!");
                router.push("/dashboard/blog-table");
            } else {
                toast.error("Failed to update blog");
            }
        } catch (err) {
            console.error(err);
            toast.error("An error occurred while updating");
        }
    };

    if (loading) return <Loading />;

    return (
        <Form {...form}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4"
            >
                <h2 className="text-xl font-semibold mb-4">Update Blog</h2>

                {/* Title */}
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Title" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Content */}
                <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Content</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Content" {...field} rows={4} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Thumbnail */}
                <FormField
                    control={form.control}
                    name="thumbnail"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Thumbnail URL</FormLabel>
                            <FormControl>
                                <Input placeholder="Thumbnail URL" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Tags */}
                <FormField
                    control={form.control}
                    name="tags"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tags (comma separated)</FormLabel>
                            <FormControl>
                                <Input placeholder="React, Next.js, Web" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Featured */}
                <FormField
                    control={form.control}
                    name="isFeatured"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Featured</FormLabel>
                            <div className="flex gap-6">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        value="true"
                                        checked={field.value === "true"}
                                        onChange={() => field.onChange("true")}
                                        className="text-blue-600 focus:ring-blue-500"
                                    />
                                    Yes
                                </label>
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        value="false"
                                        checked={field.value === "false"}
                                        onChange={() => field.onChange("false")}
                                        className="text-blue-600 focus:ring-blue-500"
                                    />
                                    No
                                </label>
                            </div>
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Update
                </Button>
            </form>
        </Form>
    );
}
