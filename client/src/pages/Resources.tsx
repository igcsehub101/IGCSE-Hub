import { Link } from "wouter";
import { LinkIcon, Globe, Youtube, ExternalLink } from "lucide-react";
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
import { SiYoutube } from "react-icons/si";

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
    ];

  // YouTube channels organized by subject
  const youtubeChannels = {
    english: [
      { name: "Taughtly", url: "https://www.youtube.com/@Taughtly" },
      { name: "IGCSE SUCCESS", url: "https://www.youtube.com/@IGCSESUCCESS" },
    ],
    physics: [
      { name: "PLA Academy", url: "https://www.youtube.com/@plaacademy" },
    ],
    maths: [
      { name: "Ginger Mathematician", url: "https://www.youtube.com/@GingerMathematician" },
      { name: "Mathlete by Saad", url: "https://www.youtube.com/@MathletebySaad" },
    ],
    pastPaperSolving: [
      { name: "Ivan Lim (Add Math)", url: "https://www.youtube.com/@ivanlimhw" },
      { name: "My Study Compass (0580)", url: "https://www.youtube.com/@MyStudyCompass" },
      { name: "Learn Today IGCSE", url: "https://www.youtube.com/@learntodayIGCSE" },
    ],
  };

  // General resources and links
  const generalResources = [
    { name: "Past Paper Tracking Template", url: "https://docs.google.com/spreadsheets/d/1fvR-uQTL7JDhVnqkicxrjfC5WAZse1o7I0QVeWmgJGw/edit?gid=1556526292#gid=1556526292" },
    { name: "CAIE Finder - Past Paper Question Finder", url: "https://caiefinder.com/" },
    { name: "IG Exams - Topical Questions", url: "https://igexams.com" },
    { name: "Physics & Maths Tutor - Topical Questions", url: "https://www.physicsandmathstutor.com/" },
    { name: "All Subject IGCSE Resources Drive", url: "https://drive.google.com/drive/folders/1G96_PG3jFzGBzhFjrWfMQVJOh1mcOA_x?usp=sharing" },
    { name: "IGCSE Textbooks Collection", url: "https://drive.google.com/drive/folders/12v3l66wAsXKh4a2QZSKSb__LWmHdZM7_?usp=drive_link" },
  ];

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-[hsl(var(--pastel-blue))] rounded-full flex items-center justify-center mx-auto mb-4">
            <LinkIcon className="h-8 w-8 text-blue-700" />
          </div>
          <h2 className="font-bold text-3xl">Important Links & Resources</h2>
          <p className="text-gray-600 mt-2">Study materials organised by subject</p>
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

        <div className="max-w-5xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-xl mb-6">General Resources</h3>
          
          {/* YouTube Channels Section */}
          <div className="mb-8">
            <h4 className="font-semibold text-lg mb-4 pb-2 border-b">YouTube Channels</h4>
            
            {/* English YouTube Channels */}
            <div className="mb-5">
              <h5 className="font-medium text-blue-700 mb-2">English</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {youtubeChannels.english.map((channel, index) => (
                  <a 
                    key={index} 
                    href={channel.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    <SiYoutube className="text-red-600 text-2xl flex-shrink-0" />
                    <span className="text-blue-600 hover:text-blue-800">{channel.name}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Physics YouTube Channels */}
            <div className="mb-5">
              <h5 className="font-medium text-blue-700 mb-2">Physics</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {youtubeChannels.physics.map((channel, index) => (
                  <a 
                    key={index} 
                    href={channel.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    <SiYoutube className="text-red-600 text-2xl flex-shrink-0" />
                    <span className="text-blue-600 hover:text-blue-800">{channel.name}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Mathematics YouTube Channels */}
            <div className="mb-5">
              <h5 className="font-medium text-blue-700 mb-2">Mathematics</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {youtubeChannels.maths.map((channel, index) => (
                  <a 
                    key={index} 
                    href={channel.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    <SiYoutube className="text-red-600 text-2xl flex-shrink-0" />
                    <span className="text-blue-600 hover:text-blue-800">{channel.name}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Past Paper Solving YouTube Channels */}
            <div className="mb-5">
              <h5 className="font-medium text-blue-700 mb-2">Past Paper Solving</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {youtubeChannels.pastPaperSolving.map((channel, index) => (
                  <a 
                    key={index} 
                    href={channel.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    <SiYoutube className="text-red-600 text-2xl flex-shrink-0" />
                    <span className="text-blue-600 hover:text-blue-800">{channel.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* General Resources Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 pb-2 border-b">Resource Websites</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {generalResources.map((resource, index) => (
                <a 
                  key={index} 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 p-3 hover:bg-gray-50 rounded-md transition-colors border border-gray-100"
                >
                  <ExternalLink className="text-blue-600 h-5 w-5 flex-shrink-0" />
                  <span className="text-blue-600 hover:text-blue-800">{resource.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
