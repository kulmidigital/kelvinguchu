export interface ProjectData {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  caseStudyLink?: string; // Optional field for case study link
}

export const projects: ProjectData[] = [
  {
    id: 1,
    category: "Digital Media",
    title: "BananaPay Full Marketing Management",
    description:
      "BananaPay is an international money transfer technology firm based in the United States of America enabling USA citizens send money affordably to over 14 countries globally.",
    image: "/images/case_banana.webp",
    caseStudyLink: "/casestudies/bananapay",
  },
  {
    id: 2,
    category: "Social Media Management",
    title: "Dynamic Optical Social Media",
    description:
      "Dynamic Optical is a Kenyan optical company specializing in a wide range of spectacles & sunglasses.",
    image: "/images/case_dynamic.webp",
    // caseStudyLink: "#",
  },
  {
    id: 3,
    category: "Social Media Management",
    title: "Energizer Mobile Social Media",
    description:
      "Energizer Mobile is the Official Distributor of Energizer Mobile Products and Accessories in Kenya",
    image: "/images/case_energizer.webp",
    // caseStudyLink: "#",
  },
  {
    id: 5,
    category: "Digital Media",
    title: "Omaar Maketplace Photography",
    description:
      "Omaar Marketplace (www.oe.co.ke) is a Kenyan e-commerce platform offering quality products, fast delivery, and responsive customer service.",
    image: "/images/case_omaar.webp",
    // caseStudyLink: "#",
  },
  {
    id: 6,
    category: "Design & Print",
    title: "Haier Kenya Out of Home Assets Design & Print ",
    description: " ",
    image: "/images/case_haeir.webp",
    // caseStudyLink: "#",
  },
  {
    id: 7,
    category: "Design & Print",
    title: "Jehana Food Products Design & Print",
    description: " ",
    image: "/images/case_jehana.webp",
    // caseStudyLink: "#",
  },
  {
    id: 8,
    category: "Marketing",
    title: "Rebune Full Marketing Management",
    description:
      "Rebune is an international homeappliance comapny with an extensive footprint across key African markets.",
    image: "/images/case_rebune.webp",
    // caseStudyLink: "#",
  },
  {
    id: 9,
    category: "Marketing",
    title: "Omaar Marketplace Full Marketing Management",
    description:
      "Omaar Marketplace (www.oe.co.ke) is a Kenyan e-commerce platform offering quality products, fast delivery, and responsive customer service.",
    image: "/images/case_omaarmkt.webp",
    // caseStudyLink: "#",
  },
];
