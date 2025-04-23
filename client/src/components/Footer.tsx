import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Study Resources Hub</h3>
            <p className="text-gray-400">
              Your one-stop resource center for exam preparation and study materials.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-gray-400 hover:text-white">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/last-minute-tips">
                  <a className="text-gray-400 hover:text-white">Last Minute Tips</a>
                </Link>
              </li>
              <li>
                <Link href="/resources">
                  <a className="text-gray-400 hover:text-white">Resources</a>
                </Link>
              </li>
              <li>
                <Link href="/hard-questions">
                  <a className="text-gray-400 hover:text-white">Hard Questions</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p className="text-gray-400">
              Have suggestions for resources? Let us know!
            </p>
            <a
              href="mailto:contact@studyresourceshub.com"
              className="text-blue-300 hover:text-white"
            >
              contact@studyresourceshub.com
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Study Resources Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
