import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  title: string;
  bgColor?: string;
  children: React.ReactNode;
}

const AccordionItem = ({ 
  title, 
  bgColor = "bg-[hsl(var(--pastel-green))]", 
  children 
}: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div 
        className={`${bgColor} p-4 flex justify-between items-center cursor-pointer`}
        onClick={toggleAccordion}
      >
        <h3 className="font-semibold text-lg">{title}</h3>
        <ChevronDown 
          className={`h-5 w-5 text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </div>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[1000px] p-4' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default AccordionItem;
