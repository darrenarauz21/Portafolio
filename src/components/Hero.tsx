import { Button, Space, Typography } from "antd";
import { GithubOutlined, LinkedinOutlined, MailOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { profileLinks, stats } from "../data/projects";

const { Paragraph, Text, Title } = Typography;

export default function Hero() {
  return (
    <section className="hero-modern" id="inicio">
      <div className="hero-grid" aria-hidden="true" />
      <div className="orb orb-one" aria-hidden="true" />
      <div className="orb orb-two" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-badge">Full Stack Developer · Django · React · Vercel</div>
        <Title className="hero-title">
          Darren Araúz
          <span> Construyo sistemas web completos, documentados y desplegables.</span>
        </Title>
        <Paragraph className="hero-description">
          Desarrollo proyectos con React, Django, PostgreSQL y diseño de interfaces modernas. Este portafolio agrupa mis proyectos web, SENSA, plugins, extensiones y prototipos de interfaz.
        </Paragraph>

        <Space wrap className="hero-actions">
          <Button type="primary" size="large" href="#contacto" icon={<MailOutlined />}>
            Contáctame
          </Button>
          <Button size="large" href={profileLinks.whatsapp} target="_blank" icon={<WhatsAppOutlined />}>
            WhatsApp
          </Button>
          <Button size="large" href="#sensa">
            Ver proyectos
          </Button>
        </Space>

        <div className="hero-stats">
          {stats.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <Text>{stat.label}</Text>
            </div>
          ))}
        </div>

        <Space className="hero-social" size={12}>
          <Button shape="circle" href={profileLinks.linkedin} target="_blank" icon={<LinkedinOutlined />} />
          <Button shape="circle" href={profileLinks.github} target="_blank" icon={<GithubOutlined />} />
          <Button shape="circle" href={profileLinks.primaryEmail} icon={<MailOutlined />} />
        </Space>
      </div>
    </section>
  );
}
