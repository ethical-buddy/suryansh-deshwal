import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Experience() {
  const experiences = [
    {
      title: "Head – Wipro Centre of Cybersecurity",
      company: "KIET Group of Institutions",
      period: "December-2024 – Present",
      description:
        "Leading cybersecurity initiatives, building red-blue team simulations, and mentoring students in advanced exploit development and digital defense."
    },
    {
      title: "R&D Intern",
      company: "Hackitise Labs",
      period: "Dec-2024 – March-2025",
      description:
        "Worked on research for a CTI (Cyber Threat Intelligence) platform, focused on SDN (Software Defined Networking) and building automated deployment software."
    },
    {
      title: "Co-Lead",
      company: "Null Ghaziabad",
      period: "Jan-2024 – Present",
      description:
        "Organizing workshops, mentoring peers, and pushing deep research in offensive security, vulnerability research, and ethical hacking."
    },
  ]

  return (
    <section className="py-20 bg-secondary/20" id="experience">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="grid gap-6 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{exp.title}</span>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </CardTitle>
                <p className="text-primary">{exp.company}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

