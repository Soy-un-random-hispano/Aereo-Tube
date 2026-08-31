import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Download } from "lucide-react";
import { AppShell } from "@/components/app-shell";

export const Route = createFileRoute("/install")({ component: InstallPage });

function InstallPage() {
  return (
    <AppShell>
      <article className="install">
        <Link to="/" className="inline-flex items-center gap-2 font-bold text-ink-soft">
          <ArrowLeft size={16} />
          Volver a la vista previa
        </Link>
        <h1>Instala AeroTube en Chrome</h1>
        <p className="lede">
          Una extensión que convierte YouTube en cristal líquido: wallpaper
          Frutiger Aero, paneles de vidrio, botones gloss y burbujas. Esta
          página es la demo. La extensión es lo que se carga en tu Chrome.
        </p>
        <div className="hero-dl">
          <a href="/aero-tube.zip" download className="gloss-btn">
            <Download size={18} />
            Descargar extensión
          </a>
          <Link to="/" className="secondary glass">
            Seguir mirando la demo
          </Link>
        </div>
        <p className="note">
          Chrome no instala extensiones desde la web por seguridad. Se carga
          descomprimida, en modo desarrollador. Tarda un minuto.
        </p>

        <ol className="steps">
          <li className="step glass">
            <span className="step-num">1</span>
            <div>
              <h2>Descarga el ZIP</h2>
              <p>
                El archivo <code>aero-tube.zip</code> pesa poco. Guárdalo donde
                quieras.
              </p>
            </div>
          </li>
          <li className="step glass">
            <span className="step-num">2</span>
            <div>
              <h2>Descomprímelo</h2>
              <p>
                Debe quedar una carpeta <code>aero-tube</code> con un
                <code> manifest.json</code> dentro. Esa carpeta es la extensión.
              </p>
            </div>
          </li>
          <li className="step glass">
            <span className="step-num">3</span>
            <div>
              <h2>Abre las extensiones de Chrome</h2>
              <p>
                En la barra de direcciones escribe <code>chrome://extensions</code>{" "}
                y activa <strong>Modo de desarrollador</strong> arriba a la
                derecha.
              </p>
            </div>
          </li>
          <li className="step glass">
            <span className="step-num">4</span>
            <div>
              <h2>Cargar descomprimida</h2>
              <p>
                Pulsa <strong>Cargar descomprimida</strong> y elige la carpeta{" "}
                <code>aero-tube</code>. Luego abre youtube.com: el tema se aplica
                solo.
              </p>
            </div>
          </li>
        </ol>

        <div className="desc-card glass">
          <p>
            El icono de AeroTube en la barra abre el panel: wallpaper, burbujas,
            intensidad del cristal y acento aqua / lima / atardecer. Los ajustes
            se guardan en Chrome y siguen en cada pestaña de YouTube.
          </p>
        </div>
      </article>
    </AppShell>
  );
}
