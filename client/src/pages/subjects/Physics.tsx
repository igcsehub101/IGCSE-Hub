import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Physics = () => {
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
          <h1 className="text-3xl font-bold ml-4">Physics Resources</h1>
        </div>
        
        <Separator className="my-6" />
        
        {/* Flashcards */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-yellow-700">Flashcards</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Use these flashcards to memorize key physics concepts, formulas, and principles.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#" className="text-yellow-600 hover:underline">Mechanics and Motion</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Electricity and Magnetism</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Waves and Optics</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Thermal Physics</a></li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Formula Sheet */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-yellow-700">Formula Sheet</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Essential formulas and equations for IGCSE Physics.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#" className="text-yellow-600 hover:underline">Kinematics Equations</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Electrical Circuit Formulas</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Wave Properties and Calculations</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Energy Conversion Equations</a></li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Paper 2 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-yellow-700">Paper 2</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Resources for the multiple-choice paper.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#" className="text-yellow-600 hover:underline">Paper 2 Practice Questions</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Multiple Choice Strategies</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Common Calculation Errors</a></li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Paper 4 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-yellow-700">Paper 4</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Resources for the extended theory paper.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#" className="text-yellow-600 hover:underline">Paper 4 Past Paper Solutions</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Problem-Solving Techniques</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Explanation Templates</a></li>
            </ul>
            
            <h4 className="font-semibold mt-6 mb-3">Topical Resources</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#" className="text-yellow-600 hover:underline">Forces and Motion</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Electricity and Magnetism</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Waves and Light</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Nuclear Physics</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Thermal Physics</a></li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Paper 6 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-yellow-700">Paper 6</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Resources for the alternative to practical paper.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#" className="text-yellow-600 hover:underline">Experiment Design Guidelines</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Data Analysis and Graph Skills</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Error Analysis and Improvements</a></li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Physics;