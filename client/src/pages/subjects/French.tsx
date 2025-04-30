import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const French = () => {
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
          <h1 className="text-3xl font-bold ml-4">French Resources</h1>
        </div>
        
        <Separator className="my-6" />
        
        {/* Vocabulary and Phrases */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-orange-700">Vocabulary and Phrases</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Essential vocabulary and useful phrases for IGCSE French.</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li><a href="https://drive.google.com/file/d/1AmKFlq6qnuSzMdEl32ywC3-yrO0DIzHG/view?usp=sharing" className="text-orange-600 hover:underline">Useful Phrases for Writing and Speaking</a></li>
            </ul>
            
            <Accordion type="single" collapsible className="border rounded-md">
              <AccordionItem value="topic-wise-expressions">
                <AccordionTrigger className="px-4 text-orange-700 font-medium">
                  Topic Wise Expressions
                </AccordionTrigger>
                <AccordionContent className="px-4 whitespace-pre-wrap font-mono text-sm overflow-x-auto">
                  <div className="bg-slate-50 p-4 rounded-md">
                    <h3 className="font-bold text-lg mb-3">Tenses</h3>
                    <h4 className="font-bold mt-3">1. Le Passé Composé</h4>
                    <p className="font-semibold">Formation:</p>
                    <p>Auxiliary verb (avoir or être) + past participle</p>
                    
                    <p className="font-semibold mt-3">Verbs that use être (mostly motion/reflexive verbs):</p>
                    <ul className="space-y-1">
                      <li>aller (allé)</li>
                      <li>entrer (entré)</li>
                      <li>sortir (sorti)</li>
                      <li>arriver (arrivé)</li>
                      <li>partir (parti)</li>
                      <li>monter (monté)</li>
                      <li>descendre (descendu)</li>
                      <li>retourner (retourné)</li>
                      <li>venir (venu)</li>
                      <li>revenir (revenu)</li>
                      <li>mourir (mort)</li>
                      <li>naître (né)</li>
                    </ul>
                    
                    <p className="font-semibold mt-3">Irregular past participles:</p>
                    <ul className="space-y-1">
                      <li>boire → bu</li>
                      <li>lire → lu</li>
                      <li>pleuvoir → plu</li>
                      <li>vouloir → voulu</li>
                      <li>dormir → dormi</li>
                      <li>offrir → offert</li>
                      <li>ouvrir → ouvert</li>
                      <li>mettre → mis</li>
                      <li>écrire → écrit</li>
                      <li>faire → fait</li>
                    </ul>
                    
                    <h4 className="font-bold mt-5">2. L'Imparfait</h4>
                    <p className="font-semibold">Formation:</p>
                    <ul className="space-y-1">
                      <li>Take the nous form of the present tense verb</li>
                      <li>Remove "-ons"</li>
                      <li>Add the endings: -ais, -ais, -ait, -ions, -iez, -aient</li>
                    </ul>
                    
                    <p className="font-semibold mt-3">Examples:</p>
                    <ul className="space-y-1">
                      <li>être → j'étais, tu étais, il/elle était</li>
                      <li>finir → nous finissions</li>
                      <li>jouer → ils jouaient</li>
                    </ul>
                    
                    <p className="font-semibold mt-3">Used for:</p>
                    <ul className="space-y-1">
                      <li>Descriptions in the past</li>
                      <li>Repeated actions</li>
                      <li>Background information</li>
                    </ul>
                    
                    <h4 className="font-bold mt-5">3. Le Futur Proche</h4>
                    <p className="font-semibold">Formation:</p>
                    <p>aller (in present) + infinitive verb</p>
                    <p>e.g. Je vais manger, Tu vas aller, Il va pleuvoir</p>
                    
                    <h4 className="font-bold mt-5">4. Le Futur Simple</h4>
                    <p className="font-semibold">Formation:</p>
                    <p>Infinitive verb (or irregular stem) + endings: -ai, -as, -a, -ons, -ez, -ont</p>
                    
                    <p className="font-semibold mt-3">Irregular stems:</p>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                      <li>avoir → aur-</li>
                      <li>être → ser-</li>
                      <li>faire → fer-</li>
                      <li>aller → ir-</li>
                      <li>devoir → devr-</li>
                      <li>pouvoir → pourr-</li>
                      <li>venir → viendr-</li>
                      <li>envoyer → enverr-</li>
                      <li>savoir → saur-</li>
                      <li>pleuvoir → pleuvra</li>
                      <li>mourir → mourr-</li>
                      <li>recevoir → recevr-</li>
                      <li>acheter → achèter-</li>
                    </ul>
                    
                    <p className="font-semibold mt-3">Examples:</p>
                    <p>J'irai, Tu achèteras, Nous saurons</p>
                    
                    <h4 className="font-bold mt-5">5. L'Impératif</h4>
                    <p>Used for commands. Only exists in tu, nous, and vous forms.</p>
                    <p>For -er verbs, drop the -s in the "tu" form:</p>
                    <ul className="space-y-1">
                      <li>Mange !</li>
                      <li>Finis ton devoir !</li>
                      <li>Fais la vaisselle !</li>
                    </ul>
                    
                    <p className="font-semibold mt-3">Irregular forms:</p>
                    <ul className="space-y-1">
                      <li>être → sois, soyons, soyez</li>
                      <li>avoir → aie, ayons, ayez</li>
                      <li>savoir → sache, sachons, sachez</li>
                      <li>vouloir → veuille, veuillons, veuillez</li>
                    </ul>
                    
                    <h4 className="font-bold mt-5">6. Le Subjonctif</h4>
                    <p>Used to express emotion, desire, doubt, necessity.</p>
                    <p className="font-semibold">Formation:</p>
                    <ul className="space-y-1">
                      <li>Take "ils" form in present tense</li>
                      <li>Remove "-ent"</li>
                      <li>Add: -e, -es, -e, -ions, -iez, -ent</li>
                    </ul>
                    
                    <p className="font-semibold mt-3">Where to use subjonctif:</p>
                    <ul className="space-y-1">
                      <li>Il faut que... – It's necessary that...</li>
                      <li>Je veux que... – I want that...</li>
                      <li>Je doute que... – I doubt that...</li>
                      <li>Bien que ce soit difficile... – Although it's difficult...</li>
                      <li>Il est important que tu... – It's important that you...</li>
                    </ul>
                    
                    <p className="font-semibold mt-3">Irregular verbs:</p>
                    <ul className="space-y-1">
                      <li>être → sois, sois, soit, soyons, soyez, soient</li>
                      <li>avoir → aie, aies, ait, ayons, ayez, aient</li>
                      <li>aller → aille, ailles, aille, allions, alliez, aillent</li>
                      <li>faire → fasse, fasses, fasse, fassions, fassiez, fassent</li>
                      <li>savoir → sache, saches, sache, sachions, sachiez, sachent</li>
                    </ul>
                    
                    <p className="font-semibold mt-3">Examples:</p>
                    <ul className="space-y-1">
                      <li>Il faut que tu manges sainement.</li>
                      <li>Il est important que vous fassiez du sport.</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
        
        {/* Tenses */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-orange-700">Grammar Resources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="https://drive.google.com/file/d/1GdVZVPnY8irtXvoRG5begcJXqj7wj81F/view?usp=sharing" className="text-orange-600 hover:underline">Tenses and modes with examples</a></li>
              <li><a href="https://drive.google.com/file/d/1mVyGpuL0HBn1FMepMsnC96nEhCRgsY-P/view?usp=sharing" className="text-orange-600 hover:underline">Essential verb conjugations</a></li>
              <li><a href="https://francais.lingolia.com/en/grammar/conjugator" className="text-orange-600 hover:underline"> Lingolia: Verb Conjugator </a></li>
            </ul>
          </CardContent>
        </Card>
        
        
      </div>
    </section>
  );
};

export default French;