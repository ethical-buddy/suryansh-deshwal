"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink, Lock, Terminal, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Projects() {
  const projects = [
    {
      title: "Bumbellbee OS",
      description:
        "An operating system based on POSIX standards built completely from scratch for kernel developers & Hackers who are in search for understanding the kernels from the base level.",
      tags: ["C", "Linux", "Assembly", "Security"],
      github: "https://github.com/ethical-buddy/BumbelBee",
      demo: "#",
    },
    {
      title: "VIMGO",
      description:
        "A terminal-based file manager written in Go. Ideal for navigating files quickly in terminal environments. Built for speed, minimalism, and scripting.",
      tags: ["Go", "Linux", "Automation", "Bash"],
      github: "https://github.com/ethical-buddy/Vimgo",
      demo: "#",
      installSteps: [
        "sudo apt install golang -y   # or 'dnf' for Fedora",
        "git clone https://github.com/ethical-buddy/Vimgo.git",
        "cd Vimgo",
        "go build -o vimgo",
        "sudo mv vimgo /usr/local/bin",
      ],
    },
    {
      title: "OS-Benchmarker",
      description:
        "Automated auditing tool that checks for CIS benchmark compliance across multiple OSes. Built for system hardening and audit reporting.",
      tags: ["Go", "CIS", "Operating system"],
      github: "https://github.com/ethical-buddy/SIH24.git",
      demo: "#",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="projects">
      <div className="container px-4">
        <div className="flex items-center gap-2 mb-12">
          <Terminal className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold">Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-primary/20 hover:border-primary/50 transition-colors"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-primary" />
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.installSteps && (
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-sm font-medium mb-2 text-primary">
                      <Download className="w-4 h-4" />
                      Install (Linux):
                    </div>
                    <pre className="bg-muted p-3 text-xs rounded overflow-x-auto whitespace-pre-wrap">
{project.installSteps.join("\n")}
                    </pre>
                  </div>
                )}

                <div className="flex gap-2">
                  <Link href={project.github} target="_blank">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  </Link>
                  <Link href={project.demo} target="_blank">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

