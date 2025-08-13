
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Brain, Cloud, BarChart3 } from 'lucide-react';

const About = () => {
  const interests = [
    {
      title: '🏎️ High-Speed Web Development',
      icon: Code,
      description: 'Lightning-fast full-stack solutions like an F1 pit stop',
      color: 'bg-primary'
    },
    {
      title: '🧠 AI Racing Intelligence',
      icon: Brain,
      description: 'Deep learning systems that think at pole position speed',
      color: 'bg-primary/80'
    },
    {
      title: '☁️ Cloud Grand Prix',
      icon: Cloud,
      description: 'Scalable architectures racing across global circuits',
      color: 'bg-primary/90'
    },
    {
      title: '📊 Performance Analytics',
      icon: BarChart3,
      description: 'Data telemetry for championship-winning insights',
      color: 'bg-primary/70'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 f1-section relative">
      {/* Racing track background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-primary"></div>
      </div>
      
      {/* F1 Pit Lane Pattern */}
      <div className="absolute inset-0 f1-pit-lane opacity-5"></div>
      
      {/* F1 Tire Tread Patterns */}
      <div className="absolute top-10 left-10 w-64 h-32 f1-tire-tread opacity-5 transform rotate-45"></div>
      <div className="absolute bottom-10 right-10 w-64 h-32 f1-tire-tread opacity-5 transform -rotate-45"></div>
      
      {/* F1 Wheel Rim Elements */}
      <div className="absolute top-1/4 right-10 w-24 h-24 f1-wheel-rim opacity-10"></div>
      <div className="absolute bottom-1/4 left-10 w-24 h-24 f1-wheel-rim opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sf-pro-display font-bold text-foreground mb-4 md:mb-6">
            🏁 Driver Profile
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          <div className="space-y-6 lg:space-y-8">
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              🏎️ Like a Formula 1 driver mastering every circuit, I engineer high-performance systems across web, cloud, and AI domains. 
              Currently racing through my Master of Science in Computer and Information Science at the{' '}
              <span className="text-primary font-semibold bg-primary/20 px-2 py-1 rounded border border-primary/30">🏁 University of Florida</span>, 
              the pole position university in Florida and champion among public universities in the USA.
            </p>
            
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              My racing career began at{' '}
              <span className="text-primary font-semibold bg-primary/20 px-2 py-1 rounded border border-primary/30">🏆 JNTUH</span>, 
              one of India's premier engineering circuits. I've secured podium finishes with hands-on experience at{' '}
              <span className="text-primary font-semibold bg-primary/20 px-2 py-1 rounded border border-primary/30">🚀 Teradata</span> and{' '}
              <span className="text-primary font-semibold bg-primary/20 px-2 py-1 rounded border border-primary/30">📊 UF's Warrington School of Business</span>, 
              where I turbocharged enterprise software tools and deployed AI-powered racing intelligence.
            </p>

            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              🏁 Every line of code is a lap towards victory. Whether it's a deep learning championship or a cloud-native grand prix, 
              I build solutions that cross the finish line with both impact and technical excellence. 
              My mission: leverage cutting-edge tech and teamwork to engineer software that wins the race for meaningful technological advancement.
            </p>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-sf-pro-display font-semibold text-foreground mb-6 text-center lg:text-left">
              🏎️ Racing Specialties
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
              {interests.map((interest, index) => {
                const IconComponent = interest.icon;
                return (
                  <Card key={index} className="group f1-card overflow-hidden hover:border-primary relative">
                    <CardContent className="p-4 sm:p-6">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full ${interest.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                      </div>
                      <h4 className="font-sf-pro-display font-semibold text-foreground mb-2 text-sm sm:text-base">
                        {interest.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {interest.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
