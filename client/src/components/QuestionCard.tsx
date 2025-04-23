import { LucideIcon } from "lucide-react";
import { FileText } from "lucide-react";

interface QuestionCardProps {
  subject: string;
  icon: LucideIcon;
  color: "red" | "blue" | "pink" | "yellow" | "green" | "purple" | "orange";
  title: string;
  description: string;
  question: string;
  downloadUrl: string;
}

const QuestionCard = ({
  subject,
  icon: Icon,
  color,
  title,
  description,
  question,
  downloadUrl,
}: QuestionCardProps) => {
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

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className={`${getColorClass(color)} p-4`}>
        <h3 className="font-semibold text-lg flex items-center">
          <Icon className="mr-2 h-5 w-5" /> {subject}
        </h3>
      </div>
      <div className="p-4">
        <div className="mb-4">
          <h4 className="font-semibold mb-2">{title}</h4>
          <p className="text-sm text-gray-600 mb-2">{description}</p>
          <div className="bg-gray-100 p-3 rounded-lg">
            <p className="text-sm">{question}</p>
          </div>
        </div>
        <a 
          href={downloadUrl} 
          className="text-blue-600 hover:underline inline-flex items-center"
        >
          <FileText className="mr-2 h-4 w-4" /> Download {subject} Hard Questions Pack
        </a>
      </div>
    </div>
  );
};

export default QuestionCard;
