import { Col, Row, Tag, Typography } from "antd";
import { skillGroups } from "../data/projects";

const { Paragraph, Text, Title } = Typography;

export default function SkillsSection() {
  return (
    <section className="portfolio-section skills-section" id="habilidades">
      <div className="section-heading">
        <Text className="section-kicker">Stack y enfoque</Text>
        <Title level={2}>Tecnologías que uso para construir productos completos</Title>
        <Paragraph>
          Frontend moderno, backend sólido, documentación de arquitectura, despliegue y mantenimiento. La idea es mostrar proyectos con contexto, no solo capturas aisladas.
        </Paragraph>
      </div>
      <Row gutter={[18, 18]}>
        {skillGroups.map((group) => (
          <Col xs={24} md={12} xl={6} key={group.title}>
            <div className="skill-card">
              <Title level={4}>{group.title}</Title>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <Tag key={item} className="tech-tag-modern">{item}</Tag>
                ))}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
}
