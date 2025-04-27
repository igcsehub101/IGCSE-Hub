import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Chemistry = () => {
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
          <h1 className="text-3xl font-bold ml-4">Chemistry Resources</h1>
        </div>
        
        <Separator className="my-6" />
        
        
        
        {/* Formula Sheet */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-blue-700">Formula Sheet</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Essential formulas and equations for IGCSE Chemistry.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#" className="text-blue-600 hover:underline">Moles and Stoichiometry Formulas</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Gas Laws and Calculations</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Electrolysis Equations</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Acid-Base Reactions</a></li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Paper 2 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-blue-700">Paper 2</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Resources for the multiple-choice paper.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#" className="text-blue-600 hover:underline">Paper 2 Practice Questions</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Multiple Choice Strategies</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Common Misconceptions</a></li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Paper 4 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-blue-700">Paper 4</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Resources for the extended theory paper.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#" className="text-blue-600 hover:underline">Paper 4 Past Paper Solutions</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Long Answer Question Templates</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Exam Technique Guide</a></li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Paper 6 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-blue-700">Paper 6</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Resources for the alternative to practical paper.</p>

            <div className="space-y-4">
              <details className="bg-blue-50 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer">Common ATP Questions</summary>
                <div className="mt-4 space-y-6">
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-semibold mb-2">Food Tests</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Starch: Iodine solution
                       → Brown to blue/black</li>
                      <li>Proteins: Biuret reagent
                       → Blue to purple</li>
                      <li>Reducing sugars: Heat Benedict’s after adding</li>
                        <li>Fats (Emulsion test):
                        Crush food sample with mortar and pestle, Put in a test tube, Add ethanol and shake. Add distilled water. Milky white emulsion seen.


</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-semibold mb-2">Trial Reading</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>To check if the dependent variable is measurable</li>
                      <li>Ensures the range of distance (d) and time (t) values is suitable</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-semibold mb-2">Load and Scale</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Measure the distance from the rule to the bench at both ends and adjust until equal</li>
                      <li>Suspend the load using a loop of thread for accurate placement</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-semibold mb-2">Common Errors</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Metre rule may not be uniform</li>
                      <li>Test load might not be exactly × N</li>
                      <li>Top pan balance accurate only to the nearest gram</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-semibold mb-2">Temperature Measurements</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Line of sight must be perpendicular to the thermometer scale</li>
                      <li>Stir the water to ensure uniform temperature</li>
                      <li>Keep factors constant: volume, initial temperature, container dimensions, room temperature</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-semibold mb-2">Ray Tracing</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Use thin pins and pencils</li>
                      <li>Ensure large pin separation</li>
                      <li>Keep pins vertical</li>
                      <li>View from bottom of pins</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-semibold mb-2">Electricity Experiments</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Check crocodile clip connections</li>
                      <li>Use appropriate scales for wire measurements</li>
                      <li>Use variable resistors for continuous value adjustment</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-semibold mb-2">Lens Experiments</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Use a dark room</li>
                      <li>Ensure lens, object, and screen are perpendicular to bench</li>
                      <li>Clamp components securely</li>
                      <li>Use translucent screen</li>
                    </ul>
                  </div>
                </div>
              </details>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Chemistry;