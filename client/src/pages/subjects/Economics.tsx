import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import all diagram images
import ppcDiagram from "@assets/1 PPC Diagram.png";
import economiesOfScale from "@assets/2 Economies of scale.png";
import equilibriumD from "@assets/3 Equilibirum D.jpg";
import indirectTax from "@assets/4 Indirect Tax.png";
import demandDiagram from "@assets/5 Demand Diagram.png";
import supplyDiagrams from "@assets/6 Supply Diagrams.png";
import labourSupply from "@assets/7 Labour Supply.png";
import elasticityOfDemand from "@assets/8 Elasticity of Demand.png";
import costsAndRevenue from "@assets/9 Costs and Revenue.png";

const Economics = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-6 flex items-center">
          <Link href="/resources">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Resources
            </Button>
          </Link>
          <h1 className="text-3xl font-bold ml-4">Economics Resources</h1>
        </div>
        
        <Separator className="my-6" />
        
        {/* Diagrams */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-blue-700">Diagrams</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>Essential diagrams for IGCSE Economics with explanations on how to draw and analyze them.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* PPC Diagram */}
              <div className="border rounded-lg overflow-hidden shadow-sm">
                <div className="bg-blue-50 p-3 border-b">
                  <h3 className="font-medium text-blue-800">Production Possibility Curve (PPC)</h3>
                </div>
                <div className="p-4">
                  <img 
                    src={ppcDiagram} 
                    alt="Production Possibility Curve" 
                    className="w-full rounded-md mb-3" 
                  />
                  <p className="text-sm text-gray-700">Shows maximum production potential and opportunity cost between different goods.</p>
                </div>
              </div>
              
              {/* Economies of Scale */}
              <div className="border rounded-lg overflow-hidden shadow-sm">
                <div className="bg-blue-50 p-3 border-b">
                  <h3 className="font-medium text-blue-800">Economies of Scale</h3>
                </div>
                <div className="p-4">
                  <img 
                    src={economiesOfScale} 
                    alt="Economies of Scale" 
                    className="w-full rounded-md mb-3" 
                  />
                  <p className="text-sm text-gray-700">Illustrates how larger production can lead to lower average costs for firms.</p>
                </div>
              </div>
              
              {/* Equilibrium */}
              <div className="border rounded-lg overflow-hidden shadow-sm">
                <div className="bg-blue-50 p-3 border-b">
                  <h3 className="font-medium text-blue-800">Market Equilibrium</h3>
                </div>
                <div className="p-4">
                  <img 
                    src={equilibriumD} 
                    alt="Market Equilibrium" 
                    className="w-full rounded-md mb-3" 
                  />
                  <p className="text-sm text-gray-700">Shows market clearing price and quantity with excess supply and demand scenarios.</p>
                </div>
              </div>
              
              {/* Indirect Tax */}
              <div className="border rounded-lg overflow-hidden shadow-sm">
                <div className="bg-blue-50 p-3 border-b">
                  <h3 className="font-medium text-blue-800">Indirect Taxation</h3>
                </div>
                <div className="p-4">
                  <img 
                    src={indirectTax} 
                    alt="Indirect Taxation" 
                    className="w-full rounded-md mb-3" 
                  />
                  <p className="text-sm text-gray-700">Demonstrates the effects of an indirect tax on market prices and burden distribution.</p>
                </div>
              </div>
              
              {/* Demand Diagram */}
              <div className="border rounded-lg overflow-hidden shadow-sm">
                <div className="bg-blue-50 p-3 border-b">
                  <h3 className="font-medium text-blue-800">Demand Curve</h3>
                </div>
                <div className="p-4">
                  <img 
                    src={demandDiagram} 
                    alt="Demand Curve" 
                    className="w-full rounded-md mb-3" 
                  />
                  <p className="text-sm text-gray-700">Illustrates movements along and shifts of the demand curve in different scenarios.</p>
                </div>
              </div>
              
              {/* Supply Diagrams */}
              <div className="border rounded-lg overflow-hidden shadow-sm">
                <div className="bg-blue-50 p-3 border-b">
                  <h3 className="font-medium text-blue-800">Supply Curve</h3>
                </div>
                <div className="p-4">
                  <img 
                    src={supplyDiagrams} 
                    alt="Supply Curve" 
                    className="w-full rounded-md mb-3" 
                  />
                  <p className="text-sm text-gray-700">Demonstrates extensions, contractions, and shifts in the supply curve.</p>
                </div>
              </div>
              
              {/* Labour Supply */}
              <div className="border rounded-lg overflow-hidden shadow-sm">
                <div className="bg-blue-50 p-3 border-b">
                  <h3 className="font-medium text-blue-800">Labour Supply</h3>
                </div>
                <div className="p-4">
                  <img 
                    src={labourSupply} 
                    alt="Labour Supply" 
                    className="w-full rounded-md mb-3" 
                  />
                  <p className="text-sm text-gray-700">Shows how labour supply changes with different wage rates, including income effects.</p>
                </div>
              </div>
              
              {/* Elasticity of Demand */}
              <div className="border rounded-lg overflow-hidden shadow-sm">
                <div className="bg-blue-50 p-3 border-b">
                  <h3 className="font-medium text-blue-800">Elasticity of Demand</h3>
                </div>
                <div className="p-4">
                  <img 
                    src={elasticityOfDemand} 
                    alt="Elasticity of Demand" 
                    className="w-full rounded-md mb-3" 
                  />
                  <p className="text-sm text-gray-700">Different types of price elasticity from perfectly elastic to perfectly inelastic.</p>
                </div>
              </div>
              
              {/* Costs and Revenue */}
              <div className="border rounded-lg overflow-hidden shadow-sm">
                <div className="bg-blue-50 p-3 border-b">
                  <h3 className="font-medium text-blue-800">Costs & Revenue</h3>
                </div>
                <div className="p-4">
                  <img 
                    src={costsAndRevenue} 
                    alt="Costs and Revenue" 
                    className="w-full rounded-md mb-3" 
                  />
                  <p className="text-sm text-gray-700">Important cost concepts including fixed, variable, and average costs related to output.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Paper 2 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-blue-700">Exam Practice Materials</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Essential resources to help prepare for your Economics examination.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-blue-700 mb-3">Paper 2 Resources</h3>
                <ul className="list-disc pl-5 space-y-3">
                  <li>
                    <a 
                      href="https://drive.google.com/file/d/1v_UUGqbqWeQvkGDdy4WPw-iSDdQKLtVl/view?usp=drive_link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Example Candidate Responses
                    </a>
                    <p className="text-sm text-gray-600 mt-1">View real examples of candidate answers with examiner comments.</p>
                  </li>
                  <li>
                    <a 
                      href="https://docs.google.com/spreadsheets/d/1JLQA8F3Nw-qEiplW9leu4bl0vOLmOhOJVs3y4B7sbEI/edit?usp=drive_link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Common Definition Questions
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Comprehensive list of key definitions that frequently appear in exams.</p>
                  </li>
                  <li>
                    <a 
                      href="https://drive.google.com/file/d/1DjhTj8xBNCHzLYJAyylStnV3L2EzqVvo/view?usp=drive_link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Topical Economics Questions
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Questions organized by topic to practice specific areas of the syllabus.</p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-blue-700 mb-3">Practice Questions</h3>
                <ul className="list-disc pl-5 space-y-3">
                  <li>
                    <a 
                      href="https://drive.google.com/file/d/1PCcDzb2Nfm2NkmsF1Baag4Iww8OYbiPK/view?usp=drive_link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Hard Paper 2 Questions
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Challenging structured questions to test and develop your understanding.</p>
                  </li>
                  <li>
                    <a 
                      href="https://drive.google.com/file/d/1D5iWrhT0a29DtFSZwy2fZ4TMXcUbUJr5/view?usp=drive_link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Hard Paper 1 MCQs
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Difficult multiple-choice questions to sharpen your exam technique.</p>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Economics;