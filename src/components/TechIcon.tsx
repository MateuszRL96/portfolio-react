'use client';

import {
  FaReact,
  FaNodeJs,
  FaCode,
  FaRobot,
  FaServer,
  FaBrain
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiJavascript,
  SiPython,
  SiDocker,
  SiKubernetes,
  SiTensorflow
} from 'react-icons/si';

interface TechIconProps {
  name: string;
  size?: 'sm' | 'lg';
}

export function TechIcon({ name, size = 'sm' }: TechIconProps) {
  const iconSize = size === 'sm' ? "w-5 h-5" : "w-20 h-20";
  
  const icons: { [key: string]: React.ReactElement } = {
    FaReact: <FaReact className={iconSize} />,
    SiNextdotjs: <SiNextdotjs className={iconSize} />,
    SiTypescript: <SiTypescript className={iconSize} />,
    SiJavascript: <SiJavascript className={iconSize} />,
    SiPython: <SiPython className={iconSize} />,
    SiDocker: <SiDocker className={iconSize} />,
    SiKubernetes: <SiKubernetes className={iconSize} />,
    FaNodeJs: <FaNodeJs className={iconSize} />,
    SiTensorflow: <SiTensorflow className={iconSize} />,
    FaServer: <FaServer className={iconSize} />,
    FaBrain: <FaBrain className={iconSize} />,
    FaRobot: <FaRobot className={iconSize} />,
    FaCode: <FaCode className={iconSize} />
  };

  return icons[name] || <FaCode className={iconSize} />;
} 