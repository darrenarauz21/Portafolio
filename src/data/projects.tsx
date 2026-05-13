import type { ReactNode } from "react";
import {
  ApiOutlined,
  AppstoreOutlined,
  CodeOutlined,
  DatabaseOutlined,
  DeploymentUnitOutlined,
  GlobalOutlined,
  SafetyOutlined,
  ToolOutlined,
} from "@ant-design/icons";

export type ProjectStatus = "Publicado" | "Repositorio" | "Interno" | "Web";

export type Project = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  imageName: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: ProjectStatus;
  featured?: boolean;
  icon?: ReactNode;
};

export type ProjectSection = {
  id: string;
  label: string;
  kicker: string;
  title: string;
  description: string;
  projects: Project[];
};

export const getGithubImageUrl = (fileName: string) =>
  `https://raw.githubusercontent.com/darrenarauz21/Portafolio/main/images/${encodeURIComponent(fileName)}`;

export const projectSections: ProjectSection[] = [
  {
    id: "sensa",
    label: "SENSA",
    kicker: "Ecosistema principal",
    title: "SENSA v2 y documentación técnica",
    description:
      "Proyectos relacionados con el sistema de control de acceso empresarial: plataforma, arquitectura, documentación visual, infraestructura y experiencia de operación.",
    projects: [
      {
        id: "sensa-v2",
        title: "SENSA v2",
        eyebrow: "Sistema empresarial",
        description:
          "Sistema de control de acceso empresarial construido con Django, DRF, PostgreSQL, React, Ant Design, WebSockets, datos dinámicos, workflows, reportes y multi-tenant.",
        imageName: "dashboard.png",
        techStack: ["Django", "DRF", "PostgreSQL", "React", "Ant Design", "WebSockets"],
        status: "Interno",
        featured: true,
        icon: <DeploymentUnitOutlined />,
      },
      {
        id: "arquitectura-sensa",
        title: "Arquitectura SENSA",
        eyebrow: "Documentación interactiva",
        description:
          "Frontend técnico para visualizar la arquitectura de SENSA v2: ERD, módulos, datos dinámicos, workflows, infraestructura, API REST y diagramas de software.",
        imageName: "api.png",
        techStack: ["React", "TypeScript", "Ant Design", "Vite", "Vercel"],
        liveUrl: "https://arquitectura-sensa.vercel.app/",
        githubUrl: "https://github.com/darrenarauz21/arquitectura-sensa.git",
        status: "Publicado",
        featured: true,
        icon: <DatabaseOutlined />,
      },
      {
        id: "sensa-controles",
        title: "Controles y Garitas",
        eyebrow: "Módulo operacional",
        description:
          "Pantallas para registrar entradas y salidas, consultar información dinámica, gestionar garitas y visualizar actividad reciente del sistema.",
        imageName: "controles.png",
        techStack: ["React", "Ant Design", "Django REST", "PostgreSQL"],
        status: "Interno",
        icon: <AppstoreOutlined />,
      },
      {
        id: "sensa-biblioteca",
        title: "Biblioteca de Campos",
        eyebrow: "Datos dinámicos",
        description:
          "Módulo para crear campos globales reutilizables, asociarlos a schemas y construir formularios configurables sin cambiar la estructura base del sistema.",
        imageName: "biblioteca.png",
        techStack: ["React", "Ant Design", "JSONB", "Django"],
        status: "Interno",
        icon: <DatabaseOutlined />,
      },
      {
        id: "sensa-configuracion",
        title: "Configuración Empresarial",
        eyebrow: "Administración",
        description:
          "Gestión de empresa, idioma, plantillas, correo, parámetros operativos y personalización del sistema para diferentes entornos.",
        imageName: "configuracion.png",
        techStack: ["React", "Ant Design", "Django", "SMTP"],
        status: "Interno",
        icon: <ToolOutlined />,
      },
      {
        id: "sensa-correo",
        title: "Notificaciones y Correo",
        eyebrow: "Automatización",
        description:
          "Plantillas HTML, configuración SMTP, logs de envío e invitaciones automáticas para visitas y flujos de comunicación del sistema.",
        imageName: "correo.png",
        techStack: ["Django", "SMTP", "HTML", "Threads"],
        status: "Interno",
        icon: <ApiOutlined />,
      },
    ],
  },
  {
    id: "sensa-v1",
    label: "SENSA v1",
    kicker: "Versión anterior",
    title: "Primera versión del sistema SENSA",
    description:
      "Versión separada del ecosistema actual. Se conserva como referencia de evolución técnica y funcional hacia SENSA v2.",
    projects: [
      {
        id: "sensa-v1-repo",
        title: "SENSA v1",
        eyebrow: "Repositorio histórico",
        description:
          "Primera versión del sistema de control de acceso. Proyecto independiente usado como base conceptual para la evolución posterior.",
        imageName: "dashboard1.png",
        techStack: ["React", "Django", "Control de acceso", "Dashboard"],
        githubUrl: "https://github.com/darrenarauz21/SENSA.git",
        status: "Repositorio",
        icon: <CodeOutlined />,
      },
    ],
  },
  {
    id: "web",
    label: "Web",
    kicker: "Sitios publicados",
    title: "Proyectos web y experiencias digitales",
    description:
      "Sitios y experiencias web orientadas a presentación comercial, diseño visual, presencia digital y navegación limpia.",
    projects: [
      {
        id: "altos-del-dragon",
        title: "Altos del Dragón",
        eyebrow: "Sitio web turístico",
        description:
          "Sitio web para cabañas, orientado a mostrar alojamiento, experiencia visual y contacto directo con clientes.",
        imageName: "altos_del_dragon.png",
        techStack: ["WordPress", "CSS", "JavaScript"],
        liveUrl: "https://altosdeldragon.com",
        status: "Web",
        featured: true,
        icon: <GlobalOutlined />,
      },
      {
        id: "aveva",
        title: "AVEVA AV",
        eyebrow: "Proyecto web",
        description:
          "Sitio web para presencia digital y presentación de servicios, integrado al portafolio como proyecto web publicado.",
        imageName: "aveva.png",
        techStack: ["Web", "Diseño responsive", "Frontend"],
        liveUrl: "https://aveva-av.com/",
        status: "Web",
        featured: true,
        icon: <GlobalOutlined />,
      },
      {
        id: "blog-carrusel",
        title: "Blog y Carrusel",
        eyebrow: "Interfaz web",
        description:
          "Carrusel animado para entrada de blog, pensado para mostrar noticias, contenidos recientes o publicaciones destacadas.",
        imageName: "carrusel.png",
        techStack: ["Django", "HTML", "CSS"],
        status: "Web",
        icon: <AppstoreOutlined />,
      },
      {
        id: "barra-menu",
        title: "Barra de Menú desplegable",
        eyebrow: "Navegación compacta",
        description:
          "Menú superior con elementos ocultos que se muestran al interactuar, ideal para interfaces con muchas opciones de navegación.",
        imageName: "barradesplegar.png",
        techStack: ["Django", "HTML", "CSS"],
        status: "Web",
        icon: <AppstoreOutlined />,
      },
      {
        id: "login-php",
        title: "Inicio de Sesión",
        eyebrow: "UI animada",
        description:
          "Login minimalista con figuras geométricas animadas y enfoque visual moderno para autenticación de usuarios.",
        imageName: "loginphp.png",
        techStack: ["PHP", "HTML", "CSS"],
        status: "Web",
        icon: <AppstoreOutlined />,
      },
    ],
  },
  {
    id: "plugins",
    label: "Plugins",
    kicker: "Plugins y extensiones",
    title: "Extensiones, utilidades y herramientas técnicas",
    description:
      "Proyectos de tipo extensión, plugin o herramienta especializada. Esta sección queda preparada para agrupar más experimentos y utilidades de seguridad, automatización y productividad.",
    projects: [
      {
        id: "madoka",
        title: "Madoka Scanner",
        eyebrow: "Extensión de navegador",
        description:
          "Extensión para Edge, Chrome y Firefox que analiza cada archivo descargado mediante un servidor local y Google Magika para detectar el tipo real del archivo antes de abrirlo.",
        imageName: "madoka.png",
        techStack: ["JavaScript", "Python", "Flask", "Magika", "Browser Extension"],
        githubUrl: "https://github.com/darrenarauz21/Madoka",
        status: "Repositorio",
        featured: true,
        icon: <SafetyOutlined />,
      },
    ],
  },
  {
    id: "interfaces",
    label: "UI",
    kicker: "Interfaces y prototipos",
    title: "Diseño de interfaces administrativas",
    description:
      "Pantallas y prototipos centrados en dashboards, CRUD dinámicos, actividad reciente y componentes reutilizables para sistemas administrativos.",
    projects: [
      {
        id: "panel-control",
        title: "Panel de Control",
        eyebrow: "Dashboard",
        description:
          "Vista limpia y ordenada con información útil para el usuario y lectura rápida de estado operativo.",
        imageName: "dashboard1.png",
        techStack: ["React", "Material UI"],
        status: "Interno",
        icon: <AppstoreOutlined />,
      },
      {
        id: "actividades-recientes",
        title: "Actividades Recientes",
        eyebrow: "Seguimiento",
        description:
          "Seguimiento de entradas, salidas y actividad reciente con enfoque en lectura operativa.",
        imageName: "dashboard2.png",
        techStack: ["React", "Material UI"],
        status: "Interno",
        icon: <AppstoreOutlined />,
      },
      {
        id: "acciones-rapidas",
        title: "Acciones rápidas",
        eyebrow: "UX administrativa",
        description:
          "Botones y accesos directos para ejecutar acciones frecuentes dentro de un panel administrativo.",
        imageName: "accionesrap.png",
        techStack: ["React", "Material UI"],
        status: "Interno",
        icon: <AppstoreOutlined />,
      },
      {
        id: "crud-dinamico",
        title: "Diseño de CRUD Dinámico",
        eyebrow: "Formularios reutilizables",
        description:
          "Interfaz para crear formularios reutilizables en React con validaciones dinámicas y estructura modular.",
        imageName: "CrudDinamico.png",
        techStack: ["React", "Material UI", "MaterialTable"],
        status: "Interno",
        icon: <DatabaseOutlined />,
      },
      {
        id: "eventos-caliente",
        title: "Vista de Eventos en Caliente",
        eyebrow: "Tiempo real",
        description:
          "Visualización interactiva de eventos recientes con filtros por categoría y enfoque operacional.",
        imageName: "Eventos.png",
        techStack: ["React", "Material UI", "CSS"],
        status: "Interno",
        icon: <ApiOutlined />,
      },
      {
        id: "seleccion-vistas",
        title: "Selección de Vistas",
        eyebrow: "Navegación modular",
        description:
          "Diseño para cambiar entre múltiples módulos administrativos desde un solo menú centralizado.",
        imageName: "Seleccion de vistas.png",
        techStack: ["React", "Material UI", "CSS"],
        status: "Interno",
        icon: <AppstoreOutlined />,
      },
    ],
  },
];

export const profileLinks = {
  whatsapp: "https://wa.me/50763038617",
  linkedin: "https://www.linkedin.com/in/darrenarauz/",
  github: "https://github.com/darrenarauz21/",
  email: "mailto:darren.arauz@gmail.com",
};

export const stats = [
  { label: "Proyectos agrupados", value: "5" },
  { label: "Stack principal", value: "Full Stack" },
  { label: "Deploy", value: "Vercel" },
  { label: "Backend", value: "Django" },
];
