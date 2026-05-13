import { useState } from "react";
import { Button, Card, Image, Space, Tag, Typography } from "antd";
import { EyeOutlined, GithubOutlined, GlobalOutlined } from "@ant-design/icons";
import type { Project } from "../data/projects";
import { getGithubImageUrl } from "../data/projects";

const { Text, Title, Paragraph } = Typography;

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const [imageError, setImageError] = useState(false);
  const imageUrl = getGithubImageUrl(project.imageName);

  return (
    <Card className={`project-card ${project.featured ? "project-card-featured" : ""}`} bordered={false}>
      <div className="project-image-wrap">
        {!imageError ? (
          <Image
            src={imageUrl}
            alt={project.title}
            className="project-image"
            preview={{ mask: <span><EyeOutlined /> Ver imagen</span> }}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="project-image-fallback">
            <span>{project.icon}</span>
            <Text>{project.imageName}</Text>
          </div>
        )}
        <div className="project-status">{project.status}</div>
      </div>

      <div className="project-content">
        <Space align="center" size={8} className="project-eyebrow">
          <span className="project-icon">{project.icon}</span>
          <Text>{project.eyebrow}</Text>
        </Space>

        <Title level={3} className="project-title">
          {project.title}
        </Title>

        <Paragraph className="project-description">{project.description}</Paragraph>

        <div className="project-tags">
          {project.techStack.map((tech) => (
            <Tag key={tech} className="tech-tag-modern">
              {tech}
            </Tag>
          ))}
        </div>

        <Space wrap className="project-actions">
          {project.liveUrl && (
            <Button type="primary" href={project.liveUrl} target="_blank" rel="noreferrer" icon={<GlobalOutlined />}>
              Ver proyecto
            </Button>
          )}
          {project.githubUrl && (
            <Button href={project.githubUrl} target="_blank" rel="noreferrer" icon={<GithubOutlined />}>
              GitHub
            </Button>
          )}
        </Space>
      </div>
    </Card>
  );
}
