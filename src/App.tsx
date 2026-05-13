import { ConfigProvider, theme } from "antd";
import "antd/dist/reset.css";
import "./styles/global.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import { projectSections } from "./data/projects";

export default function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: "#4f7bff",
          colorInfo: "#00d4aa",
          borderRadius: 16,
          fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        },
        components: {
          Card: {
            colorBgContainer: "rgba(20, 23, 32, 0.88)",
            colorBorderSecondary: "rgba(148, 163, 184, 0.18)",
          },
          Button: {
            borderRadius: 999,
          },
        },
      }}
    >
      <div className="app-shell">
        <Navbar />
        <Hero />
        <main className="main-content">
          {projectSections.map((section) => (
            <ProjectSection section={section} key={section.id} />
          ))}
        </main>
        <Footer />
      </div>
    </ConfigProvider>
  );
}
