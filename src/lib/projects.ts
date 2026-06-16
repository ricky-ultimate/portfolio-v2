export type Project = {
  name: string;
  description: string;
  image: string;
  github: string;
  visit?: string;
};

export const projects: Project[] = [
  {
    name: "Convo",
    description:
      "A real-time chat application with advanced room functionality, end-to-end encryption, and a microservice-style backend. Built with TypeScript, PostgreSQL, and WebSockets.",
    image: "/projects/securechat.png",
    github: "https://github.com/ricky-ultimate/convo-backend",
  },
  {
    name: "OyaPay",
    description:
      "Smart Invoicing for African freelancers.",
    image: "/projects/project-two.png",
    github: "https://github.com/ricky-ultimate/oya-pay",
    visit: "https://oya-pay.vercel.app",
  },
  {
    name: "Script Vault",
    description:
      "ScriptVault saves your shell scripts, Python scripts, and executables in a personal vault. Find them by tag, language, or git context. Run from any directory. Sync across machines.",
    image: "/projects/project-three.png",
    github: "https://github.com/ricky-ultimate/scriptvault",
  },
];
