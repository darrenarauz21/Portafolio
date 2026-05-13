import { Button, Space, Typography } from "antd";
import { GithubOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";
import { profileLinks } from "../data/projects";

const { Text } = Typography;

export default function Footer() {
  return (
    <footer className="footer-modern">
      <div>
        <strong>Darren Araúz</strong>
        <Text>Portafolio Full Stack · React · Django · Sistemas empresariales</Text>
        <Text className="footer-mails">{profileLinks.primaryEmailText} · {profileLinks.secondaryEmailText}</Text>
      </div>
      <Space>
        <Button shape="circle" href={profileLinks.linkedin} target="_blank" icon={<LinkedinOutlined />} />
        <Button shape="circle" href={profileLinks.github} target="_blank" icon={<GithubOutlined />} />
        <Button shape="circle" href={profileLinks.primaryEmail} icon={<MailOutlined />} />
      </Space>
    </footer>
  );
}
