import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Mathematics = () => {
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
          <h1 className="text-3xl font-bold ml-4">Mathematics Resources</h1>
        </div>
        
        <Separator className="my-6" />
        
        {/* Formula Sheet */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-pink-700">Formula Sheet</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Essential formulas and equations for IGCSE Additional/Extended Mathematics.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="" className="text-pink-600 hover:underline">Algebraic Formulas</a></li>
              <li><a href="#" className="text-pink-600 hover:underline">Trigonometric Identities</a></li>
              <li><a href="#" className="text-pink-600 hover:underline">Coordinate Geometry Equations</a></li>
              <li><a href="#" className="text-pink-600 hover:underline">Calculus Formulas</a></li>
              <li><a href="#" className="text-pink-600 hover:underline">Statistical Formulas</a></li>
              <li><a href="#" className="text-pink-600 hover:underline">Vectors and Matrices</a></li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Useful Links */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-pink-700">Links</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Helpful websites and resources for mathematics study.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#" className="text-pink-600 hover:underline">Topic-by-Topic Practice Questions</a></li>
              <li><a href="#" className="text-pink-600 hover:underline">Interactive Graph Plotter</a></li>
              <li><a href="#" className="text-pink-600 hover:underline">Step-by-Step Problem Solver</a></li>
              <li><a href="#" className="text-pink-600 hover:underline">Video Tutorials for Complex Topics</a></li>
              <li><a href="#" className="text-pink-600 hover:underline">Past Paper Solutions with Explanations</a></li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Mathematics;