import { Link } from "wouter";
import { ArrowLeft, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SiYoutube } from "react-icons/si";

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
        
        {/* Paper 1 Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-green-700">Paper 1: Directed Writing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>Essential formats and writing tips for the directed writing section of Paper 1.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-green-600 mb-2">Types of Directed Writing</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Letter Writing</li>
                    <li>Interview Writing</li>
                    <li>Speech</li>
                    <li>Journal Entry</li>
                    <li>Newspaper Report</li>
                    <li>Formal Report</li>
                    <li>Magazine Article</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg text-green-600 mb-2">Formal Report Structure</h3>
                  <h4 className="font-medium text-green-500 mb-1">Subheadings:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Introduction</li>
                    <li>Background</li>
                    <li>Current situation</li>
                    <li>Evaluation</li>
                    <li>Recommendation</li>
                    <li>Conclusion</li>
                  </ul>
                  <h4 className="font-medium text-green-500 mt-3 mb-1">Introduction:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>This report will outline the details</li>
                    <li>This report examines/aims to analyse</li>
                    <li>It provides a comprehensive analysis</li>
                  </ul>
                  <h4 className="font-medium text-green-500 mt-3 mb-1">Body:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>It was made clear/evident</li>
                    <li>Upon Inspection</li>
                    <li>It was noted</li>
                    <li>____ must start making the necessary steps</li>
                    <li>____ reported/highlighted/remarked/commented</li>
                    <li>Taking all factors into account</li>
                    <li>____ has proven problematic</li>
                  </ul>
                  <h4 className="font-medium text-green-500 mt-3 mb-1">Recommendation:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>The above issues are easily remedied by making the following changes</li>
                    <li>To address __ issue</li>
                  </ul>
                  <h4 className="font-medium text-green-500 mt-3 mb-1">Transitions:</h4>
                  <p className="text-gray-700 pl-5">However, therefore, hence, likewise, similarly, consequently</p>
                </div>
              </div>
              
              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-green-600 mb-2">Letter Writing</h3>
                  <h4 className="font-medium text-green-500 mb-1">Formal/Informal Structure:</h4>
                  <ol className="list-decimal pl-5 space-y-1 text-gray-700">
                    <li><span className="font-medium">Start with:</span> Formal: Respected + Mr/Mrs, Informal: Dear + ___</li>
                    <li>Background (why you're writing)</li>
                    <li>Details of current situation</li>
                    <li>Support your claim</li>
                    <li>Future action</li>
                    <li><span className="font-medium">Signing off:</span> yours sincerely/yours faithfully/regards/yours lovingly</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg text-green-600 mb-2">Magazine Article</h3>
                  <ol className="list-decimal pl-5 space-y-1 text-gray-700">
                    <li>Catchy headline</li>
                    <li>Vocabulary suiting the context</li>
                    <li>Narrative/persuasive approach</li>
                    <li>Bold letters/subheading</li>
                    <li>Connectives</li>
                    <li>Rhetorical/Exclamatory/facts/opinions</li>
                    <li>Punctuation: colon, semicolon, hyphen</li>
                    <li>Formal Register</li>
                    <li>Shocking ending</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg text-green-600 mb-2">General Tips and Techniques</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Repetition</li>
                    <li>Idioms</li>
                    <li>Rhetorical questions</li>
                    <li>Strong adverbs: strongly, unfortunately, personally, surprisingly, luckily, obviously, strangely, oddly</li>
                    <li>Figurative language - simile, metaphor, alliteration</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-md p-4 mt-2">
              <h3 className="font-semibold text-lg text-green-600 mb-2">Interview Writing</h3>
              <div className="space-y-3">
                <p className="text-gray-700"><span className="font-medium">Format Example:</span></p>
                <div className="pl-4 border-l-2 border-green-300">
                  <p className="text-gray-700"><span className="font-medium">Interview:</span> How did she react?</p>
                  <p className="text-gray-700"><span className="font-medium">Grandfather:</span> Oh she was…</p>
                </div>
                
                <p className="text-gray-700 mt-3"><span className="font-medium">Tips and Tricks:</span></p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Emotions in brackets: [laughs][claps][nods]</li>
                  <li>Spoken language: Well, I guess, To be honest</li>
                  <li>Use punctuation: (..pause)</li>
                  <li>Personal pronoun: Have interviewee address interviewer directly</li>
                </ul>
                
                <p className="text-gray-700 mt-3"><span className="font-medium">Useful interview phrases:</span></p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>For those turning in, I want you to consider…</li>
                  <li>Listeners, keep this in mind as we discuss…</li>
                  <li>To all of you out there, I encourage you to think about…</li>
                  <li>If you're listening right now, I want you to imagine…</li>
                  <li>That's an excellent question, and here's my take on it…</li>
                  <li>To answer your question, let me explain…</li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg text-green-600 mb-2">Journal Entry</h3>
                <ol className="list-decimal pl-5 space-y-1 text-gray-700">
                  <li>Start with Dear Journal and date on left hand side</li>
                  <li>Introduction - background</li>
                  <li>Sign off with name</li>
                </ol>
                <p className="text-gray-700 mt-3"><span className="font-medium">Pointers:</span></p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>More formal than diary entry</li>
                  <li>Can be written for wider audience</li>
                  <li>First person</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg text-green-600 mb-2">Newspaper Report</h3>
                <p className="text-gray-700"><span className="font-medium">Structure:</span></p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Short and snappy headline - alliteration/powerful vocab</li>
                  <li>Summary/Introduction</li>
                  <li>Background that led to the event</li>
                  <li>Return to the immediate present</li>
                  <li>Response of the people</li>
                  <li>Future course of action</li>
                </ul>
                <p className="text-gray-700 mt-3"><span className="font-medium">Tips and tricks:</span></p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Passive verbs: claim/suspected/known/hope/reported</li>
                  <li>Use quotations/reported speech for responses</li>
                  <li>According to/ A family member remarked that...</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-md p-4 mt-2">
              <h3 className="font-semibold text-lg text-green-600 mb-2">Speech Writing</h3>
              <p className="text-gray-700 mb-2"><span className="font-medium">Features of a speech:</span></p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Use anecdotes</li>
                <li>Rhetorical questions</li>
                <li>A RIPE FOREST (alliteration, repetition, imperative, personal pronouns, emotive language, facts, opinions, rhetorical questions)</li>
                <li>Conclusion (I want to thank you all for listening to me)</li>
                <li>End with a call to action/use imperative verbs/ask rhetorical questions</li>
              </ul>
              
              <div className="mt-3 space-y-2">
                <p className="text-gray-700"><span className="font-medium">1) Introduction</span> - to establish voice and purpose:</p>
                <ul className="list-disc pl-8 text-gray-700">
                  <li>Hook to grab attention - introduce yourself</li>
                  <li>'Wow, what an amazing turnout! It's so nice to see…'</li>
                  <li>Counter argument - "some think that x, but however…"</li>
                </ul>
              </div>
              
              <div className="mt-3 space-y-2">
                <p className="text-gray-700"><span className="font-medium">2) Body:</span></p>
                <ul className="list-disc pl-8 text-gray-700">
                  <li>First of all, well, plus, now, you see</li>
                  <li>Repetition</li>
                  <li>Clusters of three/lists of three</li>
                  <li>Contrast</li>
                  <li>Figurative language like similes + metaphors</li>
                </ul>
              </div>
              
              <div className="mt-3 space-y-2">
                <p className="text-gray-700"><span className="font-medium">3) Conclusion:</span></p>
                <ul className="list-disc pl-8 text-gray-700">
                  <li>"It's been a privilege to speak to such an attentive group"</li>
                  <li>"So, there you have it guys! If you have any questions feel free to ask, I'll be happy to answer them"</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Paper 2 Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-green-700">Paper 2: Descriptive Writing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Format and structure guide for descriptive writing in Paper 2.</p>
            
            <div className="bg-green-50 border border-green-200 rounded-md p-5">
              <h3 className="font-semibold text-lg text-green-600 mb-4">Descriptive Writing Format</h3>
              <div className="space-y-6">
                <div className="flex">
                  <div className="w-1/4 font-medium text-green-700">Step 1:</div>
                  <div className="w-3/4">
                    <p className="font-medium text-gray-800">Zoom out - long shot</p>
                    <p className="text-gray-700">Describe the whole scene in detail and mention something that you will return to at the end of your description.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-1/4 font-medium text-green-700">Step 2:</div>
                  <div className="w-3/4">
                    <p className="font-medium text-gray-800">Zoom in</p>
                    <p className="text-gray-700">Pick one detail, make it symbolic, and describe it in depth. This could be a good opportunity for an extended metaphor.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-1/4 font-medium text-green-700">Step 3:</div>
                  <div className="w-3/4">
                    <p className="font-medium text-gray-800">Change perspective</p>
                    <p className="text-gray-700">Imagine the scene through the eyes of somebody who is there—what are they feeling?</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-1/4 font-medium text-green-700">Step 4:</div>
                  <div className="w-3/4">
                    <p className="font-medium text-gray-800">Zoom in again</p>
                    <p className="text-gray-700">Pick another symbolic detail to describe in depth. Pick something contrasting to your earlier symbol.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-1/4 font-medium text-green-700">Step 5:</div>
                  <div className="w-3/4">
                    <p className="font-medium text-gray-800">Emotional ending</p>
                    <p className="text-gray-700">Finally, circle back to something mentioned in your opening paragraph, highlighting the emotional atmosphere.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* YouTube Channels Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-green-700">Helpful YouTube Channels</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Quality YouTube channels with helpful IGCSE English Language content.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <a 
                href="https://www.youtube.com/@Taughtly/videos" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-4 rounded-md border border-green-200 hover:bg-green-50 transition-colors"
              >
                <SiYoutube className="text-red-600 text-3xl flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-green-700">Taughtly</h3>
                  <p className="text-sm text-gray-600">Comprehensive IGCSE English tutorials and exam strategies</p>
                </div>
              </a>
              
              <a 
                href="https://www.youtube.com/@IGCSESUCCESS" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-4 rounded-md border border-green-200 hover:bg-green-50 transition-colors"
              >
                <SiYoutube className="text-red-600 text-3xl flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-green-700">IGCSE SUCCESS</h3>
                  <p className="text-sm text-gray-600">Focused resources for IGCSE English examination preparation</p>
                </div>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EnglishLanguage;