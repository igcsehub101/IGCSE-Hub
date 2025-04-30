import { Clock, FileText, Download } from "lucide-react";
import { Link } from "wouter";
import AccordionItem from "@/components/AccordionItem";

const LastMinuteTips = () => {
  const subjects = [
    {
      name: "Physics, Chemistry and Biology",
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
          title: "Paper 6 - Biology",
          content: `Experiment:
• Independent, dependent and control variable
• Method
• Safety precautions
• Repeat experiment 3 times and find average

Drawing question:
• Use a sharp HB pencil
• Draw a clear and similar shape
• Avoiding shading
• Draw according to the magnification asked in the paper

Line graph: when say 'passing through points' or 'suitable graph' or 'when there is time as variable'. It can be a straight (best fit line) or smooth curve`
        },
        {
          title: "Paper 6 - Physics",
          content: `Experiment:
• Include all pointers in the question
• Add the units in the table
• Additional points:
  - at least 5 sets of data taken  
  - repeat for each value of independent variable and take average`
        },
        {
          title: "Paper 6 - Chemistry",
          content: `• Taking measurements from burette/measuring cylinder - correct to 3 significant figures
• Underline important information in experiments
• Always draw a smooth line graph`
        }
      ],
      downloadUrls: [
        { name: "Physics Last Minute Notes", url: "https://drive.google.com/file/d/1-z-C4wOf7RAkrpmlfRYEkp7ZMKYpQjGp/view?usp=drive_link" },
        { name: "Chemistry Last Minute Notes", url: "https://drive.google.com/file/d/1c8k46LN-dnZZdXtlCYs6Tnea6Qpee2IX/view?usp=drive_link" }
      ],
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
      downloadUrls: [],
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
      downloadUrls: [],
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
      downloadUrls: [
        { name: "Computer Science Last Minute Notes", url: "https://drive.google.com/file/d/1p8_zQbPFMQSyAqwD7nSJhYsyaAnbAqEr/view?usp=drive_link" }
      ],
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
      downloadUrls: [],
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
              <div className="space-y-6">
                {subject.sections.map((section, i) => (
                  <div key={i} className="bg-white p-4 rounded-md shadow-sm">
                    <h4 className="font-semibold text-lg text-red-700 mb-3 pb-2 border-b border-gray-100">{section.title}</h4>
                    <div className="pl-5 whitespace-pre-wrap text-gray-700 space-y-2">{section.content}</div>
                  </div>
                ))}
              </div>

              {subject.downloadUrls && subject.downloadUrls.length > 0 && (
                <div className="mt-6 space-y-3">
                  <h4 className="font-semibold text-lg mb-2">Last Minute Notes</h4>
                  <div className="space-y-3">
                    {subject.downloadUrls.map((download, i) => (
                      <a 
                        key={i}
                        href={download.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-3 bg-white rounded-md shadow-sm hover:bg-red-50 transition-colors border border-gray-100"
                      >
                        <Download className="h-5 w-5 text-red-600" />
                        <span className="text-red-700 font-medium">{download.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LastMinuteTips;