import { Button, Col, Row, Space, Typography } from "antd";
import { GithubOutlined, LinkedinOutlined, MailOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { profileLinks } from "../data/projects";

const { Paragraph, Text, Title } = Typography;

export default function ContactSection() {
  return (
    <section className="portfolio-section contact-section" id="contacto">
      <div className="contact-card">
        <Row gutter={[28, 28]} align="middle">
          <Col xs={24} lg={14}>
            <Text className="section-kicker">Contacto</Text>
            <Title level={2}>¿Trabajamos en una web, sistema o arquitectura?</Title>
            <Paragraph>
              Puedes escribirme por correo o WhatsApp. Para temas de PlugnPlay o proyectos comerciales, usa el correo de PlugnPlay. Para contacto personal o profesional directo, usa mi correo personal.
            </Paragraph>
          </Col>
          <Col xs={24} lg={10}>
            <Space direction="vertical" size={12} className="contact-actions">
              <Button block size="large" type="primary" href={profileLinks.primaryEmail} icon={<MailOutlined />}>
                {profileLinks.primaryEmailText}
              </Button>
              <Button block size="large" href={profileLinks.secondaryEmail} icon={<MailOutlined />}>
                {profileLinks.secondaryEmailText}
              </Button>
              <Button block size="large" href={profileLinks.whatsapp} target="_blank" icon={<WhatsAppOutlined />}>
                WhatsApp
              </Button>
              <Space wrap>
                <Button href={profileLinks.linkedin} target="_blank" icon={<LinkedinOutlined />}>LinkedIn</Button>
                <Button href={profileLinks.github} target="_blank" icon={<GithubOutlined />}>GitHub</Button>
              </Space>
            </Space>
          </Col>
        </Row>
      </div>
    </section>
  );
}
