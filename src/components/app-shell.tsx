import { useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Bell,
  Clapperboard,
  Download,
  Home,
  Menu,
  Search,
  Settings2,
  UserRound,
  X,
} from "lucide-react";
import { AeroLayer } from "@/components/aero-layer";
import { ThemePopup } from "@/components/theme-popup";
import { useAero } from "@/lib/theme-store";

type Props = {
  children: ReactNode;
};

const NAV = [
  { to: "/", label: "Inicio", icon: Home },
  { to: "/shorts", label: "Shorts", icon: Clapperboard },
  { to: "/subs", label: "Suscripciones", icon: Bell },
  { to: "/you", label: "Tú", icon: UserRound },
] as const;

export function AppShell({ children }: Props) {
  const [popup, setPopup] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const promoDismissed = useAero((s) => s.promoDismissed);
  const setPromoDismissed = useAero((s) => s.setPromoDismissed);
  const search = useAero((s) => s.search);
  const setSearch = useAero((s) => s.setSearch);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="yt-root">
      <AeroLayer />

      {!promoDismissed ? (
        <div className="promo-bar">
          <p>
            Vista previa del tema Frutiger Aero. Descarga la extensión para
            usarla en YouTube de verdad.
          </p>
          <div className="flex items-center gap-2">
            <Link to="/install" className="gloss-btn h-10 rounded-full px-4 text-sm">
              <span className="flex items-center gap-2">
                <Download size={16} />
                Descargar
              </span>
            </Link>
            <button
              type="button"
              className="icon-btn"
              aria-label="Cerrar aviso"
              onClick={() => setPromoDismissed(true)}
            >
              <X size={16} />
            </button>
          </div>
        </div>
      ) : null}

      <header className="masthead glass">
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="icon-btn menu-only"
            aria-label="Abrir menú"
            onClick={() => setDrawer(true)}
          >
            <Menu size={18} />
          </button>
          <Link to="/" className="brand">
            <span className="brand-mark gloss-btn">
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                <path fill="currentColor" d="M3 2.2v9.6L12 7 3 2.2z" />
              </svg>
            </span>
            <span className="brand-name">YouTube</span>
            <span className="brand-badge">Aero</span>
          </Link>
        </div>

        <form
          className="search-wrap"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="search-pill glass">
            <input
              type="search"
              placeholder="Buscar"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Buscar videos"
            />
            <span className="search-go" aria-hidden="true">
              <Search size={18} />
            </span>
          </div>
        </form>

        <div className="mast-actions">
          <Link to="/install" className="icon-btn" aria-label="Instalar extensión">
            <Download size={18} />
          </Link>
          <button
            type="button"
            className="icon-btn"
            aria-label="Ajustes del tema"
            onClick={() => setPopup(true)}
          >
            <Settings2 size={18} />
          </button>
          <button
            type="button"
            className="avatar-btn"
            aria-label="Cuenta de demostración"
            onClick={() => setPopup(true)}
          >
            <img src="/aero/icon.png" alt="" />
          </button>
        </div>
      </header>

      <div className={promoDismissed ? "layout" : "layout has-promo"}>
        <nav className="rail" aria-label="Principal">
          {NAV.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={active ? "active" : undefined}
              >
                <Icon size={20} />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <main className="main">{children}</main>
      </div>

      {drawer ? (
        <>
          <button
            type="button"
            className="drawer-back"
            aria-label="Cerrar menú"
            onClick={() => setDrawer(false)}
          />
          <nav className="drawer glass" aria-label="Principal">
            {NAV.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={active ? "active" : undefined}
                  onClick={() => setDrawer(false)}
                >
                  <Icon size={20} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </>
      ) : null}

      {popup ? <ThemePopup onClose={() => setPopup(false)} /> : null}
    </div>
  );
}
