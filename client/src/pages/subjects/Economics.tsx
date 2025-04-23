import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
          <CardContent className="space-y-4">
            <p>Essential diagrams for IGCSE Economics with explanations on how to draw and analyze them.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#" className="text-blue-600 hover:underline">Supply and Demand Curves</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Production Possibility Curves</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Cost Curves</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Market Structures Comparison</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Circular Flow of Income</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Exchange Rate Mechanisms</a></li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Paper 2 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-blue-700">Paper 2</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Strategies and resources for the structured questions paper.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#" className="text-blue-600 hover:underline">Data Response Question Techniques</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Essay Structure Templates</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Evaluation Point Examples</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Case Study Analysis Framework</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Recent Economic Issues for Examples</a></li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Economics;