import Upload from "@/components/uploads/Upload";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/uploads/$uploadId")({
  component: Upload,
});
