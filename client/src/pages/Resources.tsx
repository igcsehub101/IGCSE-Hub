import { Link } from "wouter";
import { LinkIcon, Globe, Youtube } from "lucide-react";
import { 
  FlaskRound, 
  FlaskConical, 
  Zap, 
  Calculator, 
  PlusSquare, 
  Languages, 
  TrendingUp, 
  BookOpen, 
  Laptop, 
  Wrench 
} from "lucide-react";
import { Card } from "@/components/ui/card";
import SubjectFolder from "@/components/SubjectFolder";

const Resources = () => {
  const subjects = [
    {
      title: "Chemistry (0625)",
      icon: FlaskConical,
      color: "blue",
      path: "/subjects/chemistry",
    },
    {
      title: "Biology (0610)",
      icon: FlaskRound,
      color: "green",
      path: "/subjects/biology",
    },
    {
      title: "Physics (0625)",
      icon: Zap,
      color: "yellow",
      path: "/subjects/physics",
    },
    {
      title: "Add. Math (0606)",
      icon: Calculator,
      color: "pink",
      path: "/subjects/mathematics",
    },
    {
      title: "Ext. Math (0580)",
      icon: PlusSquare,
      color: "purple",
      path: "/subjects/mathematics",
    },
    {
      title: "French (0520)",
      icon: Languages,
      color: "orange",
      path: "/subjects/french",
    },
    {
      title: "Economics (0450)",
      icon: TrendingUp,
      color: "blue",
      path: "/subjects/economics",
    },
    {
      title: "English First Language (0500)",
      icon: BookOpen,
      color: "green",
      path: "/subjects/english-language",
    },
    {
      title: "Computer Science (0478)",
      icon: Laptop,
      color: "yellow",
      path: "/subjects/computer-science",
    },
    {
      title: "Study Tools",
      icon: Wrench,
      color: "pink",
      path: "/study-tools",
    },
  ];

  const additionalResources = {
    youtube: [
      { name: "ScienceSimplified", url: "#science-simplified" },
      { name: "MathTutorials", url: "#math-tutorials" },
      { name: "EconomicsExplained", url: "#economics-explained" },
    ],
    websites: [
      { name: "Khan Academy", url: "#khan-academy" },
      { name: "Exam Board Resources", url: "#exam-board" },
      { name: "SaveMyExams", url: "#save-my-exams" },
    ],
  };

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-[hsl(var(--pastel-blue))] rounded-full flex items-center justify-center mx-auto mb-4">
            <LinkIcon className="h-8 w-8 text-blue-700" />
          </div>
          <h2 className="font-bold text-3xl">Important Links & Resources</h2>
          <p className="text-gray-600 mt-2">Curated materials for comprehensive study</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {subjects.map((subject, index) => (
            <SubjectFolder
              key={index}
              title={subject.title}
              icon={subject.icon}
              color={subject.color as any}
              path={subject.path}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-xl mb-4">Additional Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">YouTube Channels</h4>
              <ul className="space-y-2">
                {additionalResources.youtube.map((channel, index) => (
                  <li key={index} className="flex items-center">
                    <Youtube className="h-4 w-4 text-red-600 mr-2" />
                    <a href={channel.url} className="text-blue-600 hover:text-blue-800">
                      {channel.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Study Websites</h4>
              <ul className="space-y-2">
                {additionalResources.websites.map((website, index) => (
                  <li key={index} className="flex items-center">
                    <Globe className="h-4 w-4 text-blue-600 mr-2" />
                    <a href={website.url} className="text-blue-600 hover:text-blue-800">
                      {website.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
