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
              <li><a href="#" className="text-orange-600 hover:underline">Daily Life Vocabulary</a></li>
              <li><a href="#" className="text-orange-600 hover:underline">Travel and Tourism Phrases</a></li>
              <li><a href="#" className="text-orange-600 hover:underline">School and Education Terms</a></li>
              <li><a href="#" className="text-orange-600 hover:underline">Family and Relationships Vocabulary</a></li>
              <li><a href="#" className="text-orange-600 hover:underline">Food and Dining Expressions</a></li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Speaking Tips */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-orange-700">Speaking Tips</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Strategies and resources to improve your French speaking skills.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#" className="text-orange-600 hover:underline">Oral Exam Preparation Guide</a></li>
              <li><a href="#" className="text-orange-600 hover:underline">Pronunciation Practice</a></li>
              <li><a href="#" className="text-orange-600 hover:underline">Role-Play Scenarios</a></li>
              <li><a href="#" className="text-orange-600 hover:underline">Conversation Starters and Responses</a></li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Grammar Resources */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-orange-700">Grammar Resources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Comprehensive guides to French grammar for IGCSE students.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#" className="text-orange-600 hover:underline">Verb Conjugation Tables</a></li>
              <li><a href="#" className="text-orange-600 hover:underline">Tenses Overview (Present, Past, Future)</a></li>
              <li><a href="#" className="text-orange-600 hover:underline">Articles and Prepositions Guide</a></li>
              <li><a href="#" className="text-orange-600 hover:underline">Adjective Agreement Rules</a></li>
              <li><a href="#" className="text-orange-600 hover:underline">Question Formation</a></li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default French;