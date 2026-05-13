import { Col, Row, Typography } from "antd";
import type { ProjectSection as ProjectSectionType } from "../data/projects";
import ProjectCard from "./ProjectCard";

const { Paragraph, Text, Title } = Typography;

type Props = {
  section: ProjectSectionType;
};

export default function ProjectSection({ section }: Props) {
  return (
    <section className="portfolio-section" id={section.id}>
      <div className="section-heading">
        <Text className="section-kicker">{section.kicker}</Text>
        <Title level={2}>{section.title}</Title>
        <Paragraph>{section.description}</Paragraph>
      </div>

      <Row gutter={[24, 24]}>
        {section.projects.map((project) => (
          <Col xs={24} md={section.projects.length === 1 ? 24 : 12} xl={section.projects.length === 1 ? 12 : 8} key={project.id}>
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>
    </section>
  );
}
