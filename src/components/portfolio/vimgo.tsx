"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Terminal, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function VimgoPage() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 max-w-3xl mx-auto">
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-2">
              <Terminal className="w-6 h-6 text-primary" />
              VIMGO - Terminal File Manager
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              <strong>VIMGO</strong> is a terminal-based file manager written in Go. It’s built for power users who prefer navigating files with keyboard shortcuts in the terminal. Inspired by Vim, it's fast, efficient, and scriptable.
            </p>

            <h3 className="text-xl font-semibold">⚙️ Installation</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-lg">Fedora</h4>
                <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
{`sudo dnf install golang -y
git clone https://github.com/ethical-buddy/Vimgo.git
cd Vimgo
go build -o vimgo
sudo mv vimgo /usr/local/bin`}
                </pre>
              </div>

              <div>
                <h4 className="font-medium text-lg">Debian/Ubuntu</h4>
                <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
{`sudo apt update
sudo apt install golang -y
git clone https://github.com/ethical-buddy/Vimgo.git
cd Vimgo
go build -o vimgo
sudo mv vimgo /usr/local/bin`}
                </pre>
              </div>
            </div>

            <h3 className="text-xl font-semibold">❓ Why Use VIMGO?</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Minimalist terminal interface for fast navigation</li>
              <li>Built with Go — lightweight binary and fast execution</li>
              <li>Ideal for SSH environments, scripting, or headless setups</li>
              <li>No runtime dependencies once built</li>
            </ul>

            <div className="pt-6 flex justify-end">
              <Link href="/#projects">
                <Button variant="outline" className="flex items-center gap-2">
                  Back to Projects <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

