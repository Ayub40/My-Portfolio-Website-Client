"use client";
import { createProject } from "@/actions/project";
import Form from "next/form";

export default function CreateProjectForm() {
    return (
        <Form
            action={createProject}
            className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4 w-full"
        >
            <h2 className="text-xl font-semibold mb-4">Create Project</h2>

            {/* Title */}
            <div>
                <label htmlFor="title" className="block text-sm font-medium mb-1">Title</label>
                <input type="text" id="title" name="title"
                    className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200" />
            </div>

            {/* Description */}
            <div>
                <label htmlFor="description" className="block text-sm font-medium mb-1">Description</label>
                <textarea id="description" name="description" rows={4}
                    className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200" />
            </div>

            {/* Thumbnail */}
            <div>
                <label htmlFor="thumbnail" className="block text-sm font-medium mb-1">Thumbnail URL</label>
                <input type="text" id="thumbnail" name="thumbnail"
                    className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200" />
            </div>

            {/* Live URL */}
            <div>
                <label htmlFor="liveUrl" className="block text-sm font-medium mb-1">Live URL</label>
                <input type="text" id="liveUrl" name="liveUrl"
                    className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200" />
            </div>

            {/* Repos */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="clientRepo" className="block text-sm font-medium mb-1">Client Repo</label>
                    <input type="text" id="clientRepo" name="clientRepo"
                        className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200" />
                </div>
                <div>
                    <label htmlFor="serverRepo" className="block text-sm font-medium mb-1">Server Repo</label>
                    <input type="text" id="serverRepo" name="serverRepo"
                        className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200" />
                </div>
            </div>

            {/* Technologies */}
            <div>
                <label htmlFor="technologies" className="block text-sm font-medium mb-1">Technologies (comma separated)</label>
                <input type="text" id="technologies" name="technologies"
                    placeholder="React, Node.js, Express, MongoDB"
                    className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200" />
            </div>

            {/* Features */}
            <div>
                <label htmlFor="features" className="block text-sm font-medium mb-1">Features (comma separated)</label>
                <input type="text" id="features" name="features"
                    placeholder="Authentication, CRUD, Payment"
                    className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200" />
            </div>

            <button type="submit"
                className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition">
                Submit
            </button>
        </Form>
    );
}
