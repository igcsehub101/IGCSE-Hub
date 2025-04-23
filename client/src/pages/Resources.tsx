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
import SubjectFolder from "@/components/SubjectFolder";

const Resources = () => {
  const subjects = [
    {
      title: "Chemistry",
      icon: FlaskConical,
      color: "blue",
      links: [
        { label: "Past Papers", url: "#chemistry-papers" },
        { label: "Mark Schemes", url: "#chemistry-marks" },
        { label: "Video Tutorials", url: "#chemistry-videos" },
      ],
    },
    {
      title: "Biology",
      icon: FlaskRound,
      color: "green",
      links: [
        { label: "Past Papers", url: "#biology-papers" },
        { label: "Mark Schemes", url: "#biology-marks" },
        { label: "Video Tutorials", url: "#biology-videos" },
      ],
    },
    {
      title: "Physics",
      icon: Zap,
      color: "yellow",
      links: [
        { label: "Past Papers", url: "#physics-papers" },
        { label: "Mark Schemes", url: "#physics-marks" },
        { label: "Video Tutorials", url: "#physics-videos" },
      ],
    },
    {
      title: "Add. Math",
      icon: Calculator,
      color: "pink",
      links: [
        { label: "Past Papers", url: "#add-math-papers" },
        { label: "Mark Schemes", url: "#add-math-marks" },
        { label: "Video Tutorials", url: "#add-math-videos" },
      ],
    },
    {
      title: "Ext. Math",
      icon: PlusSquare,
      color: "purple",
      links: [
        { label: "Past Papers", url: "#ext-math-papers" },
        { label: "Mark Schemes", url: "#ext-math-marks" },
        { label: "Video Tutorials", url: "#ext-math-videos" },
      ],
    },
    {
      title: "French",
      icon: Languages,
      color: "orange",
      links: [
        { label: "Past Papers", url: "#french-papers" },
        { label: "Vocabulary Lists", url: "#french-vocab" },
        { label: "Grammar Guides", url: "#french-grammar" },
      ],
    },
    {
      title: "Economics",
      icon: TrendingUp,
      color: "blue",
      links: [
        { label: "Past Papers", url: "#econ-papers" },
        { label: "Case Studies", url: "#econ-cases" },
        { label: "Diagram Templates", url: "#econ-diagrams" },
      ],
    },
    {
      title: "English",
      icon: BookOpen,
      color: "green",
      links: [
        { label: "Past Papers", url: "#english-papers" },
        { label: "Essay Examples", url: "#english-essays" },
        { label: "Writing Tips", url: "#english-tips" },
      ],
    },
    {
      title: "Comp. Sci.",
      icon: Laptop,
      color: "yellow",
      links: [
        { label: "Past Papers", url: "#cs-papers" },
        { label: "Programming Resources", url: "#cs-programming" },
        { label: "Algorithm Guides", url: "#cs-algorithms" },
      ],
    },
    {
      title: "Study Tools",
      icon: Wrench,
      color: "pink",
      links: [
        { label: "Flashcard Maker", url: "#flashcards" },
        { label: "Study Planners", url: "#planners" },
        { label: "Note Templates", url: "#templates" },
      ],
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
              links={subject.links}
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
