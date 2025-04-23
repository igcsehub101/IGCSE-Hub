import { Link } from "wouter";
import { LucideIcon } from "lucide-react";

interface SubjectFolderProps {
  title: string;
  icon: LucideIcon;
  color: "red" | "blue" | "pink" | "yellow" | "green" | "purple" | "orange";
  links: { label: string; url: string }[];
}

const SubjectFolder = ({
  title,
  icon: Icon,
  color,
  links,
}: SubjectFolderProps) => {
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
    <div className="mini-folder">
      <div className={`${getColorClass(color)} p-4 rounded-lg shadow-md text-center h-full flex flex-col`}>
        <Icon className={`h-10 w-10 mx-auto mb-3 ${getIconColorClass(color)}`} />
        <h3 className="font-semibold mb-2">{title}</h3>
        <div className="mt-auto">
          {links.map((link, index) => (
            <Link key={index} href={link.url}>
              <a className="text-sm text-blue-600 hover:text-blue-800 block mb-1 last:mb-0">
                {link.label}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectFolder;
