import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { WatchView } from "@/components/watch-view";
import { getVideo } from "@/lib/videos";

export const Route = createFileRoute("/watch/$id")({ component: WatchPage });

function WatchPage() {
  const { id } = Route.useParams();
  const video = getVideo(id);

  if (!video) {
    return (
      <AppShell>
        <div className="empty glass">
          <h2>Este video no está en la vista previa</h2>
          <p>
            Vuelve al inicio y elige otro. En YouTube real, la extensión tema
            cualquier video.
          </p>
          <p className="mt-4">
            <Link to="/" className="gloss-btn inline-flex h-11 items-center rounded-full px-5">
              Ir al inicio
            </Link>
          </p>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <WatchView video={video} />
    </AppShell>
  );
}
