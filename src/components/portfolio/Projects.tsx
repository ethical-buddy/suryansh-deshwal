
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink, Lock, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Projects() {
  const projects = [
    {
      title: "Bumbellbee OS",
      description: "An operating system based on POSIX standards built completely from scratch for kernel developers & Hackers who are in search for understanding the kernels from the base level. ",
      tags: ["C", "Linux", ,"Assembly" ,"Security"],
      github: "https://github.com/ethical-buddy/BumbelBee",
      demo: "#"
    },
    {
      title: "VIMGO",
      description: "VIMGO : A Terminal-Based File Manager Overview FileManager is a terminal-based file manager written in Go. It provides a simple and intuitive way to navigate and manage files and directories in a terminal environment.",
      tags: ["Go", "Linux", "Automation" , "Bash"],
      github: "https://github.com/ethical-buddy/Vimgo",
      demo: "#"
    },
    {
      title: "OS-Benchmarker",
      description: "Custom bootloader and kernel implementation",
      tags: ["GO", "CIS", "Operating system" ],
      github: "https://github.com/ethical-buddy/SIH24.git",
      demo: "#"
    }
  ]

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="projects">
      <div className="container px-4">
        <div className="flex items-center gap-2 mb-12">
          <Terminal className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold">Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-primary/20 hover:border-primary/50 transition-colors">
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
                    <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

