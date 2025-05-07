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
             I'm a cybersecurity researcher and low-level systems developer with a focus on ethical hacking, darknet technologies, and decentralized architectures. As leader of the Null Cybersecurity Community and head of the Wipro Centre of Excellence, I design and build tools that push the limits of privacy, security, and system design — from custom crawlers to in-memory exploits. I thrive at the edge of innovation and control.
            </p>
            <p className="text-lg text-muted-foreground">
              When I'm not coding, you can find me [Customising my OS].
              I'm always excited to take on new challenges and learn new technologies.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
