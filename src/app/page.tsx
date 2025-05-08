import Head from "next/head"
import { Hero } from "@/components/portfolio/Hero"
import { About } from "@/components/portfolio/About"
import { Experience } from "@/components/portfolio/Experience"
import { Projects } from "@/components/portfolio/Projects"
import { Contact } from "@/components/portfolio/Contacts"

export default function Home() {
  return (
    <>
      <Head>
        <title>SURYANSH DESHWAL - Ethical Hacker & OS Developer</title>
        <meta name="description" content="Cybersecurity expert and low-level developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Hidden Meta Tags */}
        <meta name="hack-the-planet" content="Flag{You_wont_get_anything}    Go back" />
        <meta name="security-level" content="maximum" />
      </Head>

      <main className="min-h-screen bg-background text-foreground">
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Contact />
      </main>
    </>
  )
}

