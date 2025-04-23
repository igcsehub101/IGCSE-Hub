import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Last Minute Tips", path: "/last-minute-tips" },
    { name: "Resources", path: "/resources" },
    { name: "Hard Questions", path: "/hard-questions" },
    { name: "Contribute", path: "/contribute" },
  ];

  return (
    <header className="gradient-header p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-gray-800 font-bold text-2xl md:text-3xl">
            IGCSE Hub
          </a>
        </Link>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6 items-center">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link href={link.path}>
                  <a className={`text-gray-700 hover:text-gray-900 ${location === link.path ? 'font-semibold' : ''}`}>
                    {link.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <Button 
          variant="ghost" 
          className="md:hidden" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link href={link.path}>
                  <a 
                    className={`block text-gray-700 hover:text-gray-900 ${
                      location === link.path ? 'font-semibold' : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
