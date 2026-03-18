"use client";

import { Button } from "@/components/ui/button";
import { Terminal as TerminalIcon, Shield, Code2, Cpu, ExternalLink, BookOpen, Activity } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";
import Link from "next/link";
import { Terminal } from "./Terminal";

export function Hero() {
  const [text, setText] = useState("");
  const fullText = "SYSTEM_ARCHITECT // VAPT_CERTIFIED // CEH_v13";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background scanlines cyber-grid py-20">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 opacity-50" />
      
      <div className="container px-4 space-y-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-10 flex-1"
          >
            <div className="flex justify-center lg:justify-start gap-4 mb-6">
              {[TerminalIcon, Shield, Code2, Cpu].map((Icon, i) => (
                <div key={i} className="p-3 border border-primary/20 bg-primary/5 hover:bg-primary/20 transition-all cursor-crosshair">
                  <Icon className="w-6 h-6 text-primary animate-pulse-soft" />
                </div>
              ))}
            </div>
            
            <div className="space-y-2">
              <h1 className="text-6xl font-black tracking-tighter sm:text-8xl neon-glow-green uppercase">
                SURYANSH
                <br />
                <span className="text-primary/80">DESHWAL</span>
              </h1>
              <div className="h-1 w-24 bg-primary mx-auto lg:mx-0" />
            </div>

            <p className="text-xl text-primary font-mono tracking-widest bg-primary/5 inline-block px-4 py-2 border-l-4 border-primary">
              &gt; {text}<span className="animate-pulse terminal-cursor"></span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
              <Link href="#projects">
                <Button className="cyber-button px-10 py-8 text-xl group w-full sm:w-auto">
                  EXPLORE_CORE
                  <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black px-10 py-8 text-xl transition-all duration-300 w-full sm:w-auto font-mono">
                  DECRYPT_BLOGS
                  <BookOpen className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <Terminal />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-10 py-10"
        >
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-2xl font-black font-mono text-primary flex items-center gap-3">
              <Activity className="w-6 h-6" />
              NEURAL_CONTRIBUTIONS
            </h2>
            <div className="h-px w-64 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
          
          <div className="w-full max-w-5xl bg-black/40 backdrop-blur-sm p-10 border border-primary/20 hover:border-primary/40 transition-all flex justify-center overflow-x-auto">
            <GitHubCalendar
              username="ethical-buddy"
              colorScheme="dark"
              theme={{
                dark: ['#0a0a0a', '#004d26', '#00994d', '#00cc66', '#00ff78'],
              }}
              fontSize={14}
              blockSize={14}
              blockMargin={5}
            />
          </div>
        </motion.div>

        <div className="flex justify-center">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-primary/60 font-mono text-xs cursor-pointer flex flex-col items-center gap-2"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>[SYS_DESCEND]</span>
            <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
