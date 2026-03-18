"use client";

import { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon } from "lucide-react";

export function Terminal() {
  const [history, setHistory] = useState<string[]>([
    "Welcome to S-DESHWAL Terminal v4.0.2",
    "Initializing secure kernel link...",
    "Status: AUTHORIZED",
    "Type 'help' for available commands."
  ]);
  const [input, setInput] = useState("");
  const [challengeActive, setChallengeActive] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmdInput = input.trim();
    const parts = cmdInput.toLowerCase().split(" ");
    const cmd = parts[0];
    const args = parts.slice(1);
    
    let response: string | string[] = "";

    if (challengeActive) {
      if (cmd === "solve") {
        if (args[0] === "cyberx") {
          response = [
            "DECRYPTION SUCCESSFUL!",
            "FLAG: FLAG{LOW_LEVEL_MASTER}",
            "MESSAGE: If you need a Session over low level or cybersecurity, send this flag over Discord (https://discord.gg/bPAAbVka)!"
          ];
          setChallengeActive(false);
        } else {
          response = "INCORRECT_KEY. Try again or type 'exit' to cancel.";
        }
      } else if (cmd === "exit") {
        response = "Challenge aborted.";
        setChallengeActive(false);
      } else {
        response = "Challenge in progress. Use 'solve <result>' or 'exit'.";
      }
    } else {
      switch (cmd) {
        case "help":
          response = "Available: about, skills, certs, challenge, clear";
          break;
        case "about":
          response = "Suryansh Deshwal: CTO @ Hackitise Labs. Expert in Binary Exploitation & Reverse Engineering. Trained 100+ students in advanced security.";
          break;
        case "skills":
          response = "VAPT, Reverse Engineering, Binary Exploitation, Kernel Dev, Malware Analysis, C/C++, Go, Rust.";
          break;
        case "certs":
          response = "CEH v13, CCNA, AppSec Pentester, Certified VAPT.";
          break;
        case "challenge":
          setChallengeActive(true);
          response = [
            "REVERSING_CHALLENGE_LOADED:",
            "Decode this hex to continue: 43 79 62 65 72 58",
            "Command: solve <decoded_string>"
          ];
          break;
        case "clear":
          setHistory([]);
          setInput("");
          return;
        default:
          response = `Command not found: ${cmd}`;
      }
    }

    const newLines = Array.isArray(response) ? response : [response];
    setHistory([...history, `> ${cmdInput}`, ...newLines]);
    setInput("");
  };

  return (
    <div className="w-full max-w-2xl mx-auto terminal-window font-mono text-sm shadow-2xl">
      <div className="bg-muted px-4 py-2 flex items-center justify-between border-b border-primary/20">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-4 h-4 text-primary" />
          <span className="text-xs uppercase tracking-widest text-primary/80">SYSTEM_SHELL</span>
        </div>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
        </div>
      </div>
      <div 
        ref={scrollRef}
        className="h-64 overflow-y-auto p-4 space-y-1 bg-black/60 custom-scrollbar"
      >
        {history.map((line, i) => (
          <div key={i} className={line.startsWith(">") ? "text-primary" : line.includes("FLAG") ? "text-yellow-400 font-bold" : "text-foreground/80"}>
            {line}
          </div>
        ))}
        <form onSubmit={handleCommand} className="flex items-center gap-2">
          <span className="text-primary">$</span>
          <input
            autoFocus
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none outline-none flex-1 text-primary"
            placeholder={challengeActive ? "solving challenge..." : ""}
          />
        </form>
      </div>
    </div>
  );
}
