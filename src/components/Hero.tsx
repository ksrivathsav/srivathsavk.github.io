
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Linkedin, Github, User, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Add your resume download logic here
    console.log('Downloading resume...');
  };

  return (
    <section className="min-h-screen flex items-center justify-center f1-hero-bg relative overflow-hidden">
      {/* F1-inspired background effects */}
      <div className="absolute inset-0 checkered-bg opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-2 racing-stripes"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 racing-stripes"></div>
      
      {/* F1 Wheel Rim Patterns */}
      <div className="absolute top-10 left-10 w-32 h-32 f1-wheel-rim opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 f1-wheel-rim opacity-10 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 f1-steering-wheel opacity-10 animate-pulse delay-500"></div>
      
      {/* F1 Car Silhouettes */}
      <div className="absolute top-20 right-20 w-48 h-24 f1-car-silhouette opacity-5 transform rotate-12"></div>
      <div className="absolute bottom-20 left-20 w-48 h-24 f1-car-silhouette opacity-5 transform -rotate-12"></div>
      
      {/* F1 Circuit Elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 f1-circuit opacity-5"></div>
      <div className="absolute bottom-1/4 left-1/4 w-32 h-32 f1-circuit opacity-5"></div>
      
      {/* F1 Grid Pattern */}
      <div className="absolute inset-0 f1-grid opacity-3"></div>
      
      {/* Floating F1 Elements */}
      <div className="absolute top-10 left-10 md:top-20 md:left-20 w-32 h-32 md:w-72 md:h-72 bg-primary/20 rounded-full mix-blend-lighten filter blur-xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-32 h-32 md:w-72 md:h-72 bg-primary/30 rounded-full mix-blend-lighten filter blur-xl opacity-50 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 md:w-48 md:h-48 bg-primary/10 rounded-full mix-blend-lighten filter blur-2xl opacity-30 animate-pulse delay-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-sf-pro-display font-bold text-foreground mb-4 md:mb-6">
            Srivathsav
            <span className="block text-primary">
              Kommineni
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            🏎️ Racing through code like an F1 driver - Engineering high-performance systems across{' '}
            <span className="text-primary font-semibold bg-primary/20 px-2 py-1 rounded-md">web</span>,{' '}
            <span className="text-primary font-semibold bg-primary/20 px-2 py-1 rounded-md">cloud</span>, and{' '}
            <span className="text-primary font-semibold bg-primary/20 px-2 py-1 rounded-md">AI</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-8 mb-8 md:mb-12 text-sm sm:text-base">
            <div className="flex items-center space-x-2 text-muted-foreground bg-card/60 backdrop-blur-sm border border-primary/30 px-3 py-2 rounded-full shadow-lg">
              <User className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span>🏁 University of Florida</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground bg-card/60 backdrop-blur-sm border border-primary/30 px-3 py-2 rounded-full shadow-lg">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="hidden sm:inline">+1 (352) 246-6696</span>
              <span className="sm:hidden">Call</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground bg-card/60 backdrop-blur-sm border border-primary/30 px-3 py-2 rounded-full shadow-lg">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="hidden md:inline">srivathsavkommineni@gmail.com</span>
              <span className="md:hidden">Email</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 mb-8 md:mb-12">
            <Button
              onClick={() => scrollToSection('about')}
              size="lg"
              className="w-full sm:w-auto f1-button px-6 sm:px-8 py-3"
            >
              🏎️ Start Your Engines
            </Button>
            
            <Button
              onClick={downloadResume}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto f1-button-outline px-6 sm:px-8 py-3"
            >
              <Download className="w-4 h-4 mr-2" />
              🏁 Download Resume
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-4 sm:space-x-6">
            <a
              href="https://www.linkedin.com/in/srivathsav-kommineni/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 rounded-full bg-card/60 backdrop-blur-sm border border-primary/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-primary hover:border-primary group"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary-foreground transition-colors" />
            </a>
            <a
              href="https://github.com/ksrivathsav"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 rounded-full bg-card/60 backdrop-blur-sm border border-primary/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-primary hover:border-primary group"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary-foreground transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
