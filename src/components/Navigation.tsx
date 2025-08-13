
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, User, Briefcase, Code, FolderOpen, BookOpen, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero', icon: Home },
    { label: 'About', id: 'about', icon: User },
    { label: 'Experience', id: 'experience', icon: Briefcase },
    { label: 'Skills', id: 'skills', icon: Code },
    { label: 'Projects', id: 'projects', icon: FolderOpen },
    { label: 'Publications', id: 'publications', icon: BookOpen },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-xl border-b border-border ${
      isScrolled ? 'shadow-lg' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
        <div className="flex items-center justify-between">
          <div className="font-sf-pro-display font-bold text-lg sm:text-xl text-primary">
            Srivathsav Kommineni
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-muted/80 rounded-full p-1.5">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-2 px-3 py-1.5 rounded-full text-foreground hover:text-primary-foreground hover:bg-primary transition-all duration-300 font-medium text-sm"
                >
                  <IconComponent className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Theme Toggle and Contact Button */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="sm"
              className="p-1.5 text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 rounded-lg"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </Button>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-1.5 text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 rounded-lg"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Contact Button - Desktop */}
            <Button
              onClick={() => scrollToSection('contact')}
              className="hidden lg:flex items-center space-x-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-1.5 px-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-sm"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 py-3 bg-card/95 backdrop-blur-xl rounded-xl shadow-xl border border-border">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center space-x-3 px-4 py-2.5 text-foreground hover:text-primary-foreground hover:bg-primary transition-all duration-300 font-medium rounded-lg mx-2 text-sm"
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center justify-center space-x-2 mx-4 mt-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
