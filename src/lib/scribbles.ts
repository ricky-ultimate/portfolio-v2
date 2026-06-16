export type Scribble = {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  content: string;
};

export type ExternalLink = {
  title: string;
  source: string;
  date: string;
  url: string;
  authored: boolean;
};

export const scribbles: Scribble[] = [
//   {
//     title: "Why I stopped fighting my database",
//     excerpt:
//       "Most backend bugs I've encountered weren't logic errors. They were me disagreeing with Postgres and losing.",
//     date: "June 2026",
//     slug: "why-i-stopped-fighting-my-database",
//     content: `Most backend bugs I've encountered weren't logic errors. They were me disagreeing with Postgres and losing.

// When I first started writing backend systems, I treated the database like a dumb storage layer. Send it data, get data back. The real logic lives in the application, right?

// That worked until it didn't. Race conditions, stale reads, cascading failures — all of it traced back to me not trusting the database to do what it's actually very good at.

// Postgres has transactions, constraints, triggers, and window functions for a reason. The moment I started leaning into those instead of reimplementing them in Python, things got a lot quieter at 2am.`,
//   },
];

export const externalLinks: ExternalLink[] = [
  {
    title: "\"Don't worry, you will understand as you grow older.\"",
    source: "Substack",
    date: "June 2026",
    url: "https://substack.com/home/post/p-202243713",
    authored: false,
  },
];
