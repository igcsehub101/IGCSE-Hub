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
        
        {/* Paper 2 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-yellow-700">Paper 2</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Comprehensive resources for programming concepts and practice for IGCSE Computer Science.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="https://drive.google.com/file/d/1yhfZwQA1m6FsSXWS-kQMJtAxlfA-MEW2/view?usp=drive_link" className="text-yellow-600 hover:underline">Common Past paper questions</a></li>
              <li><a href="https://drive.google.com/file/d/1FP-_boMAtLBRxffwhxDVazzE1ccx2HtT/view?usp=drive_link" className="text-yellow-600 hover:underline">Pseudocode Guide</a></li>
              <li><a href="https://drive.google.com/file/d/1YUOrUmFQ1Vx2JFuw4XkdmujBJFun2w9_/view?usp=drive_link" className="text-yellow-600 hover:underline">Pseudocode Rules from the syllabus</a></li>
              <li><a href="https://drive.google.com/file/d/1p8_zQbPFMQSyAqwD7nSJhYsyaAnbAqEr/view?usp=sharing" className="text-yellow-600 hover:underline">Quick Revision Notes</a></li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ComputerScience;