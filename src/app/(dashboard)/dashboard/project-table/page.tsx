/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Edit } from "lucide-react";
import DeleteProjectButton from "@/components/modules/Projects/DeleteProjectButton";


const ProjectTablePage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
        cache: 'no-store'
    });
    const { data: projects } = await res.json();

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Manage Projects</h2>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Technologies</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {projects?.map((project: any) => (
                            <TableRow key={project.id}>
                                <TableCell className="font-medium">{project.title}</TableCell>
                                <TableCell>{project.technologies.join(", ")}</TableCell>
                                <TableCell className="text-right flex justify-end gap-2">
                                    <Link href={`/dashboard/edit-project/${project.id}`}>
                                        <Button variant="outline" size="sm">
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                    </Link>
                                    {/* Client Component for Delete Action */}
                                    <DeleteProjectButton projectId={project.id} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default ProjectTablePage;