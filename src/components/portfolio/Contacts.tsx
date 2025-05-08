"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Copy } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "suryanshdeshwal@gmail.com";

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/ethical-buddy",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/suryansh-deshwal-7372b0262/",
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-background" id="contact">
      <div className="container px-4">
        <Card className="max-w-3xl mx-auto border-primary/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Get In Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center gap-6">
              <p className="text-lg text-muted-foreground text-center">
                I'm always open to new opportunities and collaborations.
                . The real pentesting is NDA signed . to know more about my hacking achievements 
		Feel free to reach out!
              </p>

              <div className="flex items-center gap-3 bg-muted px-4 py-2 rounded-md">
                <Mail className="w-5 h-5 text-primary" />
                <a href={`mailto:${email}`} className="text-primary font-medium hover:underline">
                  {email}
                </a>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleCopy}
                  className="w-6 h-6 text-muted-foreground hover:text-primary"
                >
                  <Copy className="w-4 h-4" />
                </Button>
                {copied && <span className="text-xs text-green-600">Copied</span>}
              </div>

              <div className="flex gap-6 mt-6">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Icon className="w-8 h-8" />
                      <span className="mt-1">{link.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

