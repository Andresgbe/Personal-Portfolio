export type Project = {
  slug: string;
  title: string;
  description: string;
  color: string;
};

// Placeholder data — swap for real projects/categories once defined.
export const projects: Project[] = [
  {
    slug: "proyecto-uno",
    title: "Proyecto Uno",
    description: "Descripción placeholder del proyecto uno.",
    color: "#6366f1",
  },
  {
    slug: "proyecto-dos",
    title: "Proyecto Dos",
    description: "Descripción placeholder del proyecto dos.",
    color: "#22c55e",
  },
  {
    slug: "proyecto-tres",
    title: "Proyecto Tres",
    description: "Descripción placeholder del proyecto tres.",
    color: "#ef4444",
  },
];
