import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Physics = () => {
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
          <h1 className="text-3xl font-bold ml-4">Physics Resources</h1>
        </div>
        
        <Separator className="my-6" />
        
        {/* Flashcards */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-yellow-700">Flashcards</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Use these flashcards to memorize key physics concepts, formulas, and principles.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#" className="text-yellow-600 hover:underline">Mechanics and Motion</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Electricity and Magnetism</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Waves and Optics</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Thermal Physics</a></li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Formula Sheet */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-yellow-700">Formula Sheet</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Essential formulas and equations for IGCSE Physics.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#" className="text-yellow-600 hover:underline">Kinematics Equations</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Electrical Circuit Formulas</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Wave Properties and Calculations</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Energy Conversion Equations</a></li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Paper 2 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-yellow-700">Paper 2</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Resources for the multiple-choice paper.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#" className="text-yellow-600 hover:underline">Paper 2 Practice Questions</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Multiple Choice Strategies</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Common Calculation Errors</a></li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Paper 4 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-yellow-700">Paper 4</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Resources for the extended theory paper.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#" className="text-yellow-600 hover:underline">Paper 4 Past Paper Solutions</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Problem-Solving Techniques</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Explanation Templates</a></li>
            </ul>
            
            <h4 className="font-semibold mt-6 mb-3">Topical Questions</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="https://drive.google.com/file/d/1eE0k1fqchSu6eOFHSORhRg7D6U6KiTyn/view?usp=sharing" className="text-yellow-600 hover:underline">Electricity</a></li>
      
              <li><a href="https://drive.google.com/file/d/1q-NIQx6W1__BnH8eIbHF4KBnSreySGLc/view?usp=drive_link" className="text-yellow-600 hover:underline">Light diagrams</a></li>
              <li><a href="https://drive.google.com/file/d/1F8EwU_ipzWBlxNFn3NlV4vcoY9bNGviv/view?usp=drive_link" className="text-yellow-600 hover:underline">Wavefront diagrams </a></li>
              <li><a href="https://drive.google.com/file/d/1S9y4xdfBpBhe7J4xvjHeEauxTjnXiEaU/view?usp=drive_link" className="text-yellow-600 hover:underline">Vectors diagrams</a></li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Paper 6 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-yellow-700">Paper 6</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Resources for the alternative to practical paper.</p>
            
            <div className="space-y-4">
              <details className="bg-yellow-50 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer">Common ATP Questions</summary>
                <div className="mt-4 space-y-6">
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-semibold mb-2">Taking Multiple Readings</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Reduces the effect of human reaction time error</li>
                      <li>Spreads error over a longer duration</li>
                      <li>Increases accuracy by taking an average</li>
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

              <details className="bg-yellow-50 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer">Upload Your Notes</summary>
                <div className="mt-4">
                  <input 
                    type="file" 
                    accept=".pdf"
                    className="block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-yellow-50 file:text-yellow-700
                      hover:file:bg-yellow-100"
                  />
                  <p className="text-sm text-gray-500 mt-2">Upload your PDF notes to keep them organized with your other resources.</p>
                </div>
              </details>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Physics;