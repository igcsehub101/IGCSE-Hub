import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Biology = () => {
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
          <h1 className="text-3xl font-bold ml-4">Biology Resources</h1>
        </div>
        
        <Separator className="my-6" />
        
        
        
        {/* Formula Sheet */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-green-700">Formula Sheet</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Essential formulas and equations for IGCSE Biology.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#" className="text-green-600 hover:underline">Magnification Calculations</a></li>
              <li><a href="#" className="text-green-600 hover:underline">Respiration and Photosynthesis Equations</a></li>
              <li><a href="#" className="text-green-600 hover:underline">Genetics Probability Formulas</a></li>
              <li><a href="#" className="text-green-600 hover:underline">Food Chain Energy Transfer</a></li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Paper 2 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-green-700">Paper 2</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Resources for the multiple-choice paper.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#" className="text-green-600 hover:underline">Paper 2 Practice Questions</a></li>
              <li><a href="#" className="text-green-600 hover:underline">Multiple Choice Strategies</a></li>
              <li><a href="#" className="text-green-600 hover:underline">Common Misconceptions</a></li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Paper 4 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-green-700">Paper 4</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Resources for the extended theory paper.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="https://drive.google.com/drive/u/4/folders/1nCEUmEgg0RIFWboI0i1NcOSB9rBCcvQt" className="text-green-600 hover:underline">Paper 4 Past Paper Solutions</a></li>
              <li><a href="#" className="text-green-600 hover:underline">Long Answer Question Templates</a></li>
              <li><a href="#" className="text-green-600 hover:underline">Diagram Drawing Guidelines</a></li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Paper 6 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-green-700">Paper 6</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Resources for the alternative to practical paper.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#" className="text-green-600 hover:underline">Experiment Design Guidelines</a></li>
              <li><a href="#" className="text-green-600 hover:underline">Data Analysis and Graph Skills</a></li>
              <li><a href="#" className="text-green-600 hover:underline">Microscopy Techniques</a></li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Biology;