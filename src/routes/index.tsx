import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { VideoGrid } from "@/components/video-grid";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <AppShell>
      <VideoGrid />
    </AppShell>
  );
}
