
import { Clock } from "lucide-react";
import { Link } from "wouter";
import AccordionItem from "@/components/AccordionItem";
import { FileText } from "lucide-react";

const LastMinuteTips = () => {
  const subjects = [
    {
      name: "Science",
      sections: [
        {
          title: "General Advice",
          content: "Review the hard questions and use our checklist to ensure you have covered all the topics in the syllabus"
        },
        {
          title: "Paper 2",
          content: "Multiple choice questions strategy"
        },
        {
          title: "Paper 4",
          content: "Structured questions approach"
        },
        {
          title: "Paper 6",
          content: "Alternative to Practical skills"
        }
      ],
      downloadUrl: "#science-quick-guide",
    },
    {
      name: "French",
      sections: [
        {
          title: "Paper 1",
          content: "Listening exam strategies and practice"
        },
        {
          title: "Paper 2",
          content: "Reading and writing examination techniques"
        },
        {
          title: "Paper 3",
          content: "Speaking test preparation"
        },
        {
          title: "Paper 4",
          content: "Writing exam guidelines"
        }
      ],
      downloadUrl: "#french-guide",
    },
    {
      name: "Economics",
      sections: [
        {
          title: "Paper 1",
          content: "Multiple choice questions technique"
        },
        {
          title: "Paper 2",
          content: "Structured questions approach"
        },
        {
          title: "Time Management",
          content: "Effective time allocation strategies"
        }
      ],
      downloadUrl: "#economics-diagram-guide",
    },
    {
      name: "English Language",
      sections: [
        {
          title: "Paper 1",
          content: `Revise the formats for all of the text types

Format for writers effect answer:

Intro: The overall effect of language used in paragraph ___ is an image of ____
Body paragraph: Choose words/short phrases that use interesting language. For each word/phrase explain both the implicit and explicit meaning. Identify the part of speech and any other literary devices used. Then describe the effect on the reader and identify the mood/tone created. 

Summary writing:
Ensure that the summary is no more than 10-15 words over the word limit. Use both simple and complex sentence structures and use transitional phrases in your answer.`
        },
        {
          title: "Paper 2",
          content: `Focus on preparing for one text type - narrative or descriptive 
Structure of a descriptive essay:

Setting/ Atmosphere
Zoom in
Zoom in again (describe everything in more detail)
Zoom out
Slight change
- use the 5 senses - all types of imagery(visual, sensory, auditory)`
        }
      ],
      downloadUrl: "#english-writing-guide",
    },
    {
      name: "Computer Science",
      sections: [
        {
          title: "Paper 1",
          content: "Theory of computation and computer systems"
        },
        {
          title: "Paper 2",
          content: "Problem-solving and programming concepts"
        }
      ],
      downloadUrl: "#cs-algorithm-cheat-sheet",
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
              <div className="space-y-4">
                {subject.sections.map((section, i) => (
                  <div key={i}>
                    <h4 className="font-semibold mb-2">{section.title}</h4>
                    <div className="pl-5 whitespace-pre-wrap">{section.content}</div>
                  </div>
                ))}
              </div>
              
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
