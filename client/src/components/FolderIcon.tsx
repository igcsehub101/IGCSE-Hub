import { Link } from "wouter";
import { LucideIcon } from "lucide-react";

interface FolderIconProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: "red" | "blue" | "pink" | "yellow" | "green" | "purple" | "orange";
  path: string;
}

const FolderIcon = ({
  title,
  description,
  icon: Icon,
  color,
  path,
}: FolderIconProps) => {
  const getColorClass = (color: string) => {
    const colorMap = {
      red: "bg-[hsl(var(--pastel-red))]",
      blue: "bg-[hsl(var(--pastel-blue))]",
      pink: "bg-[hsl(var(--pastel-pink))]",
      yellow: "bg-[hsl(var(--pastel-yellow))]",
      green: "bg-[hsl(var(--pastel-green))]",
      purple: "bg-[hsl(var(--pastel-purple))]",
      orange: "bg-[hsl(var(--pastel-orange))]",
    };
    
    return colorMap[color as keyof typeof colorMap] || "bg-[hsl(var(--pastel-blue))]";
  };
  
  const getIconColorClass = (color: string) => {
    const colorMap = {
      red: "text-red-700",
      blue: "text-blue-700",
      pink: "text-pink-700",
      yellow: "text-yellow-700",
      green: "text-green-700",
      purple: "text-purple-700",
      orange: "text-orange-700",
    };
    
    return colorMap[color as keyof typeof colorMap] || "text-blue-700";
  };

  return (
    <Link href={path}>
      <a className="folder group block">
        <div className={`folder-tab ${getColorClass(color)}`}></div>
        <div className={`folder-body ${getColorClass(color)} p-6 flex flex-col items-center justify-center`}>
          <Icon className={`h-14 w-14 mb-4 ${getIconColorClass(color)}`} />
          <h3 className="font-semibold text-xl text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600 mt-2 text-center">{description}</p>
        </div>
      </a>
    </Link>
  );
};

export default FolderIcon;
