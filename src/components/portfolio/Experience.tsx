
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Experience() {
  const experiences = [
    {
      title: "R&D intern",
      company: "Hackitise labs",
      period: "DEC-2024 - March-2025",
      description: "Worked on research for a CTI software , working in SDN technologies and building a deployment software"
    },
    {
      title: "CO-Lead",
      company: "Null Ghaziabad",
      period: "Jan-2024 - Present",
      description: "organizing hands-on workshops, mentoring peers, and driving advanced research in ethical hacking and system security."
    }
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

