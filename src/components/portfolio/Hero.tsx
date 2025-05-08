"use client";

import { Button } from "@/components/ui/button"
import { Terminal, Shield, Code2, Cpu } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"
import GitHubCalendar from "react-github-calendar"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "Ethical Hacker ,Cybersecurity Researcher & OS Developer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center matrix-bg relative">
      {/* Background Video (Optional) */}
      {/* <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="/background-video.mp4" type="video/mp4" />
      </video> */}

      <div className="container px-4 py-16 space-y-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 justify-between">
          <div className="text-center lg:text-left space-y-8 flex-1">
            <div className="flex justify-center lg:justify-start gap-4 mb-6">
              <Terminal className="w-8 h-8 text-primary animate-pulse hover:scale-110 transition-all duration-200 ease-in-out" />
              <Shield className="w-8 h-8 text-primary animate-pulse hover:scale-110 transition-all duration-200 ease-in-out" />
              <Code2 className="w-8 h-8 text-primary animate-pulse hover:scale-110 transition-all duration-200 ease-in-out" />
              <Cpu className="w-8 h-8 text-primary animate-pulse hover:scale-110 transition-all duration-200 ease-in-out" />
            </div>
            <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl glitch">
              <span className="text-primary">&gt; </span>
              SURYANSH DESHWAL
            </h1>
            <p className="text-xl text-primary font-mono terminal-text">
              {text}<span className="text-primary animate-pulse">_</span>
            </p>
            
            {/* CTA Button */}
            <Button variant="outline" className="mt-8 text-xl border-primary text-primary hover:bg-primary hover:text-white transition-all">
              Explore My Work below :) 
            </Button>
          </div>

          <div className="relative flex-shrink-0">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/50 relative">
              <Image
                src="/profile.png"
                alt="Profile Photo"
                width={100}
                height={200}
                className="object-cover w-full h-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-xl"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-4">
          <h2 className="text-2xl font-bold text-center mb-6">GitHub Contributions</h2>
          <div className="bg-card rounded-lg p-6 border border-primary/20">
            <GitHubCalendar
              username="ethical-buddy"
              colorScheme="dark"
              fontSize={15}
              blockSize={14}
              blockMargin={4}
              style={{
                color: "var(--foreground)",
                margin: "0 auto"
              }}
            />
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="flex justify-center mt-16">
          <span className="text-xl text-primary animate-bounce">
            ⬇️ Scroll Down
          </span>
        </div>
        
        {/* Hidden Message in HTML Comment */}
        {/* 
          Congratulations hacker! You found a hidden message.
          Flag{y0u_4r3_4_r34l_h4ck3r}
          Try checking the robots.txt file for more surprises!
        */}
      </div>
    </section>
  )
}

