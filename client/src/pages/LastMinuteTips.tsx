
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
          content: `**Exam Preparation:**
• Review important notes
• Use our checklist to ensure you have covered all the topics in the syllabus
• Review the hard questions`
        },
        {
          title: "Paper 2",
          content: `**Multiple Choice Questions:**
• Review hardest MCQs and method to solve them
• Go over the syllabus doc
• <span class="text-green-600">Biology: Revise the colour of the indicators, important diagrams</span>
• <span class="text-blue-600">Chemistry: Revise the cation/anion/gas tests</span>`
        },
        {
          title: "Paper 4",
          content: `**Structured Questions:**
• <span class="text-red-600">Memorize definitions from the syllabus doc</span>
• <span class="text-purple-600">Revise key words required by reviewing mark schemes</span>
• Practice past papers by timing yourself and marking yourself
• Make your own formula sheet to ensure you know all the formulas`
        },
        {
          title: "Paper 6",
          content: `**Biology Experiments:**
• Independent, dependent and control variable
• Method
• Safety precautions
• <span class="text-red-600">Repeat experiment 3 times and find average</span>

**Drawing Questions:**
• Use a sharp HB pencil
• Draw a clear and similar shape
• Avoiding shading
• Draw according to the magnification asked in the paper

**Line Graphs:**
• Used when instructions say 'passing through points' or 'suitable graph' or 'when there is time as variable'
• Can be a straight (best fit line) or smooth curve

**Physics Experiments:**
• Include all pointers in the question
• Add the units in the table
• <span class="text-blue-600">Take at least 5 sets of data</span>
• Repeat for each value of independent variable and take average

**Chemistry Experiments:**
• <span class="text-green-600">Taking measurements from burette/measuring cylinder - correct to 3 significant figures</span>
• Underline important information in experiments
• Always draw a smooth line graph`
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
          content: `**Revision Focus:**
• <span class="text-blue-600">Revise the formulas for CPI, PED, PES</span>
• Go over the graphs for:
  - Supply and demand
  - PPCs
  - Currency
  - Firm graphs (fixed costs, average costs)
• Time and solve past papers`
        },
        {
          title: "Paper 2",
          content: `**Answer Format:**
<span class="text-purple-600">4 markers:</span>
• 2 knowledge points
• 2 analysis points

<span class="text-purple-600">8 markers:</span>
• Structure: 2 body paragraphs (for and against)
• Each paragraph: 3-4 knowledge points and 2-3 analysis points

**Additional Tips:**
• Read mark schemes of hard questions
• Revise important notes and keywords
• <span class="text-red-600">Macroeconomic questions - connect points to macroeconomic aims</span>
• 6 and 8 markers - take points from every chapter
• <span class="text-green-600">8 markers - link each point back to the question</span>`
        },
        {
          title: "Time Management",
          content: `**Strategy:**
• Answer sub-questions in reverse order: 8→6→4→2 marks`
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
          content: `**Theory Focus:**
• <span class="text-blue-600">Revise from the mark schemes for key terms</span>
• Practice drawing diagrams for:
  - HTTPS
  - Cyberattacks
  - Blockchain
  - Types of transmission
• <span class="text-purple-600">Practice conversions between denary, hexadecimal and binary</span>`
        },
        {
          title: "Paper 2",
          content: `**15 Marker Tips:**
• <span class="text-red-600">Write the comments as you write the code</span>
• Revise different types of algorithms:
  - Linear search
  - Bubble sort
• <span class="text-green-600">Revise loop structures:</span>
  - For loops
  - While loops
  - Repeat loops
• Revise the syntax for pseudocode statements`
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
