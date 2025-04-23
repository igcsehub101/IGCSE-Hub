
import { UserPlus } from "lucide-react";

const Contribute = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-[hsl(var(--pastel-blue))] rounded-full flex items-center justify-center mx-auto mb-4">
            <UserPlus className="h-8 w-8 text-blue-700" />
          </div>
          <h2 className="font-bold text-3xl">Join Us</h2>
          <p className="text-gray-600 mt-4">
            Help us make IGCSE Hub better by contributing your knowledge and resources. 
            Together, we can create a more comprehensive learning platform for students.
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-center">
            We welcome contributions from students, teachers, and education enthusiasts 
            who want to help others succeed in their IGCSE journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contribute;
