export type CaseStudy = {
  slug: string;
  client: string;
  category: string;
  result: string;
  resultLabel: string;
  img: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "northwind",
    client: "Northwind",
    category: "B2B SaaS",
    result: "+184%",
    resultLabel: "Qualified pipeline in 6 months",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "loom-co",
    client: "Loom & Co",
    category: "DTC Ecommerce",
    result: "3.8x",
    resultLabel: "Return on ad spend",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "vertex",
    client: "Vertex",
    category: "Fintech",
    result: "-42%",
    resultLabel: "Cost per acquisition",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop",
  },
];
