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
          title: "General Advice (Exam Prep)",
          content: "• Review important notes\n• Use our checklist to ensure you have covered all the topics in the syllabus\n• Review the hard questions"
        },
        {
          title: "Paper 2",
          content: "• Review hardest MCQs and method to solve them\n• Go over the syllabus doc\n• Bio - revise the colour of the indicators, important diagrams\n• Chem - revise the cation/anion/gas tests"
        },
        {
          title: "Paper 4",
          content: "• Memorize definitions from the syllabus doc\n• Revise key words required by reviewing mark schemes\n• Practice past papers by timing yourself and marking yourself\n• Make your own formula sheet to ensure you know all the formulas"
        },
        {
          title: "Paper 6",
          content: "Biology:\n• Experiment: independent, dependent and control variable\n• Method\n• Safety precautions\n• Repeat experiment 3 times and find average\n\nDrawing question:\n• Use a sharp HB pencil\n• Draw a clear and similar shape\n• Avoiding shading\n• Draw according to the magnification asked in the paper\n\nLine graph: when say 'passing through points' or 'suitable graph' or 'when there is time as variable'. It can be a straight (best fit line) or smooth curve\n\nPhysics:\n• Experiment: Include all pointers in the question\n• Add the units in the table\n• Additional points:\n  - at least 5 sets of data taken\n  - repeat for each value of independent variable and take average\n\nChemistry:\n• Taking measurements from burette/measuring cylinder - correct to 3 significant figures\n• Underline important information in experiments\n• Always draw a smooth line graph"
        }
      ],
      downloadUrl: "#science-quick-guide",
    },
    {
      name: "Economics",
      sections: [
        {
          title: "Paper 1",
          content: "• Revise the formulas for CPI, PED, PES\n• Go over the graphs:\n  - Supply and demand\n  - PPCs\n  - Currency\n  - Firm graphs (fixed costs, average costs)\n• Time and solve past papers"
        },
        {
          title: "Paper 2",
          content: "Format of answers:\n• 4 markers: 2 knowledge points, 2 analysis points\n• 8 markers structure:\n  - 2 body paragraphs (for and against)\n  - Each paragraph: 3-4 knowledge points, 2-3 analysis points\n\nKey Tips:\n• Read mark schemes of hard questions\n• Revise important notes and keywords/definitions\n• Macroeconomic questions - connect points to macroeconomic aims\n• 6 and 8 markers - take points from every chapter, link to micro and macroeconomics\n• 8 markers - link each point back to the question\n\nTime management: Answer sub-questions in reverse order (8, 6, 4, 2)"
        }
      ],
      downloadUrl: "#economics-quick-guide",
    },
    {
      name: "French",
      sections: [
        {
          title: "Paper 1",
          content: "• If unsure, write down words or phrases you recognize to return to later"
        },
        {
          title: "Paper 2",
          content: "• Read texts from past papers and textbook for practice\n• Underline key words and phrases while reading\n• Matching questions - write requirements for each person in English to find corresponding card"
        },
        {
          title: "Paper 3",
          content: "• Memorize general words and phrases for each topic\n• Revise vocabulary for common topics:\n  - Education, Transport, Technology\n  - Food, Vacations, Hobbies/Loisirs\n  - Clothes, Festivals, Cultures/Languages\n  - Family, House"
        },
        {
          title: "Paper 4",
          content: "• Refer to vocabulary in syllabus doc\n• Memorize common introduction for email and blog format\n• Structure: introduction, body paragraph, conclusion\n• Use transition words"
        }
      ],
      downloadUrl: "#french-guide",
    },
    {
      name: "Computer Science",
      sections: [
        {
          title: "Paper 1",
          content: "• Revise from mark schemes for key terms\n• Practice drawing diagrams:\n  - HTTPS\n  - Cyberattacks\n  - Blockchain\n  - Types of transmission\n• Practice conversions between denary, hexadecimal and binary"
        },
        {
          title: "Paper 2",
          content: "15 marker:\n• Write comments as you write code\n• Revise different types of algorithms:\n  - Linear search\n  - Bubble sort\n• Revise loop structures:\n  - For\n  - While\n  - Repeat\n• Revise syntax for pseudocode statements"
        }
      ],
      downloadUrl: "#cs-algorithm-cheat-sheet",
    },
    {
      name: "English Language",
      sections: [
        {
          title: "Paper 1 - Writer's Effect",
          content: "Structure:\n• Introduction: Overall effect of language in paragraph ___ is an image of ____\n• Body paragraphs:\n  - Choose words/phrases with interesting language\n  - Explain implicit and explicit meaning\n  - Identify part of speech and literary devices\n  - Describe effect on reader and mood/tone\n\nSummary Writing:\n• Keep within 10-15 words over limit\n• Use varied sentence structures\n• Include transitional phrases"
        },
        {
          title: "Paper 2 - Writing",
          content: "Focus on one text type (narrative or descriptive)\n\nDescriptive Essay Structure:\n• Setting/Atmosphere\n• Zoom in\n• Zoom in further (detailed descriptions)\n• Zoom out\n• Slight change\n\nKey Tip: Use all five senses and imagery types (visual, sensory, auditory)"
        }
      ],
      downloadUrl: "#english-writing-guide",
    }
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