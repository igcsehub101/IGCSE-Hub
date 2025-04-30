
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
              <li><a href="#" className="text-pink-600 hover:underline">Algebraic Formulas</a></li>
              <li><a href="#" className="text-pink-600 hover:underline">Trigonometric Identities</a></li>
              <li><a href="#" className="text-pink-600 hover:underline">Coordinate Geometry Equations</a></li>
              <li><a href="#" className="text-pink-600 hover:underline">Calculus Formulas</a></li>
              <li><a href="#" className="text-pink-600 hover:underline">Statistical Formulas</a></li>
              <li><a href="#" className="text-pink-600 hover:underline">Vectors and Matrices</a></li>
            </ul>
          </CardContent>
        </Card>

        {/* Topical Questions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-pink-700">Topical Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Practice questions organized by topic to help you master specific areas.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <a 
                  href="https://drive.google.com/drive/folders/10_UI_AKmO4O85EeMiZN6xqx0G0sLl1ol?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:underline"
                >
                  Topic-wise Practice Questions
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Mathematics;
