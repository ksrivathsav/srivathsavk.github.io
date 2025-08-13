
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Book, ExternalLink } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: "Adversarial Defense for MNIST: Investigating Adversarial Training and FGSM",
      description: "Analyzed about multiple adversarial attacks on pre-trained DL models and how robustness can be improved by 30% with those techniques.",
      type: "Research Paper",
      year: "2023",
      url: "https://ijsdr.org/viewpaperforall.php?paper=IJSDR2303175"
    }
  ];

  return (
    <section id="publications" className="py-16 md:py-20 lg:py-24 f1-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sf-pro-display font-bold text-foreground mb-4 md:mb-6">
            📚 Research Papers
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-6 lg:gap-8 max-w-4xl mx-auto">
          {publications.map((publication, index) => (
            <Card key={index} className="f1-card overflow-hidden group">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-4 sm:space-y-0">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Book className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg sm:text-xl lg:text-2xl font-sf-pro-display font-semibold text-foreground group-hover:text-primary transition-colors">
                        {publication.title}
                      </CardTitle>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end space-y-2">
                    <Badge variant="secondary" className="text-sm px-3 py-1 bg-primary/10 text-primary self-start sm:self-end">
                      {publication.year}
                    </Badge>
                    <Badge variant="outline" className="text-sm px-3 py-1 border-primary text-primary self-start sm:self-end">
                      {publication.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {publication.description}
                </p>
                
                <Button
                  onClick={() => window.open(publication.url, '_blank')}
                  variant="outline"
                  size="sm"
                  className="f1-button-outline"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Publication
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
