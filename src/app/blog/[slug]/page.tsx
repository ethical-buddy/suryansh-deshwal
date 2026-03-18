"use client";

import { blogs } from "@/data/blogs";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Terminal, Cpu, Share2 } from "lucide-react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BlogDetailPage() {
  const params = useParams();
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-background text-primary flex items-center justify-center font-mono">
        <div className="text-center">
          <h1 className="text-8xl font-black mb-4 neon-glow-green uppercase">404</h1>
          <p className="mb-12 text-xl font-bold tracking-widest uppercase">LOG_NOT_FOUND</p>
          <Link href="/blog" className="cyber-button px-10 py-4 text-xl">
            RETURN_TO_BASE
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground py-24 px-4 scanlines cyber-grid transition-colors duration-300">
      <div className="container max-w-5xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-3 text-primary hover:neon-glow-green mb-16 transition-all font-mono font-black uppercase text-sm group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
          <span>[BACK_TO_ARCHIVE]</span>
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card dark:bg-black/60 border-2 border-primary/20 backdrop-blur-md overflow-hidden relative shadow-2xl"
        >
          {blog.image && (
            <div className="relative h-[450px] w-full border-b-2 border-primary/20">
              <Image src={blog.image} alt={blog.title} fill className="object-cover opacity-80 dark:opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex gap-2 mb-4">
                  {blog.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-primary text-black font-black text-[10px] uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-4xl md:text-6xl font-black uppercase leading-none text-white dark:text-primary neon-glow-green tracking-tighter drop-shadow-2xl">
                  {blog.title}
                </h1>
              </div>
            </div>
          )}

          <div className="p-8 md:p-20 space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-8 border-b border-primary/10">
               <div className="flex items-center gap-6 text-[10px] font-black font-mono text-primary uppercase tracking-widest">
                  <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20">
                    <Calendar className="w-4 h-4" />
                    {blog.date}
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 border border-primary/10">
                    <Cpu className="w-4 h-4" />
                    SEC_LOG_v4.2 // READ_OPTIMIZED
                  </div>
               </div>
               <button className="flex items-center gap-2 text-xs font-black font-mono text-secondary hover:text-primary transition-colors border-b border-secondary/20 hover:border-primary">
                 <Share2 className="w-4 h-4" />
                 SHARE_PACKET
               </button>
            </div>

            <div className="blog-post-container">
                <div className="whitespace-pre-wrap">
                  {blog.content}
                </div>
            </div>

            <footer className="mt-20 pt-12 border-t border-primary/10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4 text-xs font-black font-mono text-primary animate-pulse uppercase tracking-widest">
                  <Terminal className="w-5 h-5" />
                  <span>END_OF_TRANSMISSION</span>
                </div>
                <Link href="/blog" className="text-xs font-mono text-secondary hover:text-primary transition-all">
                  &lt; GOTO_LOG_LIST /&gt;
                </Link>
              </div>
            </footer>
          </div>
        </motion.article>
      </div>
    </main>
  );
}
