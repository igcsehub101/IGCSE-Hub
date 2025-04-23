import { HelpCircle } from "lucide-react";
import { 
  FlaskConical, 
  Zap, 
  Calculator, 
  TrendingUp, 
  Laptop, 
  Beaker, 
  Microscope, 
  Languages, 
  BookOpen 
} from "lucide-react";
import QuestionCard from "@/components/QuestionCard";
import { Button } from "@/components/ui/button";

const HardQuestions = () => {
  const hardQuestions = [
    {
      subject: "Chemistry",
      icon: FlaskConical,
      color: "red",
      title: "Equilibrium Calculations",
      description: "A common challenging topic in advanced chemistry.",
      question: "For the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g), Kc = 4.2 × 10⁻¹ at 400°C. Calculate the equilibrium concentrations...",
      downloadUrl: "https://drive.google.com/drive/folders/172MYjdLIMvpE6F4pKySAieo2m4o5494f?usp=drive_link",
    },
    {
      subject: "Physics",
      icon: Zap,
      color: "yellow",
      title: "Circular Motion",
      description: "Questions combining multiple concepts in mechanics.",
      question: "A satellite of mass 250 kg orbits the Earth at a height of 35,800 km. Calculate the centripetal force and orbital period...",
      downloadUrl: "#physics-hard-questions",
    },
    {
      subject: "Additional Mathematics",
      icon: Calculator,
      color: "blue",
      title: "Integration by Parts",
      description: "Complex integration problems from past papers.",
      question: "Evaluate ∫ x² ln(x) dx, showing all working and explaining each step of the integration by parts method.",
      downloadUrl: "#math-hard-questions",
    },
    {
      subject: "Computer Science",
      icon: Laptop,
      color: "green",
      title: "Algorithm Efficiency",
      description: "Questions on Big O notation and algorithm optimization.",
      question: "For the following sorting algorithm, determine the time complexity in Big O notation and explain how you would optimize it...",
      downloadUrl: "#cs-hard-questions",
    },
    {
      subject: "Biology",
      icon: Microscope,
      color: "pink",
      title: "Genetics Problems",
      description: "Complex inheritance and genetic cross problems.",
      question: "In fruit flies, the gene for eye color has multiple alleles. If red eyes (R) are dominant to white eyes (r), predict the genotypic and phenotypic ratios...",
      downloadUrl: "#biology-hard-questions",
    },
    {
      subject: "Extended Mathematics",
      icon: Calculator,
      color: "purple",
      title: "Vector Calculus",
      description: "Advanced problems involving vector operations.",
      question: "Given vector fields F(x,y,z) = (y²z, xyz, x²y) and G(x,y,z) = (x³, y³, z³), calculate the curl of F and divergence of G...",
      downloadUrl: "#ext-math-hard-questions",
    },
    {
      subject: "French",
      icon: Languages,
      color: "orange",
      title: "Advanced Translation",
      description: "Complex passages with idiomatic expressions.",
      question: "Translate the following text into French, paying particular attention to the subjunctive mood and idiomatic expressions...",
      downloadUrl: "#french-hard-questions",
    },
    {
      subject: "Economics",
      icon: TrendingUp,
      color: "blue",
      title: "Economic Analysis",
      description: "Data interpretation and policy evaluation.",
      question: "Analyze the following economic data for Country X and evaluate the effectiveness of the government's fiscal policy measures in addressing inflation...",
      downloadUrl: "#economics-hard-questions",
    },
    {
      subject: "English Language",
      icon: BookOpen,
      color: "green",
      title: "Critical Analysis",
      description: "In-depth textual analysis and evaluation.",
      question: "Compare and contrast the narrative techniques used in the following two passages, evaluating their effectiveness in conveying the authors' intentions...",
      downloadUrl: "#english-hard-questions",
    },
    {
      subject: "Organic Chemistry",
      icon: Beaker,
      color: "red",
      title: "Reaction Mechanisms",
      description: "Challenging multi-step synthesis problems.",
      question: "Propose a detailed mechanism for the following reaction and suggest reagents for the synthesis of compound X from benzene in no more than 4 steps...",
      downloadUrl: "#organic-chem-hard-questions",
    },
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-[hsl(var(--pastel-pink))] rounded-full flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="h-8 w-8 text-pink-700" />
          </div>
          <h2 className="font-bold text-3xl">Hard Questions</h2>
          <p className="text-gray-600 mt-2">Challenging questions with detailed solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {hardQuestions.slice(0, 8).map((question, index) => (
            <QuestionCard
              key={index}
              subject={question.subject}
              icon={question.icon}
              color={question.color as any}
              title={question.title}
              description={question.description}
              question={question.question}
              downloadUrl={question.downloadUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HardQuestions;
