import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
{}
const Biology = () => {
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
          <h1 className="text-3xl font-bold ml-4">Biology Resources</h1>
        </div>
        
        <Separator className="my-6" />
        
        
        
        {/* Formula Sheet */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-green-700">General Resources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Essential formulas and equations for IGCSE Biology.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="https://quizlet.com/in/871196360/definitions-of-biology-flash-cards/?i=2xx25v&x=1jqt" className="text-green-600 hover:underline">Quizlet Definitions</a></li>
              <li><a href="https://drive.google.com/file/d/13kBHLxHZ_C3xtpXXxtQbbVrekba1Sl90/view" className="text-green-600 hover:underline">Diagrams (Vasumitra Ghajbiye) </a></li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Paper 2 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-green-700">Paper 2</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Resources for the multiple-choice paper.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="https://drive.google.com/drive/folders/1dc9C5IcAN8U-B5EUvr0N1TWIueUe6i0s" className="text-green-600 hover:underline"> Hardest Paper 2 </a></li>
              <li><a href="#" className="text-green-600 hover:underline">Multiple Choice Strategies</a></li>
              <li><a href="#" className="text-green-600 hover:underline">Common Misconceptions</a></li>
            </ul>
          </CardContent>
        </Card>
        
       {/* Paper 4 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-green-700">Paper 4</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Resources for the extended theory paper.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="https://drive.google.com/file/d/14MO2iTAWR1NDHICuFBp6bxa5sCod9NcH/view" className="text-green-600 hover:underline">Common Past Paper Questions By Vasumitra</a></li>
              <li><a href="https://docs.google.com/document/d/1yRSoITH2GhiWCuTDtILexoEusTDX-3OboY8WRqpmGQk/edit?usp=sharing" className="text-green-600 hover:underline">Topical Mark Schemes</a></li>
              <li><a href="https://drive.google.com/file/d/14MO2iTAWR1NDHICuFBp6bxa5sCod9NcH/view" className="text-green-600 hover:underline"></a> Notes by Vasumitra</li>
              <li><a href="https://docs.google.com/document/d/1N81fuUzth8KA_HJxjsepscoRkHJtUM5RVdmMt0HQLoc/edit?tab=t.0#heading=h.80661fvhb7tp" className="text-green-600 hover:underline"></a> Comprehensive notes by FrogDumpling</li>
            </ul>
          </CardContent>
        </Card>
          {/* Paper 6 */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-xl text-green-700">Paper 6</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>Resources for the alternative to practical paper.</p>

                    <div className="space-y-4">
                      <details className="bg-green-50 p-4 rounded-lg">
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
                            <h4 className="font-semibold mb-2">Why use the same size of something?</h4>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>→ Surface area / affects rate.
</li>
                              
                            </ul>
                          </div>

                          <div className="bg-white p-4 rounded shadow-sm">
                            <h4 className="font-semibold mb-2">Temperature</h4>
                            <ul className="list-disc pl-5 space-y-2">
                              <li> To control it: thermostatically controlled water bath, insulation
                          </li>
                              <li>Possible errors:Surrounding  temperature/ initial temp may not be the same
                                </li>

                            </ul>
                          </div>
                          <div className="bg-white p-4 rounded shadow-sm">
                            <h4 className="font-semibold mb-2">Why use the same volume?</h4>
                            <ul className="list-disc pl-5 space-y-2">
                              <li> → To keep a fair test.</li>
                            
                            </ul>
                          </div>

                          <div className="bg-white p-4 rounded shadow-sm">
                            <h4 className="font-semibold mb-2">Why use the same temp initially?</h4>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>→ Affects all results</li>
                              
                            </ul>
                          </div>

                          <div className="bg-white p-4 rounded shadow-sm">
                            <h4 className="font-semibold mb-2">Why stir?</h4>
                            <ul className="list-disc pl-5 space-y-2">
                              
                              <li>→ For a uniform distribution</li>
                            </ul>
                          </div>

                          <div className="bg-white p-4 rounded shadow-sm">
                            <h4 className="font-semibold mb-2">For finding max height</h4>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>→ Use a clamp + ruler.</li>
                            </ul>
                          </div>

                          <div className="bg-white p-4 rounded shadow-sm">
                            <h4 className="font-semibold mb-2">Error in measuring height of foam</h4>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>→May be uneven/ hard to see the volume of gas.</li>
                              <li>Instead measure the volume of gas made</li>

                            </ul>
                          </div>
                          <div className="bg-white p-4 rounded shadow-sm">
                            <h4 className="font-semibold mb-2">Difficultly finding the colour change</h4>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>→Difficulty is because its hard to judge the end point</li>
                              <li>Use a colour chart/ colourimeter</li>

                            </ul>
                          </div>

                          <div className="bg-white p-4 rounded shadow-sm">
                            <h4 className="font-semibold mb-2">Why collect several sets of results?</h4>
                            <ul className="list-disc pl-5 space-y-2">
                              
                              <li>To identify anamolous results</li>

                            </ul>
                          </div>

                          <div className="bg-white p-4 rounded shadow-sm">
                            <h4 className="font-semibold mb-2">Why are bubbles inaccurate?</h4>
                            <ul className="list-disc pl-5 space-y-2">
                              <li> → Easy to miscount as they are different sizes.
</li>
                              
                            
                            </ul>
                              </div>
                          <div className="bg-white p-4 rounded shadow-sm">
                            <h4 className="font-semibold mb-2">Why use a larger sample?

</h4>
                            <ul className="list-disc pl-5 space-y-2">
                              <li> Avoids bias, provides a representative sample, helps to identify anomalies
                          </li>


                            </ul>
                              </div>

                          <div className="bg-white p-4 rounded shadow-sm">
                            <h4 className="font-semibold mb-2">What is an anomalous result?

                          </h4>
                            <ul className="list-disc pl-5 space-y-2">
                              <li> A result that does not fit the expected pattern
                          </li>


                            </ul>
                              </div>

                          <div className="bg-white p-4 rounded shadow-sm">
                            <h4 className="font-semibold mb-2">Why use a  control setup?

                          </h4>
                            <ul className="list-disc pl-5 space-y-2">
                              <li> To prove (variable) causes effect.
                          </li>


                            </ul>
                              </div>

                          <div className="bg-white p-4 rounded shadow-sm">
                            <h4 className="font-semibold mb-2"> Error in stirring

                          </h4>
                            <ul className="list-disc pl-5 space-y-2">
                              <li> Different degrees of mixing/stirring from experiment to experiment
                          </li>
                              <li> Improvemnt: shake for fixed time or use a mechanical stirrer
                                </li>


                            </ul>
                              </div>

                              <div className="bg-white p-4 rounded shadow-sm">
                                <h4 className="font-semibold mb-2">Why is concentration of x used as comparison??</h4>
                                <ul className="list-disc pl-5 space-y-2">
                                  <li> → To compare the effect of same concentration on different substances </li>
                            


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

export default Biology;