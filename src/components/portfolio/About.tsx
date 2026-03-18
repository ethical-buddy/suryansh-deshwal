"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Terminal, Fingerprint, Activity, Award, CheckCircle2 } from "lucide-react";

export function About() {
  const certifications = [
    "CEH v13 (Certified Ethical Hacker)",
    "VAPT Certified (Penetration Testing)",
    "CCNA (Cisco Certified Network Associate)",
    "AppSec Pentester Specialist"
  ];

  const skillGroups = [
    {
      title: "OFFENSIVE_INTEL",
      skills: ["Red Teaming", "Kernel Exploitation", "Web App Pentesting", "Mobile Security", "Network Breaching", "CTF Challenge Creation", "Binary Analysis"]
    },
    {
      title: "DEFENSIVE_CORE",
      skills: ["CIS Benchmarking", "Malware Analysis", "SIEM/SOAR", "System Hardening", "Digital Forensics", "Incident Response", "SCADA Security"]
    },
    {
      title: "SYSTEM_ENGINEERING",
      skills: ["C/C++ Development", "Go Automation", "Rust Protocols", "Kernel Programming", "P2P Infrastructure", "Distributed Crawlers", "Linux Internals"]
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-black/60 cyber-grid" id="about">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-primary/20 bg-primary/5">
              <Fingerprint className="w-5 h-5 text-primary" />
              <span className="text-primary font-mono text-xs tracking-widest uppercase">Subject Profile Loaded</span>
            </div>
            
            <h2 className="text-6xl font-black text-white uppercase leading-none">
              WHO_IS <br />
              <span className="text-primary">S_DESHWAL?</span>
            </h2>
            
            <div className="space-y-6 text-foreground/80 font-mono text-lg leading-relaxed border-l-2 border-primary/30 pl-6">
              <p>
                &gt; I am a dedicated Cybersecurity Researcher and System Architect, currently serving as <span className="text-primary">CTO at Hackitise Labs</span>.
              </p>
              <p>
                &gt; My expertise spans from building India's first on-device physical network CTF (<span className="text-primary">Cybersecure-X</span>) to architecting low-level OS kernels.
              </p>
              <p>
                &gt; Certified expert in <span className="text-white bg-primary/20 px-1">VAPT</span> and <span className="text-white bg-primary/20 px-1">CEH v13</span>, specialized in identifying critical vulnerabilities before they are exploited.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <div key={i} className="flex items-center gap-3 p-3 border border-primary/10 bg-primary/5 hover:border-primary/40 transition-all">
                  <Award className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-xs font-mono font-bold">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <Activity className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-black font-mono tracking-tighter uppercase text-white">SKILL_MANIFEST</h3>
            </div>
            
            {skillGroups.map((group, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 border border-primary/20 bg-black/40 hover:bg-primary/5 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-primary font-mono text-sm tracking-widest">{group.title}</h4>
                  <div className="w-12 h-px bg-primary/20 group-hover:w-20 transition-all" />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-2 text-xs font-mono bg-white/5 border border-white/10 px-3 py-1.5 text-foreground/70 hover:text-primary hover:border-primary transition-all cursor-default"
                    >
                      <CheckCircle2 className="w-3 h-3 text-primary/40" />
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
