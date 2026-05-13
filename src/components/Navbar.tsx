import { useMemo, useState } from "react";
import { Anchor, Button, Drawer, Grid, Space } from "antd";
import { GithubOutlined, MenuOutlined } from "@ant-design/icons";
import { projectSections, profileLinks } from "../data/projects";

const { useBreakpoint } = Grid;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const screens = useBreakpoint();
  const isDesktop = Boolean(screens.lg);

  const navItems = useMemo(
    () => [
      { key: "habilidades", href: "#habilidades", title: "Stack" },
      ...projectSections.map((section) => ({ key: section.id, href: `#${section.id}`, title: section.label })),
      { key: "contacto", href: "#contacto", title: "Contacto" },
    ],
    []
  );

  const drawerItems = useMemo(
    () => [
      { key: "inicio", href: "#inicio", title: "Inicio" },
      ...navItems,
    ],
    [navItems]
  );

  return (
    <header className="navbar-modern">
      <a className="brand" href="#inicio" aria-label="Ir al inicio">
        <span>DA</span>
        <strong>Darren Araúz</strong>
      </a>

      {isDesktop && <Anchor direction="horizontal" className="desktop-anchor" items={navItems} />}

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
        <Anchor
          className="mobile-anchor"
          direction="vertical"
          items={drawerItems}
          onClick={() => setOpen(false)}
        />
        <div className="drawer-actions">
          <Button block type="primary" href="#contacto" onClick={() => setOpen(false)}>
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
