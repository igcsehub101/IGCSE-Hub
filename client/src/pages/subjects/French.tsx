import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const French = () => {
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
          <h1 className="text-3xl font-bold ml-4">French Resources</h1>
        </div>
        
        <Separator className="my-6" />
        
        {/* Vocabulary and Phrases */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-orange-700">Vocabulary and Phrases</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Essential vocabulary and useful phrases for IGCSE French.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="https://drive.google.com/file/d/1SGwND8lKZO8a9lXBEEjByS90MyBDbMP9/view?usp=sharing" className="text-orange-600 hover:underline">Topic Wise Expressions</a></li>
               <li><a href="https://drive.google.com/file/d/1AmKFlq6qnuSzMdEl32ywC3-yrO0DIzHG/view?usp=sharing" className="text-orange-600 hover:underline">Useful Phrases for Writing and Speaking</a></li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Tenses */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-orange-700">Grammar Resources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="https://drive.google.com/file/d/1GdVZVPnY8irtXvoRG5begcJXqj7wj81F/view?usp=sharing" className="text-orange-600 hover:underline">Tenses and modes with examples</a></li>
              <li><a href="https://drive.google.com/file/d/1mVyGpuL0HBn1FMepMsnC96nEhCRgsY-P/view?usp=sharing" className="text-orange-600 hover:underline">Essential verb conjugations</a></li>
              <li><a href="https://francais.lingolia.com/en/grammar/conjugator" className="text-orange-600 hover:underline"> Lingolia: Verb Conjugator </a></li>
            </ul>
          </CardContent>
        </Card>
        
        
      </div>
    </section>
  );
};

export default French;