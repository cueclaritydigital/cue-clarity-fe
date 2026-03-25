import * as FiIcons from "react-icons/fi";
import type { IconType } from "react-icons";

interface Props {
  name: string;
  size?: number;
  className?: string;
}

export default function ReactIcon({ name, size = 24, className }: Props) {
  const Icon = (FiIcons as Record<string, IconType>)[name];
  if (!Icon) return null;
  return <Icon size={size} className={className} />;
}
