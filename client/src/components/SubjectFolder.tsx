import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";
import { Link } from "wouter";

interface SubjectFolderProps {
  title: string;
  icon: LucideIcon;
  color: string;
  path: string;
}

const SubjectFolder = ({ title, icon: Icon, color, path }: SubjectFolderProps) => {
  return (
    <Link href={path}>
      <Card className="p-4 cursor-pointer hover:shadow-lg transition-shadow">
        <div className="flex flex-col items-center gap-2">
          <div className={`p-2 rounded-full bg-${color}-100`}>
            <Icon className={`h-6 w-6 text-${color}-700`} />
          </div>
          <span className={`text-${color}-700 font-medium text-center`}>{title}</span>
        </div>
      </Card>
    </Link>
  );
};

export default SubjectFolder;