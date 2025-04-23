import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ComputerScience = () => {
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
          <h1 className="text-3xl font-bold ml-4">Computer Science Resources</h1>
        </div>
        
        <Separator className="my-6" />
        
        {/* 15 Markers */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-yellow-700">15 Markers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Preparation and strategies for the extended response questions worth 15 marks.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#" className="text-yellow-600 hover:underline">Networks and Security</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">System Architecture</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Data Representation</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Databases and SQL</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Ethics and Legal Issues</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Algorithm Design and Efficiency</a></li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Programming Guide */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-yellow-700">Programming Guide</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Comprehensive resources for programming concepts and practice for IGCSE Computer Science.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#" className="text-yellow-600 hover:underline">Python Syntax Reference</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Common Programming Algorithms</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Trace Table Examples</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Pseudocode Practice</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Logic Gates and Boolean Algebra</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Flowchart Design Principles</a></li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ComputerScience;