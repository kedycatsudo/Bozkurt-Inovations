export interface CyleLap {
  id: number;
  title: string;
  headline: string;
  description: string;
  arrowRotate: string;
}

export const Cycles: CyleLap[] = [
  {
    id: 1,
    title: "Discovery",
    headline: "We start with listening",
    description:
      "Define your project’s scope and align every requirement to your unique business goals, ensuring we solve the right problem for you from day one.",
    arrowRotate: "rotate-0",
  },
  {
    id: 2,
    title: "Schematics",
    headline: "Clarity before code",
    description:
      "Design robust system architecture and user-friendly UI patterns—on paper and in wireframes—before we write a single line of code. This prevents costly changes later and maximizes usability.",
    arrowRotate: "rotate-[72deg]",
  },
  {
    id: 3,
    title: "Assembly",
    headline: "Iterative, rapid progress.",
    description:
      "High-velocity development cycles with weekly demo deployments and continuous feedback loops. You see real progress in days, not months, and keep your project on track.",
    arrowRotate: "rotate-[144deg]",
  },
  {
    id: 4,
    title: "Deployment",
    headline: "Launch with confidence.",
    description:
      "Final optimizations, automated testing, and seamless migration to production. We ensure your product is reliable, secure, and ready for real users, with no last-minute surprises.",
    arrowRotate: "rotate-[216deg]",
  },
  {
    id: 5,
    title: "Support & Growth",
    headline: "Long-term partnership.",
    description:
      "After launch, I provide ongoing updates, monitoring, and feature enhancements as your business grows—so your tech never holds you back.",
    arrowRotate: "rotate-[288deg]",
  },
];
