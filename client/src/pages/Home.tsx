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
        <h1 
          className="font-bold text-3xl md:text-4xl mb-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:text-pink-600"
          onClick={() => {
            const el = document.querySelector('h1');
            el?.classList.add('animate-bounce');
            setTimeout(() => el?.classList.remove('animate-bounce'), 1000);
          }}
        >
          Your One-Stop Resource Center
        </h1>
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
            description="Study materials for maths,sciences, economics, computer science, french, and english."
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

        <div className="mt-24 max-w-4xl mx-auto text-center">
          <h2 className="font-bold text-2xl md:text-3xl mb-6">About Us</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-600 mb-6">
              IGCSE Hub is a student-driven platform dedicated to helping IGCSE students excel in their studies. 
              Our mission is to provide comprehensive, accessible, and high-quality study resources across all subjects.
            </p>
            <p className="text-gray-600">
              Created by students for students, we understand the challenges of IGCSE preparation 
              and strive to make your learning journey smoother and more effective.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
