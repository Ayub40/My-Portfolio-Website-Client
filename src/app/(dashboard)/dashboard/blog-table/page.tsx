import BlogManagementTable from "@/components/modules/Blogs/BlogManagementTable";

export default function DashboardPage() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Blog Management</h1>
            <BlogManagementTable />
        </div>
    );
}
