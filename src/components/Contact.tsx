
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, User } from 'lucide-react';

const Contact = () => {
  const handleSendMessage = () => {
    const email = 'srivathsavkommineni@gmail.com';
    const subject = 'Portfolio Contact - Srivathsav Kommineni';
    const body = `Hello Srivathsav,

I came across your portfolio and would like to connect with you regarding potential opportunities.

Best regards,
[Your Name]`;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24 f1-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sf-pro-display font-bold text-foreground mb-4 md:mb-6">
            🏁 Pit Stop
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on the next championship-winning project? Let's discuss opportunities and push the limits of technology together.
          </p>
        </div>

        <Card className="f1-card overflow-hidden">
          <CardContent className="p-6 sm:p-8 lg:p-10">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-6 lg:space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary rounded-full">
                    <User className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-sf-pro-display font-semibold text-foreground text-lg">
                      Srivathsav Kommineni
                    </h3>
                    <p className="text-muted-foreground">Software Developer</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary rounded-full">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Email</h4>
                    <p className="text-muted-foreground">srivathsavkommineni@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary rounded-full">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+1 (352) 246-6696</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 lg:space-y-8">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-sf-pro-display font-semibold text-foreground">
                  Connect with me
                </h3>
                
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a
                    href="https://www.linkedin.com/in/srivathsav-kommineni/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 p-4 bg-primary hover:bg-primary/90 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex-1"
                  >
                    <Linkedin className="w-6 h-6 text-primary-foreground" />
                    <span className="font-medium text-primary-foreground">LinkedIn</span>
                  </a>
                  
                  <a
                    href="https://github.com/ksrivathsav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 p-4 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex-1 border border-border"
                  >
                    <Github className="w-6 h-6" />
                    <span className="font-medium">GitHub</span>
                  </a>
                </div>

                <Button
                  onClick={handleSendMessage}
                  className="w-full f1-button py-3"
                  size="lg"
                >
                  🏎️ Send Message
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
