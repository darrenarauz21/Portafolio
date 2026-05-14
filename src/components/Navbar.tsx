import { useMemo, useState, type MouseEvent } from "react";
import { Button, Drawer, Grid, Space } from "antd";
import { GithubOutlined, MenuOutlined } from "@ant-design/icons";
import { projectSections, profileLinks } from "../data/projects";

const { useBreakpoint } = Grid;

type NavItem = {
  key: string;
  href: string;
  title: string;
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const screens = useBreakpoint();
  const isDesktop = Boolean(screens.lg);

  const navItems = useMemo<NavItem[]>(
    () => [
      { key: "habilidades", href: "#habilidades", title: "Stack" },
      ...projectSections.map((section) => ({ key: section.id, href: `#${section.id}`, title: section.label })),
      { key: "contacto", href: "#contacto", title: "Contacto" },
    ],
    []
  );

  const drawerItems = useMemo<NavItem[]>(
    () => [
      { key: "inicio", href: "#inicio", title: "Inicio" },
      ...navItems,
    ],
    [navItems]
  );

  const navigateTo = (href: string) => (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();

    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);

    if (!target) {
      window.location.hash = href;
      setOpen(false);
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", href);
    setOpen(false);
  };

  return (
    <header className="navbar-modern">
      <a className="brand" href="#inicio" aria-label="Ir al inicio" onClick={navigateTo("#inicio")}>
        <span>DA</span>
        <strong>Darren Araúz</strong>
      </a>

      {isDesktop && (
        <nav className="desktop-nav" aria-label="Navegación principal">
          {navItems.map((item) => (
            <button type="button" className="nav-link-button" onClick={navigateTo(item.href)} key={item.key}>
              {item.title}
            </button>
          ))}
        </nav>
      )}

      <Space size={10} className="navbar-actions">
        {isDesktop && (
          <Button href={profileLinks.github} target="_blank" icon={<GithubOutlined />}>
            GitHub
          </Button>
        )}
        {!isDesktop && (
          <Button className="mobile-menu-button" aria-label="Abrir menú" icon={<MenuOutlined />} onClick={() => setOpen(true)} />
        )}
      </Space>

      <Drawer
        title="Darren Araúz"
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
        width={320}
        className="mobile-drawer"
      >
        <nav className="mobile-nav" aria-label="Navegación móvil">
          {drawerItems.map((item) => (
            <button type="button" className="mobile-nav-link" onClick={navigateTo(item.href)} key={item.key}>
              {item.title}
            </button>
          ))}
        </nav>
        <div className="drawer-actions">
          <Button block type="primary" href="#contacto" onClick={navigateTo("#contacto")}>
            Contáctame
          </Button>
          <Button block href={profileLinks.github} target="_blank" icon={<GithubOutlined />}>
            GitHub
          </Button>
        </div>
      </Drawer>
    </header>
  );
}
