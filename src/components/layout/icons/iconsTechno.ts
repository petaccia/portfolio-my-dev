import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiGit } from "react-icons/si";
import { IconType } from "react-icons";

interface IconsTechnoProps {
  [key: string]: {
    icon: IconType;
  }
};

export const IconsTechno: IconsTechnoProps = {
  html: {
    icon: SiHtml5,
  },
  css: {
    icon: SiCss3,
  },
  javascript: {
    icon: SiJavascript,
  },
  typescript: {
    icon: SiTypescript,
  },
  react: {
    icon: SiReact,
  },
  nextjs: {
    icon: SiNextdotjs,
  },
  nodejs: {
    icon: SiNodedotjs,
  },
  express: {
    icon: SiExpress,
  },
  mongodb: {
    icon: SiMongodb,
  },
  mysql: {
    icon: SiMysql,
  },
  git: {
    icon: SiGit,
  },
};

