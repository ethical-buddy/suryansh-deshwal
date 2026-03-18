"use client";

import { blogs } from "@/data/blogs";
import Link from "next/link";
import { Terminal, Calendar, Tag, ArrowLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BlogListPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-24 px-4 scanlines cyber-grid">
      <div className="container max-w-6xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:neon-glow-green mb-16 transition-all font-mono font-black uppercase text-sm">
          <ArrowLeft className="w-4 h-4" />
          <span>[TERMINAL_EXIT]</span>
        </Link>

        <header className="mb-24 border-b border-primary/20 pb-12">
          <div className="flex items-center gap-4 mb-4">
            <Terminal className="w-10 h-10 text-primary" />
            <h1 className="text-7xl font-black neon-glow-green uppercase tracking-tighter">
              LOG_FILES
            </h1>
          </div>
          <p className="text-primary/60 font-mono text-lg tracking-widest uppercase">Decrypted knowledge database access authorized</p>
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col bg-black/40 border-2 border-primary/10 hover:border-primary/40 transition-all overflow-hidden"
            >
              {blog.image && (
                <div className="relative h-64 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
                </div>
              )}
              
              <div className="p-8 space-y-6">
                <div className="flex flex-wrap gap-4 items-center text-[10px] font-black font-mono text-primary tracking-widest uppercase">
                  <span className="flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20">
                    <Calendar className="w-3 h-3" />
                    {blog.date}
                  </span>
                  <div className="flex gap-2">
                    {blog.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 hover:border-primary transition-colors cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h2 className="text-3xl font-black uppercase leading-tight group-hover:text-primary transition-colors">
                  {blog.title}
                </h2>
                <p className="text-foreground/60 font-mono text-sm leading-relaxed line-clamp-3">
                  &gt; {blog.excerpt}
                </p>
                
                <Link href={`/blog/${blog.slug}`} className="block pt-4">
                  <button className="flex items-center gap-3 text-primary font-black font-mono uppercase tracking-widest text-sm group/btn">
                    READ_FULL_LOG
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
