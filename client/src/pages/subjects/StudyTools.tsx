
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const StudyTools = () => {
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
          <h1 className="text-3xl font-bold ml-4">Study Tools</h1>
        </div>
        
        <Separator className="my-6" />
        
        {/* Flashcard Maker */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-pink-700">Flashcard Maker</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Create and study with digital flashcards.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#" className="text-pink-600 hover:underline">Create New Flashcard Set</a></li>
              <li><a href="#" className="text-pink-600 hover:underline">Study Mode</a></li>
              <li><a href="#" className="text-pink-600 hover:underline">Import/Export Cards</a></li>
            </ul>
          </CardContent>
        </Card>

        {/* Study Schedule */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-pink-700">Study Schedule Planner</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Plan and track your study sessions effectively.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#" className="text-pink-600 hover:underline">Create Study Timetable</a></li>
              <li><a href="#" className="text-pink-600 hover:underline">Progress Tracker</a></li>
              <li><a href="#" className="text-pink-600 hover:underline">Revision Calendar</a></li>
            </ul>
          </CardContent>
        </Card>

        {/* Note Taking */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-pink-700">Note Taking Templates</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Effective note-taking methods and templates.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#" className="text-pink-600 hover:underline">Cornell Method Template</a></li>
              <li><a href="#" className="text-pink-600 hover:underline">Mind Map Creator</a></li>
              <li><a href="#" className="text-pink-600 hover:underline">Summary Generator</a></li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default StudyTools;
