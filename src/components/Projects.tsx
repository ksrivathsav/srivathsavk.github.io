
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Pascal/Delphi Compiler to LLVM IR & WebAssembly",
      description: "Developed a Pascal/Delphi compiler in Java using ANTLR4, extending Pascal grammar to support object-oriented programming, control flow constructs, and user-defined procedures/functions; progressed a static scoping AST visitor to perform semantic analysis and generate optimized LLVM IR, reducing IR size by 25% and improving semantic validation accuracy to 99%. Compiled LLVM IR to WebAssembly using the LLVM toolchain, achieving 25% code size reduction and 99% semantic accuracy; perfected an HTML+JavaScript runtime to load and execute Pascal programs directly in browsers.",
      technologies: ["Java", "ANTLR4", "LLVM IR", "WASM", "JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/ksrivathsav/Delphi_compiler"
    },
    {
      title: "Smart Resume Analyzer",
      description: "Forged a cloud-based resume analysis web application using React, TypeScript, and Fast API backend, furnishing real-time skill matching scores and missing skill recommendations through NLP, reducing recruiter screening time by 20 hours weekly. Applied SpaCy NLP preprocessing (lemmatization, stopword removal) to improve matching accuracy by 30% compared to baseline keyword search models. Implemented CI/CD pipelines via GitHub Actions, Designed scalable RESTful APIs with 99% uptime during testing, optimizing frontend load times by 40% using Vite build optimizations.",
      technologies: ["React", "TypeScript", "Python", "FastAPI", "Docker", "CI/CD", "NLP", "SpaCy", "Vite", "GitHub Actions"],
      githubUrl: "https://github.com/ksrivathsav/Resume_Analyzer"
    },
    {
      title: "Amino Acid Sequence Function Prediction",
      description: "Built a multi-label protein function prediction model using TensorFlow and pre-trained ProtT5 embeddings, classifying 5,000+ functions from the CAFA 5 dataset. Trained the model on an NVIDIA V100 GPU for 20 epochs with binary cross-entropy loss, achieving 87.4% AUC and strong generalization using a 20% validation split. Optimized the model pipeline for efficiency by freezing transformer layers and implementing resource-aware preprocessing to reduce memory and training time.",
      technologies: ["Python", "TensorFlow", "ProtT5", "Multi-label Classification", "Binary Cross-Entropy", "AUC"],
      githubUrl: "https://github.com/ksrivathsav/Amino_Acid_Seq_Func_Prediction"
    },
    {
      title: "Network-based Chat Application with File Transfer",
      description: "This project is a Java-based multithreaded chat application that enables real-time, peer-to-peer communication and file transfer over TCP sockets. Designed using Java's ServerSocket and Socket APIs, the system operates with two concurrent threads: one for reading incoming messages and another for writing and sending messages or files. Users can exchange text messages seamlessly and initiate file transfers using a command-based protocol (transfer <filename>), which transmits files in 1KB chunks to ensure reliable delivery. The application features robust I/O handling, validates byte-level data integrity, and supports clean socket shutdown.",
      technologies: ["Java", "Sockets", "Multithreading", "File I/O", "TCP"],
      githubUrl: "https://github.com/ksrivathsav/chatbot_cn"
    },
    {
      title: "Alumni Tracking System",
      description: "Engineered a full-stack Alumni Portal using Node.js, Express.js, MongoDB, and EJS, enabling real-time mentorship matching, job opportunity postings, and event scheduling, supporting 3+ user roles with 99% uptime across database operations. Instituted role-based access control (RBAC) to manage access for mentees, mentors, and administrators, reducing unauthorized access attempts by 99% during penetration testing and improving data security compliance.",
      technologies: ["Node.js", "Express.js", "MongoDB", "EJS", "Twilio", "HTML", "CSS", "RBAC"],
      githubUrl: "https://github.com/ksrivathsav/alumni-tracking-system"
    },
    {
      title: "Abstractive YouTube Video Summarizer",
      description: "Developed an abstractive text summarization model leveraging a Transformer-based sequence-to-sequence (Seq2Seq) architecture with attention mechanisms, achieving a ROUGE-1 score of 41.2 on benchmark news datasets. Engineered a custom data preprocessing pipeline (including tokenization, padding, and outlier filtering) that reduced input noise by 28%, leading to improved model convergence and 20% faster training times. Implemented beam search decoding for summary generation, improving output fluency and coherence by 15% compared to standard greedy decoding techniques.",
      technologies: ["Python", "Transformers", "Seq2Seq", "NLP", "PyTorch", "TensorFlow", "Beam Search", "ROUGE"],
      githubUrl: "https://github.com/ksrivathsav/Abstractive-text-summarizer"
    },
    {
      title: "Bird vs Drone Classification",
      description: "Designed and trained a convolutional neural network (CNN) using transfer learning with ResNet-50, achieving 92.6% validation accuracy across a curated dataset of 10,000+ labeled aerial images. Implemented a dynamic data augmentation pipeline (random crops, flips, rotations) via PyTorch, improving model robustness and reducing overfitting by ~23% compared to non-augmented training. Optimized the model for low-latency inference, achieving an average prediction time of 47 ms per frame on standard GPU hardware, enabling real-time aerial monitoring applications.",
      technologies: ["Python", "PyTorch", "CNN", "ResNet-50", "Transfer Learning", "Computer Vision", "Data Augmentation"],
      githubUrl: "https://github.com/ksrivathsav/bird_vs_drone_image_classfier"
    },
    {
      title: "Banking Management System",
      description: "Designed and implemented a banking management system in C++ using object-oriented programming (OOP) principles such as inheritance, polymorphism, and encapsulation, supporting 6+ core banking operations (create, deposit, withdraw, balance inquiry, close account, etc.). Optimized file I/O operations with binary serialization techniques, improving data retrieval and storage efficiency by ~40% compared to naive text-based methods. Developed a menu-driven command-line interface (CLI) enabling real-time transaction processing with 100% data persistence across sessions using structured file storage.",
      technologies: ["C++", "OOP", "File I/O", "CLI"],
      githubUrl: "https://github.com/ksrivathsav/bank"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-20 lg:py-24 f1-section relative">
      {/* Racing circuit background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-0 w-full h-0.5 bg-primary transform rotate-1"></div>
        <div className="absolute bottom-10 left-0 w-full h-0.5 bg-primary transform -rotate-1"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sf-pro-display font-bold text-foreground mb-4 md:mb-6">
            🏆 Championship Wins
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="f1-card overflow-hidden group hover:border-primary">
              <CardHeader className="pb-4 bg-primary/5">
                <CardTitle className="text-lg sm:text-xl lg:text-2xl font-sf-pro-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  🏁 {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="px-2 py-1 text-xs font-medium border border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="pt-2">
                  <Button
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    variant="outline"
                    size="sm"
                    className="f1-button-outline"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    🏎️ View Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
