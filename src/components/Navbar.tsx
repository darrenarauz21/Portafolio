import { Anchor, Button } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { projectSections, profileLinks } from "../data/projects";

export default function Navbar() {
  return (
    <header className="navbar-modern">
      <a className="brand" href="#inicio" aria-label="Ir al inicio">
        <span>DA</span>
        <strong>Darren Araúz</strong>
      </a>

      <Anchor
        direction="horizontal"
        className="desktop-anchor"
        items={[
          { key: "habilidades", href: "#habilidades", title: "Stack" },
          ...projectSections.map((section) => ({ key: section.id, href: `#${section.id}`, title: section.label })),
          { key: "contacto", href: "#contacto", title: "Contacto" },
        ]}
      />

      <Button href={profileLinks.github} target="_blank" icon={<GithubOutlined />}>
        GitHub
      </Button>
    </header>
  );
}
