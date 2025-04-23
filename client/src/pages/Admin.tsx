import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import { apiRequest } from "@/lib/queryClient";
// Import the extended RequestInit type from the queryClient file
import type { ExtendedRequestInit } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Subject } from "@shared/schema";

const Admin = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("resources");
  
  // Form states
  const [resourceForm, setResourceForm] = useState({
    subjectId: "",
    title: "",
    type: "pdf",
    url: "",
    description: ""
  });
  
  const [tipForm, setTipForm] = useState({
    subjectId: "",
    content: ""
  });
  
  const [questionForm, setQuestionForm] = useState({
    subjectId: "",
    title: "",
    question: "",
    solution: "",
    difficulty: "3"
  });
  
  // Fetch subjects for dropdown menus
  const { data: subjects } = useQuery<Subject[]>({
    queryKey: ["/api/subjects"],
  });
  
  // Handle form submission for resources
  const handleResourceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await apiRequest({
        url: "/api/resources",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          subjectId: parseInt(resourceForm.subjectId),
          title: resourceForm.title,
          type: resourceForm.type,
          url: resourceForm.url,
          description: resourceForm.description
        }),
      });
      
      toast({
        title: "Success!",
        description: "Resource added successfully",
      });
      
      // Reset form
      setResourceForm({
        subjectId: "",
        title: "",
        type: "pdf",
        url: "",
        description: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add resource",
        variant: "destructive"
      });
    }
  };
  
  // Handle form submission for last-minute tips
  const handleTipSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await apiRequest("/api/last-minute-tips", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          subjectId: parseInt(tipForm.subjectId),
          content: tipForm.content
        }),
      } as RequestInit);
      
      toast({
        title: "Success!",
        description: "Last-minute tip added successfully",
      });
      
      // Reset form
      setTipForm({
        subjectId: "",
        content: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add last-minute tip",
        variant: "destructive"
      });
    }
  };
  
  // Handle form submission for hard questions
  const handleQuestionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await apiRequest("/api/hard-questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          subjectId: parseInt(questionForm.subjectId),
          title: questionForm.title,
          question: questionForm.question,
          solution: questionForm.solution,
          difficulty: parseInt(questionForm.difficulty)
        }),
      } as RequestInit);
      
      toast({
        title: "Success!",
        description: "Hard question added successfully",
      });
      
      // Reset form
      setQuestionForm({
        subjectId: "",
        title: "",
        question: "",
        solution: "",
        difficulty: "3"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add hard question",
        variant: "destructive"
      });
    }
  };
  
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <Settings className="h-8 w-8 text-gray-700" />
          </div>
          <h2 className="font-bold text-3xl">Admin Dashboard</h2>
          <p className="text-gray-600 mt-2">Add and manage your educational content</p>
        </div>
        
        <Tabs defaultValue="resources" onValueChange={setActiveTab} value={activeTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="tips">Last-Minute Tips</TabsTrigger>
            <TabsTrigger value="questions">Hard Questions</TabsTrigger>
          </TabsList>
          
          {/* Resources Tab */}
          <TabsContent value="resources">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Add New Resource</h3>
              <form onSubmit={handleResourceSubmit}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="resource-subject">Subject</Label>
                    <Select 
                      value={resourceForm.subjectId} 
                      onValueChange={(value) => setResourceForm({...resourceForm, subjectId: value})}
                    >
                      <SelectTrigger id="resource-subject">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        {subjects?.map((subject) => (
                          <SelectItem key={subject.id} value={subject.id.toString()}>
                            {subject.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="resource-title">Title</Label>
                    <Input 
                      id="resource-title" 
                      value={resourceForm.title}
                      onChange={(e) => setResourceForm({...resourceForm, title: e.target.value})}
                      placeholder="e.g., Chemistry Past Paper 2023"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="resource-type">Resource Type</Label>
                    <Select 
                      value={resourceForm.type} 
                      onValueChange={(value) => setResourceForm({...resourceForm, type: value})}
                    >
                      <SelectTrigger id="resource-type">
                        <SelectValue placeholder="Select resource type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pdf">PDF</SelectItem>
                        <SelectItem value="link">Website Link</SelectItem>
                        <SelectItem value="video">Video</SelectItem>
                        <SelectItem value="document">Document</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="resource-url">URL or File Path</Label>
                    <Input 
                      id="resource-url" 
                      value={resourceForm.url}
                      onChange={(e) => setResourceForm({...resourceForm, url: e.target.value})}
                      placeholder="e.g., https://example.com/resource.pdf"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="resource-description">Description (Optional)</Label>
                    <Textarea 
                      id="resource-description" 
                      value={resourceForm.description}
                      onChange={(e) => setResourceForm({...resourceForm, description: e.target.value})}
                      placeholder="Brief description of the resource"
                      rows={3}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">Add Resource</Button>
                </div>
              </form>
            </div>
          </TabsContent>
          
          {/* Last-Minute Tips Tab */}
          <TabsContent value="tips">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Add Last-Minute Tip</h3>
              <form onSubmit={handleTipSubmit}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="tip-subject">Subject</Label>
                    <Select 
                      value={tipForm.subjectId} 
                      onValueChange={(value) => setTipForm({...tipForm, subjectId: value})}
                    >
                      <SelectTrigger id="tip-subject">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        {subjects?.map((subject) => (
                          <SelectItem key={subject.id} value={subject.id.toString()}>
                            {subject.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="tip-content">Tip Content</Label>
                    <Textarea 
                      id="tip-content" 
                      value={tipForm.content}
                      onChange={(e) => setTipForm({...tipForm, content: e.target.value})}
                      placeholder="Enter your last-minute tip or revision note"
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">Add Tip</Button>
                </div>
              </form>
            </div>
          </TabsContent>
          
          {/* Hard Questions Tab */}
          <TabsContent value="questions">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Add Hard Question</h3>
              <form onSubmit={handleQuestionSubmit}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="question-subject">Subject</Label>
                    <Select 
                      value={questionForm.subjectId} 
                      onValueChange={(value) => setQuestionForm({...questionForm, subjectId: value})}
                    >
                      <SelectTrigger id="question-subject">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        {subjects?.map((subject) => (
                          <SelectItem key={subject.id} value={subject.id.toString()}>
                            {subject.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="question-title">Question Title</Label>
                    <Input 
                      id="question-title" 
                      value={questionForm.title}
                      onChange={(e) => setQuestionForm({...questionForm, title: e.target.value})}
                      placeholder="e.g., Integration by Parts"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="question-content">Question</Label>
                    <Textarea 
                      id="question-content" 
                      value={questionForm.question}
                      onChange={(e) => setQuestionForm({...questionForm, question: e.target.value})}
                      placeholder="Enter the full question text"
                      rows={3}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="question-solution">Solution (Optional)</Label>
                    <Textarea 
                      id="question-solution" 
                      value={questionForm.solution}
                      onChange={(e) => setQuestionForm({...questionForm, solution: e.target.value})}
                      placeholder="Enter the solution steps"
                      rows={4}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="question-difficulty">Difficulty (1-5)</Label>
                    <Select 
                      value={questionForm.difficulty} 
                      onValueChange={(value) => setQuestionForm({...questionForm, difficulty: value})}
                    >
                      <SelectTrigger id="question-difficulty">
                        <SelectValue placeholder="Select difficulty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 - Easy</SelectItem>
                        <SelectItem value="2">2 - Moderate</SelectItem>
                        <SelectItem value="3">3 - Challenging</SelectItem>
                        <SelectItem value="4">4 - Difficult</SelectItem>
                        <SelectItem value="5">5 - Very Difficult</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button type="submit" className="w-full">Add Question</Button>
                </div>
              </form>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Admin;