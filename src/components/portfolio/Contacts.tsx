
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://www.linkedin.com/in/suryansh-deshwal-7372b0262/"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/suryansh-deshwal-7372b0262/"
    },
  ]

  return (
    <section className="py-20 bg-background" id="contact">
      <div className="container px-4">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl">Get In Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center gap-6">
              <p className="text-lg text-muted-foreground text-center">
                I'm always open to new opportunities and collaborations.
                Feel free to reach out!
              </p>
              <Button className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>suryanshdeshwal@gmail.com</span>
              </Button>
              <div className="flex gap-4 mt-6">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  )
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

