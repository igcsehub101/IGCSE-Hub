import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ComputerScience = () => {
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
          <h1 className="text-3xl font-bold ml-4">Computer Science Resources</h1>
        </div>
        
        <Separator className="my-6" />
        
        {/* Paper 1 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-yellow-700"> Paper 1 </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="https://drive.google.com/file/d/1XUslLgcUOASz--O86gZxoouYSEHZUh4H/view?usp=drive_link" className="text-yellow-600 hover:underline"> Revision Notes </a></li>
               </ul>
              <ul className="list-disc pl-5 space-y-1">
              <h4 className="font-semibold mt-6 mb-3">Mark schemes to review key terms</h4>
  
              <li><a href="https://drive.google.com/file/d/1yMGrHGhQDtq0RkD0hrgNF0ovTxCsmi5W/view?usp=drive_link" className="text-yellow-600 hover:underline"> Internet and its Uses</a></li>
                
              <li><a href="https://drive.google.com/file/d/1XUslLgcUOASz--O86gZxoouYSEHZUh4H/view?usp=drive_link" className="text-yellow-600 hover:underline"> All Topics </a></li>
            </ul>
          </CardContent>
        </Card>

        {/* Pseudocode Rules */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-yellow-700">Pseudocode Rules</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <details className="bg-yellow-50 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">Cambridge IGCSE Pseudocode Rules</summary>
              <div className="mt-4 space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">General Style:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Font: Courier New</li>
                    <li>Indentation: 4 spaces for code blocks, 2 spaces for line continuations</li>
                    <li>THEN and ELSE clauses: indented by 2 spaces</li>
                    <li>Keywords: UPPER CASE (e.g., IF, REPEAT)</li>
                    <li>Identifiers: PascalCase (e.g., NumberOfPlayers)</li>
                    <li>Meta-variables: enclosed in &lt; &gt;</li>
                  </ul>
                  <div className="bg-gray-800 text-gray-100 p-4 rounded-md mt-2 font-mono">
                    REPEAT<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Statements&gt;<br/>
                    UNTIL &lt;Condition&gt;
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Comments:</h4>
                  <p>Use // for comments</p>
                  <div className="bg-gray-800 text-gray-100 p-4 rounded-md mt-2 font-mono">
                    // This procedure swaps<br/>
                    // values of X and Y<br/>
                    PROCEDURE SWAP(X : INTEGER, Y : INTEGER)<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;Temp ← X&nbsp;&nbsp;&nbsp;&nbsp;// temporarily store X<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;X ← Y<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;Y ← Temp<br/>
                    ENDPROCEDURE
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Data Types:</h4>
                  <ul className="list-disc pl-5">
                    <li>INTEGER, REAL, CHAR, STRING, BOOLEAN</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Variable Declarations:</h4>
                  <div className="bg-gray-800 text-gray-100 p-4 rounded-md mt-2 font-mono">
                    DECLARE Counter : INTEGER<br/>
                    DECLARE TotalToPay : REAL<br/>
                    DECLARE GameOver : BOOLEAN
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Control Structures:</h4>
                  <div className="bg-gray-800 text-gray-100 p-4 rounded-md mt-2 font-mono">
                    IF Score > 50 THEN<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;OUTPUT "Pass"<br/>
                    ELSE<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;OUTPUT "Fail"<br/>
                    ENDIF
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Loops:</h4>
                  <div className="bg-gray-800 text-gray-100 p-4 rounded-md mt-2 font-mono">
                    FOR i ← 1 TO 5<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;OUTPUT i<br/>
                    NEXT i<br/><br/>
                    WHILE Number > 9 DO<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;Number ← Number – 9<br/>
                    ENDWHILE
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Functions and Procedures:</h4>
                  <div className="bg-gray-800 text-gray-100 p-4 rounded-md mt-2 font-mono">
                    FUNCTION SumSquare(Number1:INTEGER, Number2:INTEGER) RETURNS INTEGER<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;RETURN Number1 * Number1 + Number2 * Number2<br/>
                    ENDFUNCTION
                  </div>
                </div>
              </div>
            </details>
          </CardContent>
        </Card>
        
        {/* Paper 2 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-yellow-700">Paper 2</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Comprehensive resources for programming concepts and practice for IGCSE Computer Science.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="https://drive.google.com/drive/u/4/folders/1aU3YMtOmvcuDBcetG5wSMSmVjMH2gRjO" className="text-yellow-600 hover:underline">Common Past paper questions</a></li>
              <li><a href="https://drive.google.com/file/d/1FP-_boMAtLBRxffwhxDVazzE1ccx2HtT/view?usp=drive_link" className="text-yellow-600 hover:underline">Pseudocode Guide</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Trace Table Examples</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Pseudocode Practice</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Logic Gates and Boolean Algebra</a></li>
              <li><a href="#" className="text-yellow-600 hover:underline">Flowchart Design Principles</a></li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ComputerScience;