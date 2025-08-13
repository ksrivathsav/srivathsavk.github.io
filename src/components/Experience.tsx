
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Research Computing Intern",
      company: "University of Florida IT (UFIT)",
      duration: "August 2025 - Present",
      logo: "https://www.floridagators.com/images/logos/site/site.png",
      achievements: [
        "Installed and configured 20+ research software packages on Linux-based HiPerGator clusters, automating dependency setup with Python scripts to cut installation time by 40% and ensure reproducibility.",
        "Developed Python-based automation tools and lightweight web apps that streamlined HPC support workflows, reducing repetitive manual work by 30% and improving team efficiency.",
        "Resolved 100+ HPC support tickets via RC ticketing system, Slack, and Zoom, optimizing ticket triage and communication to reduce resolution time by 25%.",
        "Debugged and optimized SLURM job executions, resolving environment conflicts and tuning configurations to improve research workload runtimes by up to 15% while documenting solutions for future use."
      ]
    },
    {
      title: "Graduate Student Research Assistant",
      company: "University of Florida Warrington School of Business",
      duration: "February 2025 - Present",
      logo: "https://www.floridagators.com/images/logos/site/site.png",
      achievements: [
        "Advanced and deployed an automated video processing pipeline to retrieve YouTube videos, extract frames, and detect faces using OpenCV and DLib, reducing manual effort by 95%.",
        "Evaluated facial features across datasets using AFFDEX 2.0, OpenFace, and Py-Feat, extracting Facial Action Units (AUs), head pose, gaze direction, and micro-expressions to enable multimodal facial behavior analysis.",
        "Refined and trained a machine learning-based deception detection model, applying feature engineering, statistical analysis, and classification algorithms to achieve 87% prediction accuracy on speaker authenticity."
      ]
    },
    {
      title: "Associate Software Developer",
      company: "Teradata",
      duration: "January 2023 - December 2023",
      logo: "https://www.teradata.com/Teradata/Images/logos/Teradata_logo_2018_Orange.png",
      achievements: [
        "Built and refined a Python-based automation tool for executing IUMB scripts, making installation, upgrade, migration, and backdown faster, more reliable for Teradata PUT tools. This helped the team complete deployments about 15% quicker with fewer manual steps.",
        "Enhanced user experience by developing new features, refining UI components, and addressing critical bugs in Teradata web-based tools using AngularJS, Typescript, and Figma, resulting in a 20% improvement in user satisfaction.",
        "Conducted system-level integration testing, unit testing, and performance tuning for backend services, ensuring seamless database interactions across clusters handling 1M+ concurrent users with 99.9% uptime reliability.",
        "Partnered with database engineers, QA testers, and product managers to define technical requirements, prioritize features, and deliver sprint-based releases, accelerating product delivery by 20% in an Agile environment."
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-20 lg:py-24 f1-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sf-pro-display font-bold text-foreground mb-4 md:mb-6">
            🏁 Racing Career
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8 lg:space-y-12">
          {experiences.map((exp, index) => (
            <Card key={index} className="f1-card overflow-hidden">
              <CardHeader className="pb-4 sm:pb-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-4 sm:space-y-0">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`}
                        className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-lg bg-card p-2 shadow-md"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) {
                            fallback.style.display = 'flex';
                          }
                        }}
                      />
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-lg flex items-center justify-center hidden">
                        <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg sm:text-xl lg:text-2xl font-sf-pro-display font-semibold text-foreground mb-1 sm:mb-2">
                        {exp.title}
                      </CardTitle>
                      <p className="text-base sm:text-lg text-primary font-medium">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs sm:text-sm px-3 py-1 bg-primary/10 text-primary self-start">
                    {exp.duration}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 sm:space-y-4">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{achievement}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
