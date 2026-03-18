export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  slug: string;
  image?: string;
}

export const blogs: BlogPost[] = [
  {
    id: "1",
    title: "Deep Dive: Building Cybersecure-X Physical CTF",
    date: "2024-12-20",
    excerpt: "How we architected India's first on-device network security simulation featuring SCADA and DMZ zones.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1200",
    content: `
# Architecting Cybersecure-X

Building a physical network CTF requires more than just software; it's about simulating real-world infrastructure. In this project, we focused on three core pillars:

## 1. SCADA Simulation
We utilized specialized industrial protocols to simulate a power grid control system. Any breach in the network would have physical visual feedback.

## 2. DMZ Implementation
The Demilitarized Zone (DMZ) was built to teach participants about layered defense.
\`\`\`bash
# Simulating a basic firewall rule for DMZ
iptables -A FORWARD -i eth0 -o eth1 -p tcp --dport 80 -j ACCEPT
iptables -A FORWARD -i eth0 -o eth1 -m state --state ESTABLISHED,RELATED -j ACCEPT
\`\`\`

## 3. The Physical Aspect
Participants had to physically interact with nodes, making it a unique "on-device" experience.

Stay tuned for more updates on the upcoming version!
    `,
    tags: ["SCADA", "CTF", "Networking"],
    slug: "building-cybersecure-x"
  },
  {
    id: "roadmap-2024",
    title: "Zero to Hero: The Ultimate Cybersecurity & CTF Roadmap",
    date: "2024-03-18",
    excerpt: "A comprehensive technical blueprint for mastering the art of cybersecurity, from foundational networking to advanced binary exploitation and CTF domination.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    content: `
# The Absolute Cybersecurity Roadmap

Cybersecurity is not a destination; it is a continuous process of learning, breaking, and building. If you want to master this field, you need a solid foundation before you ever touch a hacking tool like Nmap or Metasploit.

## Phase 1: The Non-Negotiable Foundations

Before you can break a system, you must understand how it works.

### 1. Networking (The Backbone)
You cannot be a hacker if you don't understand how data travels. Focus on:
- **OSI Model:** Understand every layer.
- **Protocols:** TCP/UDP, IP, ICMP, DNS, HTTP/S, SSH, FTP.
- **Subnetting:** Learn how to read CIDR notation.
- **Resources:** CompTIA Network+ materials, Professor Messer, and CCNA labs.

### 2. Linux Mastery
90% of the world's servers and almost all hacking tools run on Linux.
- **CLI over GUI:** Learn to navigate the terminal exclusively.
- **Permissions:** chmod, chown, and SUID bits.
- **Scripting:** Automate tasks with **Bash** and **Python**.

## Phase 2: Technical Security Concepts

### 1. Web Security (OWASP Top 10)
Most initial entry points are web applications. Master these vulnerabilities:
- **SQL Injection (SQLi):** Manipulating databases.
- **Cross-Site Scripting (XSS):** Injecting scripts into other users' browsers.
- **IDOR:** Accessing data you shouldn't have access to.

### 2. Cryptography
Learn the difference between **Hashing** (MD5, SHA256), **Symmetric Encryption** (AES), and **Asymmetric Encryption** (RSA).

## Phase 3: The CTF Approach (Learning by Doing)

Capture The Flag (CTF) competitions are the best way to practice legally.

### How to approach a CTF Box:
1. **Enumeration:** Find open ports and services (\`nmap -sC -sV <IP>\`).
2. **Exploitation:** Find a vulnerability and gain a shell.
3. **Privilege Escalation:** Move from a low-level user to **root/SYSTEM**.

### Recommended Platforms:
- **TryHackMe:** Great for absolute beginners (structured paths).
- **HackTheBox:** For those who want a real challenge.
- **PicoCTF:** Perfect for high-school and college students.

## Phase 4: Specialization (The Master Level)

Once you have the basics, pick a path:
- **VAPT:** Performing professional penetration tests for companies.
- **Reverse Engineering:** Analyzing malware or binaries to find zero-days.
- **Binary Exploitation (Pwn):** Mastering heap overflows and ROP chains.

\`\`\`c
// A classic buffer overflow example for practice
void vulnerable_function(char *str) {
    char buffer[64];
    strcpy(buffer, str); // No bounds checking!
}
\`\`\`

## Phase 5: Community & Meetups

You shouldn't learn in a vacuum. Networking with other hackers is vital.
- **Null Community:** Join local Null chapters (like **Null Ghaziabad**).
- **OWASP:** Attend their local meetups and webinars.
- **Discord:** Join security servers to collaborate on CTFs.

## Final Advice
Stay curious. Don't be a "script kiddie"—understand the "why" behind every exploit. The goal isn't just to get a flag; it's to understand the system better than its creator.

**Happy Hacking!**
    `,
    tags: ["Roadmap", "Guide", "CTF", "VAPT"],
    slug: "complete-cybersecurity-guide-2024"
  }
];
