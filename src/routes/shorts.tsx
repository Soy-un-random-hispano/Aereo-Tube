import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { VIDEOS } from "@/lib/videos";

export const Route = createFileRoute("/shorts")({ component: ShortsPage });

function ShortsPage() {
  const shorts = VIDEOS.filter((v) => v.category !== "Tutorial").slice(0, 6);

  return (
    <AppShell>
      <div className="mx-auto grid max-w-sm gap-5">
        {shorts.map((v) => (
          <Link
            key={v.id}
            to="/watch/$id"
            params={{ id: v.id }}
            className="v-card"
          >
            <div className="thumb-wrap thumb-portrait">
              <img src={v.thumb} alt="" className="object-cover" />
              <div className="thumb-gloss" />
              <span className="duration">{v.duration}</span>
            </div>
            <h3 className="v-title">{v.title}</h3>
            <p className="v-sub">
              {v.channel} · {v.views} de vistas
            </p>
          </Link>
        ))}
      </div>
    </AppShell>
  );
}
