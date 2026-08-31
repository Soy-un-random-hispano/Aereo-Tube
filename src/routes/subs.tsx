import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";

export const Route = createFileRoute("/subs")({ component: SubsPage });

function SubsPage() {
  return (
    <AppShell>
      <div className="empty glass">
        <h2>Tus suscripciones viven en YouTube</h2>
        <p>
          Esta es una vista previa del tema. Instala AeroTube y abre YouTube:
          la barra, las cards y el reproductor se vuelven cristal líquido sobre
          tu feed real.
        </p>
        <p className="mt-5">
          <Link
            to="/install"
            className="gloss-btn inline-flex h-11 items-center rounded-full px-5"
          >
            Instalar extensión
          </Link>
        </p>
      </div>
    </AppShell>
  );
}
