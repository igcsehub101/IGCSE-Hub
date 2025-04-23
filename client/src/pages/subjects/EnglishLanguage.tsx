import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const EnglishLanguage = () => {
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
          <h1 className="text-3xl font-bold ml-4">English Language Resources</h1>
        </div>
        
        <Separator className="my-6" />
        
        {/* Writing Guides */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-green-700">Writing Guides</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Templates and strategies for different types of writing required in IGCSE English Language.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#" className="text-green-600 hover:underline">Descriptive Writing Techniques</a></li>
              <li><a href="#" className="text-green-600 hover:underline">Narrative Writing Structure</a></li>
              <li><a href="#" className="text-green-600 hover:underline">Persuasive Writing Guide</a></li>
              <li><a href="#" className="text-green-600 hover:underline">Letter and Email Formats</a></li>
              <li><a href="#" className="text-green-600 hover:underline">Report and Speech Writing</a></li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Comprehension Skills */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-green-700">Comprehension Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Techniques to improve reading comprehension and analysis for Paper 2.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#" className="text-green-600 hover:underline">Identifying Writer's Purpose and Effects</a></li>
              <li><a href="#" className="text-green-600 hover:underline">Analyzing Language Features</a></li>
              <li><a href="#" className="text-green-600 hover:underline">Summarizing Key Points</a></li>
              <li><a href="#" className="text-green-600 hover:underline">Comparing and Contrasting Texts</a></li>
              <li><a href="#" className="text-green-600 hover:underline">Question-Specific Answer Frameworks</a></li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Vocabulary Building */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-green-700">Vocabulary Building</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Resources to expand your vocabulary and use sophisticated language in your writing.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#" className="text-green-600 hover:underline">Advanced Adjectives and Adverbs</a></li>
              <li><a href="#" className="text-green-600 hover:underline">Literary Devices and Figurative Language</a></li>
              <li><a href="#" className="text-green-600 hover:underline">Sentence Starters and Connectives</a></li>
              <li><a href="#" className="text-green-600 hover:underline">Emotion and Sensory Language</a></li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EnglishLanguage;