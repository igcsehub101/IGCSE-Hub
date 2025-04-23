import {
  Clock,
  Link as LinkIcon,
  HelpCircle,
} from "lucide-react";
import FolderIcon from "@/components/FolderIcon";

const Home = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto text-center">
        <h1 className="font-bold text-3xl md:text-4xl mb-6">Your One-Stop Resource Center</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Access past papers, revision guides, mark schemes, and helpful resources for all your exam preparation needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FolderIcon
            title="Last Minute Tips"
            description="Quick revision guides for each subject"
            icon={Clock}
            color="red"
            path="/last-minute-tips"
          />

          <FolderIcon
            title="Important Links & Resources"
            description="Curated links and materials for thorough study"
            icon={LinkIcon}
            color="blue"
            path="/resources"
          />

          <FolderIcon
            title="Hard Questions"
            description="Challenging problems with detailed solutions"
            icon={HelpCircle}
            color="pink"
            path="/hard-questions"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
