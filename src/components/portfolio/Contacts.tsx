"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MessageSquare, MapPin, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Contact() {
  const discordLink = "https://discord.gg/bPAAbVka";
  const linkedinLink = "https://www.linkedin.com/in/suryansh-deshwal-ethical-buddy?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";

  return (
    <section className="py-32 relative overflow-hidden bg-background cyber-grid" id="contact">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto border-2 border-primary/30 bg-black/80 p-10 md:p-16 relative overflow-hidden">
          {/* Decorative Corner */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-primary/40 -translate-x-12 -translate-y-12 rotate-45" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-primary/40 translate-x-12 translate-y-12 rotate-45" />

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <div className="flex items-center gap-3 text-primary mb-4">
                  <Zap className="w-6 h-6 animate-bounce" />
                  <span className="font-mono text-sm font-black tracking-widest uppercase">Direct Channel</span>
                </div>
                <h2 className="text-6xl font-black text-white uppercase tracking-tighter mb-6">
                  ESTABLISH <br />
                  <span className="text-primary">CONNECTION</span>
                </h2>
                <p className="text-foreground/70 font-mono text-lg leading-relaxed max-w-md">
                  &gt; Encrypted communication channel for high-level technical inquiries, security consulting, or collaboration.
                </p>
              </div>

              <div className="space-y-6 font-mono">
                <div className="group flex flex-col gap-1 cursor-pointer">
                  <span className="text-[10px] text-primary/60 font-black uppercase">Primary Endpoint</span>
                  <div className="flex items-center gap-4 text-white text-xl font-black group-hover:text-primary transition-colors">
                    <Mail className="w-6 h-6" />
                    <span>suryanshdeshwal@gmail.com</span>
                  </div>
                </div>
                
                <div className="group flex flex-col gap-1 cursor-pointer">
                  <span className="text-[10px] text-primary/60 font-black uppercase">Discord Server</span>
                  <Link href={discordLink} target="_blank" className="flex items-center gap-4 text-white text-xl font-black group-hover:text-primary transition-colors">
                    <MessageSquare className="w-6 h-6" />
                    <span>JOIN_DISCORD</span>
                  </Link>
                </div>

                <div className="group flex flex-col gap-1 cursor-pointer">
                  <span className="text-[10px] text-primary/60 font-black uppercase">Professional Node</span>
                  <Link href={linkedinLink} target="_blank" className="flex items-center gap-4 text-white text-xl font-black group-hover:text-primary transition-colors">
                    <Linkedin className="w-6 h-6" />
                    <span>SURYANSH_DESHWAL</span>
                  </Link>
                </div>
              </div>

              <div className="flex gap-6">
                <Link href="https://github.com/ethical-buddy" target="_blank">
                  <div className="w-14 h-14 border-2 border-primary/20 flex items-center justify-center hover:border-primary hover:bg-primary/10 hover:-translate-y-1 transition-all">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                </Link>
                <Link href={linkedinLink} target="_blank">
                  <div className="w-14 h-14 border-2 border-primary/20 flex items-center justify-center hover:border-primary hover:bg-primary/10 hover:-translate-y-1 transition-all">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </div>
                </Link>
                <Link href={discordLink} target="_blank">
                  <div className="w-14 h-14 border-2 border-primary/20 flex items-center justify-center hover:border-primary hover:bg-primary/10 hover:-translate-y-1 transition-all">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-8 border-2 border-primary/10 bg-black/40"
            >
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black font-mono text-primary uppercase tracking-widest">Caller_ID</label>
                  <input 
                    type="text" 
                    placeholder="ENTER_YOUR_NAME"
                    className="w-full bg-black/50 border-b-2 border-primary/20 p-4 text-base font-mono text-white focus:border-primary outline-none transition-all placeholder:text-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black font-mono text-primary uppercase tracking-widest">Return_Path</label>
                  <input 
                    type="email" 
                    placeholder="ENTER_YOUR_EMAIL"
                    className="w-full bg-black/50 border-b-2 border-primary/20 p-4 text-base font-mono text-white focus:border-primary outline-none transition-all placeholder:text-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black font-mono text-primary uppercase tracking-widest">Payload_Data</label>
                  <textarea 
                    placeholder="WRITE_YOUR_MESSAGE..."
                    rows={4}
                    className="w-full bg-black/50 border-b-2 border-primary/20 p-4 text-base font-mono text-white focus:border-primary outline-none transition-all resize-none placeholder:text-primary/20"
                  />
                </div>
                <Button className="w-full cyber-button py-8 text-xl flex items-center justify-center gap-4 group mt-6">
                  TRANSMIT_PACKET
                  <Send className="w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
