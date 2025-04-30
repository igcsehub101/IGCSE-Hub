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
              <li><a href="https://quizlet.com/ruthhelenafox/folders/cie-igcse-chemistry-06200917/sets" className="text-blue-600 hover:underline">Quizlet - Topic Wise Flashcards</a></li>

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
              <li><a href="https://drive.google.com/drive/folders/1nDiYbQoqKujvqVin_ENK4UzUZxy3gXCJ" className="text-blue-600 hover:underline">Year-wise Hard P2 Questions by Fruitadella</a></li>
              <li><a href="https://drive.google.com/drive/u/4/folders/1IzqljJFYCRoCe7U7diylSVq_qvJZwMXC" className="text-blue-600 hover:underline">Other hard MCQS with Explanatios </a></li>
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
                    <h4 className="font-semibold mb-2">Important Points to Remember</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Waste gases like methane should not be released into atmosphere because they are flammable</li>
                      <li>Wrapping beaker in cotton wool after heating improves accuracy by:
                        <ul className="list-circle pl-5">
                          <li>Providing insulation/reducing heat loss</li>
                          <li>Keeping temperature more constant</li>
                        </ul>
                      </li>
                      <li>Burette advantages:
                        <ul className="list-circle pl-5">
                          <li>More accurate than measuring cylinder for volume</li>
                          <li>Can measure variable volumes unlike pipettes</li>
                        </ul>
                      </li>
                      <li>Using larger beaker (250cm³ vs 100cm³) results in shorter times due to less depth to look through</li>
                      <li>Flame test procedure:
                        <ul className="list-circle pl-5">
                          <li>Use wire/splint to introduce substance into flame</li>
                          <li>Place sample in roaring/blue/non-luminous Bunsen flame</li>
                        </ul>
                      </li>
                      <li>Hot water usage: Increases dissolution rate</li>
                      <li>For reliable results: Repeat and compare measurements</li>
                      <li>Stirring is important to:
                        <ul className="list-circle pl-5">
                          <li>Enable reaction</li>
                          <li>Ensure uniform temperature</li>
                          <li>Mix reactants thoroughly</li>
                        </ul>
                      </li>
                      <li>For hottest Bunsen flame: Keep air hole fully open</li>
                      <li>Why something isn't rinsed: When using same solution/solution hasn't changed</li>
                      <li>First gas bubbles not collected: Contains air</li>
                      <li>Conical flask swirling: To mix reactants</li>
                      <li>Volumetric pipette limitations: Can't be used when volume needed varies between experiments</li>
                      <li>Running acid through burette:
                        <ul className="list-circle pl-5">
                          <li>Ensures acid level is on scale</li>
                          <li>Fills tap/portion below tap</li>
                        </ul>
                      </li>
                      <li>Burette rinsing after water: To remove water residue</li>
                      <li>Air collection in measuring cylinder:
                        <ul className="list-circle pl-5">
                          <li>Displaced by formed gas (e.g., CO₂)</li>
                          <li>Doesn't affect accuracy as displaced volume equals gas volume</li>
                        </ul>
                      </li>
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