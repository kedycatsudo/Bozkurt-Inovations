export interface Service {
  id: number;
  icon: string;
  title: string;
  headline: string;
  description: string;
  bullets: string[];
}

export const services: Service[] = [
  {
    id: 1,
    icon: "layers",
    title: "Digital Presence & Discovery",
    headline: "Be where your customers are.",
    description:
      "Modern websites and web applications that make a stellar first impression and drive business growth. Fast, mobile-first, SEO-optimized, and beautiful.",
    bullets: [
      "Custom landing pages, business sites, online stores.",
      "SEO best practices built-in from day one.",
      "Effortless content updates for your team.",
    ],
  },
  {
    id: 2,
    icon: "hub",
    title: "Process Automation & Integration",
    headline: "Do more with less.",
    description:
      "Automate routine processes and integrate all your digital tools, freeing you up to focus on what matters most.",
    bullets: [
      "API & CRM integrations, booking systems.",
      "Automated emails and lead captures.",
      "Connect all your apps without manual work.",
    ],
  },
  {
    id: 3,
    icon: "dashboard",
    title: "Custom Tools & Dashboards",
    headline: "Your business, your tools.",
    description:
      "Intuitive dashboards and admin panels that turn your complex data and workflows into simple, actionable interfaces.",
    bullets: [
      "Business analytics in real-time.",
      "Easy-to-use admin portals for non-tech users.",
      "Reduce errors and see your key metrics at a glance.",
    ],
  },
  {
    id: 4,
    icon: "architecture",
    title: "Technical Consulting & Strategy",
    headline: "Set a tech direction that lasts.",
    description:
      "Expert advice and audits to guide your digital decisions. Rescue troubled projects or plan your next big move with clarity and confidence.",
    bullets: [
      "Technology evaluations and roadmaps.",
      "Project audits and turnaround support.",
      "Vendor selection, compliance, and risk assessment.",
    ],
  },
  {
    id: 5,
    icon: "security",
    title: "Quality & Security Engineering",
    headline: "Build on a rock-solid foundation.",
    description:
      "Secure, compliant, and high-performance code and systems, keeping your data and business safe.",
    bullets: [
      "Security audits, pen-testing, SSL upgrades.",
      "Performance optimization and bug fixes.",
      "Accessibility and privacy compliance.",
    ],
  },
  {
    id: 6,
    icon: "support_agent",
    title: "Continuous Support & Growth",
    headline: "Your tech partner as you evolve.",
    description:
      "Ongoing maintenance, support, and enhancements to keep your technology ahead of the curve as your business grows.",
    bullets: [
      "Proactive updates and maintenance.",
      "Feature enhancements as you grow.",
      "Always-available troubleshooting and support.",
    ],
  },
];
