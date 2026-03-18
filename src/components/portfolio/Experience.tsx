"use client";

import { motion } from "framer-motion";
import { History, Cpu, Binary, Workflow, Network, Briefcase } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "CTO",
      company: "Hackitise Labs",
      period: "PRESENT",
      description: "Driving technical strategy and R&D for advanced security solutions. Leading the development of Cybersecure-X, India's first on-device physical network CTF featuring SCADA, DMZ, and realistic threat landscapes.",
      icon: Cpu,
      isCore: true
    },
    {
      title: "Intern",
      company: "ROCKWALLET",
      period: "RECENT",
      description: "Gained hands-on experience in fintech security and crypto-infrastructure audits. Contributed to secure code reviews and vulnerability research.",
      icon: Briefcase,
      isCore: false
    },
    {
      title: "Head – Wipro Centre of Cybersecurity",
      company: "KIET Group of Institutions",
      period: "DEC-2024 // PRESENT",
      description: "Spearheading offensive security research. Architecting complex red-team simulations and mentoring in exploit development.",
      icon: Binary,
      isCore: false
    },
    {
      title: "Co-Lead",
      company: "Null Ghaziabad",
      period: "JAN-2024 // PRESENT",
      description: "Organizing vulnerability research meetups and mentoring peers in ethical hacking and low-level system internals.",
      icon: Network,
      isCore: false
    },
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden scanlines cyber-grid" id="experience">
      <div className="container px-4">
        <div className="flex flex-col items-center mb-20">
          <div className="flex items-center gap-4 mb-4">
            <History className="w-8 h-8 text-primary animate-pulse" />
            <h2 className="text-5xl font-black neon-glow-green uppercase tracking-tighter">SERVICE_LOG</h2>
          </div>
          <div className="h-px w-48 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2 hidden md:block" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-background border-2 border-primary rounded-none -translate-x-1/2 top-0 z-10 hidden md:block shadow-[0_0_15px_rgba(0,255,120,0.5)] rotate-45" />

                <div className="flex-1 md:w-1/2 group">
                  <div className={`p-8 border-l-4 border-primary bg-primary/5 hover:bg-primary/10 transition-all relative overflow-hidden ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}>
                    {exp.isCore && (
                      <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-black font-mono text-[10px] font-bold">
                        CORE_OP
                      </div>
                    )}
                    
                    <div className={`mb-4 flex items-center gap-4 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                      <div className="p-3 border border-primary/20 bg-primary/5">
                        <exp.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-primary font-bold tracking-widest block">
                          [{exp.period}]
                        </span>
                        <h3 className="text-2xl font-black text-white uppercase group-hover:text-primary transition-colors leading-none">
                          {exp.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-primary text-sm font-mono font-bold mb-4 bg-primary/10 inline-block px-2">
                      @ {exp.company}
                    </p>
                    
                    <p className="text-foreground/70 text-sm leading-relaxed font-mono">
                      &gt; {exp.description}
                    </p>
                  </div>
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
