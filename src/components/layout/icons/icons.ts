import { BsHouse, BsCodeSlash, BsPersonFill, BsEnvelope, BsInfoSquare } from "react-icons/bs";
import { IconType } from "react-icons";

interface IconsProps {
  [key: string]: {
    icon: IconType;
  }
};

export const Icons: IconsProps = {
  home: {
    icon: BsHouse,
  },
  project: {
    icon: BsCodeSlash,
  },
  skills: {
    icon: BsPersonFill,
  },
  about: {
    icon: BsInfoSquare,
  },
  contact: {
    icon: BsEnvelope,
  },
};