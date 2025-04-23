
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
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
          <h1 className="text-3xl font-bold ml-4">General Resources</h1>
        </div>
        
        <Separator className="my-6" />
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-pink-700">Study Planners</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Tools to help organize your study schedule and track progress.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#" className="text-pink-600 hover:underline">Weekly Study Planner Template</a></li>
              <li><a href="#" className="text-pink-600 hover:underline">Exam Countdown Calendar</a></li>
              <li><a href="#" className="text-pink-600 hover:underline">Subject Progress Tracker</a></li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-blue-700">Note-Taking Tools</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Resources for effective note-taking and organization.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#" className="text-blue-600 hover:underline">Cornell Method Template</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Mind Map Templates</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Digital Note Organization Guide</a></li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-green-700">Study Techniques</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Proven methods to enhance your learning and retention.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#" className="text-green-600 hover:underline">Pomodoro Timer</a></li>
              <li><a href="#" className="text-green-600 hover:underline">Active Recall Techniques</a></li>
              <li><a href="#" className="text-green-600 hover:underline">Spaced Repetition Guide</a></li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default StudyTools;
