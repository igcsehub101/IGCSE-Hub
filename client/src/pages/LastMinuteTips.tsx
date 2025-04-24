import { Clock } from "lucide-react";
import { Link } from "wouter";
import AccordionItem from "@/components/AccordionItem";
import { FileText } from "lucide-react";

const LastMinuteTips = () => {
  const subjects = [
    {
      name: "Science",
      keyTopics: [
        "Periodic Table & Trends",
        "Mole Calculations",
        "Chemical Bonding",
        "Reaction Rates & Equilibrium",
      ],
      quickInfo: [
        "n = mass/Mr",
        "Concentration = moles/volume",
        "Percentage Yield = (actual/theoretical) × 100%",
      ],
      infoTitle: "Quick Formulas:",
      downloadUrl: "#science-quick-guide",
    },
    {
      name: "French",
      keyTopics: [
        "Verb Conjugations",
        "Tenses Overview",
        "Essential Vocabulary",
        "Conversation Topics",
      ],
      quickInfo: [
        "Memorize irregular verbs",
        "Practice common phrases",
        "Learn topic-specific vocabulary",
      ],
      infoTitle: "Study Tips:",
      downloadUrl: "#french-guide",
    },
    {
      name: "Economics",
      keyTopics: [
        "Supply & Demand",
        "Market Structures",
        "Macroeconomic Indicators",
        "International Trade",
      ],
      quickInfo: [
        "Label all axes and curves",
        "Show equilibrium points clearly",
        "Illustrate shifts vs. movements",
      ],
      infoTitle: "Diagram Checklist:",
      downloadUrl: "#economics-diagram-guide",
    },
    {
      name: "English Language",
      keyTopics: [
        "Comprehension Techniques",
        "Essay Structure",
        "Language Analysis",
        "Creative Writing",
      ],
      quickInfo: [
        "PEEL paragraphs (Point, Evidence, Explain, Link)",
        "Use topic sentences effectively",
        "Vary sentence structures",
      ],
      infoTitle: "Writing Tips:",
      downloadUrl: "#english-writing-guide",
    },
    {
      name: "Computer Science",
      keyTopics: [
        "Data Structures & Algorithms",
        "Programming Fundamentals",
        "Database Design",
        "Networking Concepts",
      ],
      quickInfo: [
        "Time complexity analysis",
        "Algorithm tracing practice",
        "Code optimization techniques",
      ],
      infoTitle: "Coding Focus:",
      downloadUrl: "#cs-algorithm-cheat-sheet",
      codeExample: `FOR i ← 1 TO n
  IF array[i] > max THEN
    max ← array[i]
  ENDIF
NEXT i`,
    },
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-[hsl(var(--pastel-red))] rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="h-8 w-8 text-red-700" />
          </div>
          <h2 className="font-bold text-3xl">Last Minute Tips</h2>
          <p className="text-gray-600 mt-2">Essential revision points for each subject</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {subjects.map((subject, index) => (
            <AccordionItem key={index} title={subject.name}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Key Topics:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {subject.keyTopics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{subject.infoTitle}</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {subject.quickInfo.map((info, i) => (
                      <li key={i}>{info}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {subject.codeExample && (
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Common Pseudocode:</h4>
                  <pre className="bg-gray-100 p-2 rounded text-sm">
                    {subject.codeExample}
                  </pre>
                </div>
              )}
              
              <div className="mt-4">
                <Link href={subject.downloadUrl}>
                  <a className="text-blue-600 hover:underline inline-flex items-center">
                    <FileText className="mr-2 h-4 w-4" /> Download {subject.name} Quick Guide
                  </a>
                </Link>
              </div>
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LastMinuteTips;
