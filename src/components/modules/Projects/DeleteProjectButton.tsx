/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2, Loader2 } from "lucide-react";
import { deleteProjectAction } from "@/actions/project";
import { useTransition } from "react";
import { toast } from "sonner";

export default function DeleteProjectButton({ projectId }: { projectId: string }) {
    const [isPending, startTransition] = useTransition();

    const handleDelete = async () => {
        startTransition(async () => {
            const result = await deleteProjectAction(projectId) as any;

            if (result.success) {
                toast.success("Project deleted successfully!");
            } else {
                toast.error(result.message || "Failed to delete project.");
            }
        });
    };

    return (
        <AlertDialog>
            {/* Trigger Button */}
            <AlertDialogTrigger asChild>
                <Button variant="destructive" size="sm" disabled={isPending}>
                    {isPending ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                        <Trash2 className="h-4 w-4" />
                    )}
                </Button>
            </AlertDialogTrigger>

            {/* Modal Content */}
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your
                        project and remove the data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={handleDelete}

                        className="bg-destructive text-white hover:bg-destructive/90"
                    >
                        {isPending ? "Deleting..." : "Delete Project"}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

