"use client";

import { Button } from "@/components/ui/button"
import { Terminal, Shield, Code2, Cpu } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"
import GitHubCalendar from "react-github-calendar"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "Ethical Hacker & OS Developer"

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
    <section className="min-h-screen flex items-center justify-center matrix-bg">
      <div className="container px-4 py-16 space-y-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 justify-between">
          <div className="text-center lg:text-left space-y-8 flex-1">
            <div className="flex justify-center lg:justify-start gap-4 mb-6">
              <Terminal className="w-8 h-8 text-primary animate-pulse" />
              <Shield className="w-8 h-8 text-primary animate-pulse" />
              <Code2 className="w-8 h-8 text-primary animate-pulse" />
              <Cpu className="w-8 h-8 text-primary animate-pulse" />
            </div>
            <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl glitch">
              <span className="text-primary">&gt; </span>
              SURYANSH DESHWAL
            </h1>
            <p className="text-xl text-primary font-mono terminal-text">
              {text}_
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
            </div>
          </div>
          
          <div className="relative flex-shrink-0">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/50 relative">
              {/* Replace the src with your photo URL */}
              <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm"></div>
              <Image
                src="https://media.licdn.com/dms/image/v2/D5635AQGtuPUnbC4NuQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1727677380949?e=1747162800&v=beta&t=OmIzRLyIeY5KqFxkcMHuekcBHGBOp83yNMd6rks-8kc"
                alt="Profile Photo"
                width={256}
                height={256}
                className="object-cover"
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
              fontSize={12}
              blockSize={12}
              blockMargin={4}
              style={{
                color: "var(--foreground)",
                margin: "0 auto"
              }}
            />
          </div>
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

