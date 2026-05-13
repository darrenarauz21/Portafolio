import { Col, Grid, Row, Typography } from "antd";
import type { ProjectSection as ProjectSectionType } from "../data/projects";
import ProjectCard from "./ProjectCard";

const { useBreakpoint } = Grid;
const { Paragraph, Text, Title } = Typography;

type Props = {
  section: ProjectSectionType;
};

export default function ProjectSection({ section }: Props) {
  const screens = useBreakpoint();
  const single = section.projects.length === 1;
  const colProps = single
    ? { xs: 24, md: 18, lg: 14, xl: 12 }
    : { xs: 24, sm: 24, md: 12, xl: 8 };

  return (
    <section className="portfolio-section" id={section.id}>
      <div className="section-heading">
        <Text className="section-kicker">{section.kicker}</Text>
        <Title level={2}>{section.title}</Title>
        <Paragraph>{section.description}</Paragraph>
      </div>

      <Row gutter={screens.xs ? [16, 18] : [24, 24]} justify={single ? "start" : "center"} align="stretch">
        {section.projects.map((project) => (
          <Col {...colProps} key={project.id} className="project-col">
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>
    </section>
  );
}
