"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Cpu, Zap, Binary, ShieldAlert, Database, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function Projects() {
  const projects = [
    {
      title: "Cybersecure-X",
      description: "India's first physical network CTF. Full-stack simulation of SCADA systems, DMZ environments, and industrial protocols.",
      tags: ["Network Security", "SCADA", "CTF", "DMZ"],
      github: "https://github.com/ethical-buddy",
      type: "CORE_SEC_INFRA",
      status: "STABLE"
    },
    {
      title: "Bumbellbee OS",
      description: "Custom-built POSIX-compliant kernel for security research. Features advanced memory isolation and custom syscall handling.",
      tags: ["C", "Assembly", "Kernel", "Security"],
      github: "https://github.com/ethical-buddy/BumbelBee",
      type: "KERNEL_MODULE",
      status: "BETA"
    },
    {
      title: "VIMGO",
      description: "High-performance TUI file manager written in Go. Optimized for speed, low-latency navigation, and power-user workflows.",
      tags: ["Go", "Linux", "TUI", "Automation"],
      github: "https://github.com/ethical-buddy/Vimgo",
      type: "SYS_UTILITY",
      status: "PRODUCTION",
      install: "sudo dnf copr enable ethical-buddy/vimgo"
    },
    {
      title: "TORONS",
      description: "Distributed P2P web crawler for OSINT research. Built for high-volume data extraction and decentralized indexing.",
      tags: ["Python", "P2P", "OSINT", "Distributed"],
      github: "https://github.com/ethical-buddy/TORONS",
      type: "NET_CRAWLER",
      status: "RESEARCH"
    }
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden" id="projects">
      <div className="container px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24 border-b border-primary/10 pb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <Database className="w-8 h-8 animate-pulse" />
              <span className="font-mono text-sm font-black tracking-[0.3em] uppercase">Authorized Project Access</span>
            </div>
            <h2 className="text-7xl font-black neon-glow-green uppercase tracking-tighter leading-none">
              PROJECTS_<span className="text-white/20">DB</span>
            </h2>
          </div>
          <Link href="https://github.com/ethical-buddy" target="_blank">
            <Button className="cyber-button py-10 px-12 text-2xl group border-2">
              <Github className="w-6 h-6 mr-4" />
              MIRROR_ALL
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <Card className="glass-card rounded-none relative overflow-hidden group-hover:bg-primary/5 transition-all duration-700">
                <div className="scanner-line group-hover:block hidden" />
                
                <div className="absolute top-0 right-0 flex">
                  <div className="px-4 py-1 bg-primary/20 text-primary text-[10px] font-black border-l border-b border-primary/30 uppercase tracking-widest">
                    {project.status}
                  </div>
                </div>

                <div className="p-10 space-y-8">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-primary/60 font-mono text-[10px] font-black uppercase">
                        <Binary className="w-3 h-3" />
                        ID: {project.type}
                      </div>
                      <CardTitle className="text-4xl font-black text-white group-hover:text-primary transition-colors leading-tight uppercase">
                        {project.title}
                      </CardTitle>
                    </div>
                    <Cpu className="w-10 h-10 text-primary opacity-20 group-hover:opacity-100 transition-all duration-500 rotate-12 group-hover:rotate-0" />
                  </div>

                  <p className="text-foreground/60 font-mono text-lg leading-relaxed border-l-2 border-primary/20 pl-6 group-hover:border-primary transition-colors duration-500 italic">
                    &quot;{project.description}&quot;
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-black border border-primary/10 bg-black/40 px-4 py-1.5 text-primary/40 group-hover:text-primary group-hover:border-primary/40 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.install && (
                    <div className="bg-black/80 border border-primary/20 p-6 font-mono group-hover:border-primary/40 transition-all relative">
                      <div className="absolute top-0 right-0 p-2 opacity-20">
                        <ShieldAlert className="w-4 h-4 text-primary" />
                      </div>
                      <div className="text-[10px] font-black text-primary/60 mb-3 uppercase tracking-widest">
                        System Deployment CMD:
                      </div>
                      <code className="text-sm text-primary break-all block">{project.install}</code>
                    </div>
                  )}

                  <div className="pt-6">
                    <Link href={project.github} target="_blank">
                      <Button variant="outline" className="w-full border-2 border-primary/20 hover:bg-primary hover:text-black h-16 text-lg font-black uppercase rounded-none tracking-widest transition-all flex items-center justify-between px-10">
                        ACCESS_SOURCE_CODE
                        <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
                
                {/* Decorative Tech Elements */}
                <div className="absolute bottom-2 right-2 text-[8px] font-mono text-primary/10 select-none">
                  0x7F4A2B // v4.0.0
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
