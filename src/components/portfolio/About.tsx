import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
export function About() {
  return (
    <section className="py-20 bg-background" id="about">
      <div className="container px-4">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl">About Me</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg text-muted-foreground">
              👨‍💻 Hey, I'm a cybersecurity researcher & low-level systems dev who lives at the intersection of code, chaos, and control. I specialize in:
              <br />🔒 Ethical Hacking
              <br />🌐 Darknet Infrastructure
              <br />⚙️ Decentralized Architectures
              <br />🧠 In-Memory Exploits & Kernel Shenanigans
	      <br /> Breaching the Network's i connect to.
              <br /><br />
              💣 I'm the founder of the Null Opensecurity Community Ghaziabad and lead the Wipro Centre of Excellence, where I build tools that poke, break, and rebuild digital systems — from stealth crawlers that map the invisible web to rootkit-grade memory-level exploits.
              <br /><br />
              🔥 What Drives Me:
              <br />— Building systems that resist surveillance and centralized control
              <br />— Engineering elegant exploits that blend with the machine
              <br />— Reimagining OS design for maximum privacy and performance
              <br /><br />
              🛠️ Off the Clock?
              <br />I’m probably:
              <br />🧬 Customizing my OS down to the syscall
              <br />💻 Exploring obscure firmware
              <br />🔍 Reverse engineering something I shouldn't have found
              <br /><br />
              Always learning. Always building. Always a step ahead.
            </p>
            <p className="text-lg text-muted-foreground">
              When I'm not coding, you can find me customizing my OS. I'm always excited to take on new challenges and learn new technologies.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

