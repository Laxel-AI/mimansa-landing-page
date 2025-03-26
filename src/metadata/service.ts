export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  result: string;
  year: number;
}

export interface KeyService {
  title: string;
  description: string;
}

export interface service {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  keyServices: KeyService[];
  caseStudies: CaseStudy[];
  expertise: string[];
}

export const services: service[] = [
  {
    id: "supreme-court",
    name: "Supreme Court",
    slug: "supreme-court",
    shortDescription:
      "Expert representation and advocacy before India's apex court",
    longDescription: `Our Supreme Court practice represents the pinnacle of legal advocacy in India. With a team of experienced advocates, we handle complex constitutional matters, civil appeals, and significant public interest litigations. Our practitioners have extensive experience appearing before the Supreme Court and have been involved in several landmark judgments that have shaped Indian jurisprudence.`,
    imageUrl:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200",
    keyServices: [
      {
        title: "Constitutional Law",
        description:
          "Handling matters involving interpretation of constitutional provisions and fundamental rights",
      },
      {
        title: "Civil Appeals",
        description:
          "Representing clients in civil appeals from High Courts and tribunals",
      },
      {
        title: "Special Leave Petitions",
        description:
          "Filing and defending Special Leave Petitions under Article 136",
      },
    ],
    caseStudies: [
      {
        id: "sc1",
        title: "Landmark Constitutional Challenge",
        description:
          "Successfully represented a consortium of companies in challenging the constitutional validity of specific provisions of recent economic legislation",
        result: "Favorable judgment leading to significant policy reforms",
        year: 2023,
      },
    ],
    expertise: [
      "Constitutional Law",
      "Civil Appeals",
      "Special Leave Petitions",
      "Public Interest Litigation",
      "Regulatory Appeals",
    ],
  },
  {
    id: "taxation",
    name: "Taxation",
    slug: "taxation",
    shortDescription: "Comprehensive tax advisory and litigation services",
    longDescription: `Our taxation practice combines deep technical knowledge with practical business understanding to provide comprehensive solutions to complex tax issues. We assist clients in direct and indirect tax matters, including GST, international taxation, and transfer pricing, while also representing them before various tax tribunals and courts.`,
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200",
    keyServices: [
      {
        title: "Direct Tax Advisory",
        description:
          "Comprehensive advice on income tax matters and tax planning",
      },
      {
        title: "GST Compliance",
        description:
          "Assistance with GST registration, returns, and compliance",
      },
      {
        title: "International Taxation",
        description:
          "Advisory on cross-border transactions and transfer pricing",
      },
    ],
    caseStudies: [
      {
        id: "tax1",
        title: "Complex Cross-Border Transaction",
        description:
          "Advised on tax implications of a multi-jurisdictional merger involving transfer pricing considerations",
        result: "Successful structuring resulting in optimal tax efficiency",
        year: 2024,
      },
    ],
    expertise: [
      "Direct Taxation",
      "Goods and Services Tax",
      "International Tax",
      "Transfer Pricing",
      "Tax Litigation",
    ],
  },
  {
    id: "company-law",
    name: "Company Law - Insolvency & Real Estate",
    slug: "company-law",
    shortDescription:
      "Expert guidance in corporate law, insolvency, and real estate matters",
    longDescription: `Our Company Law practice provides comprehensive legal solutions in corporate matters, with specialized focus on insolvency resolution and real estate transactions. We guide clients through complex corporate restructurings, insolvency proceedings, and real estate developments, ensuring compliance and optimal business outcomes.`,
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200",
    keyServices: [
      {
        title: "Corporate Restructuring",
        description:
          "Advisory on mergers, acquisitions, and corporate restructuring",
      },
      {
        title: "Insolvency Resolution",
        description: "Representation in IBC proceedings and debt restructuring",
      },
      {
        title: "Real Estate Transactions",
        description:
          "Legal support for property acquisition, development, and RERA compliance",
      },
    ],
    caseStudies: [
      {
        id: "cl1",
        title: "Major Insolvency Resolution",
        description:
          "Successfully represented the resolution professional in a complex insolvency case",
        result:
          "Achieved successful resolution with optimal recovery for creditors",
        year: 2023,
      },
    ],
    expertise: [
      "Corporate Restructuring",
      "Insolvency Resolution",
      "Real Estate",
      "RERA Compliance",
      "Corporate Governance",
    ],
  },
  {
    id: "commercial-litigation",
    name: "Commercial Litigation",
    slug: "commercial-litigation",
    shortDescription: "Strategic litigation management for business disputes",
    longDescription: `Our Commercial Litigation team handles complex business disputes across various forums. We combine strategic thinking with deep industry knowledge to provide effective dispute resolution solutions. Our experience spans commercial contracts, shareholder disputes, and international arbitration.`,
    imageUrl:
      "https://images.unsplash.com/photo-1453945619913-79ec89a82c51?w=1200",
    keyServices: [
      {
        title: "Dispute Resolution",
        description: "Strategic handling of commercial disputes and litigation",
      },
      {
        title: "Arbitration",
        description: "Representation in domestic and international arbitration",
      },
      {
        title: "Mediation",
        description: "Facilitation of alternative dispute resolution",
      },
    ],
    caseStudies: [
      {
        id: "cl1",
        title: "International Commercial Arbitration",
        description:
          "Successfully represented a multinational in a complex commercial arbitration",
        result: "Favorable award with substantial cost recovery",
        year: 2024,
      },
    ],
    expertise: [
      "Commercial Disputes",
      "International Arbitration",
      "Mediation",
      "Contract Enforcement",
      "Shareholder Disputes",
    ],
  },
  {
    id: "startup-advisory",
    name: "Startup Advisory",
    slug: "startup-advisory",
    shortDescription: "Comprehensive legal support for emerging businesses",
    longDescription: `Our Startup Advisory practice provides tailored legal solutions for emerging companies at every stage of their journey. We assist startups with entity formation, funding rounds, regulatory compliance, and intellectual property protection, helping them build strong legal foundations for growth.`,
    imageUrl:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200",
    keyServices: [
      {
        title: "Entity Formation",
        description: "Guidance on business structure and incorporation",
      },
      {
        title: "Funding Support",
        description: "Legal assistance for seed funding to Series rounds",
      },
      {
        title: "Regulatory Compliance",
        description: "Ensuring compliance with relevant regulations and laws",
      },
    ],
    caseStudies: [
      {
        id: "sa1",
        title: "Tech Startup Series A",
        description:
          "Advised a tech startup through their Series A funding round",
        result: "Successfully closed $10M funding with favorable terms",
        year: 2024,
      },
    ],
    expertise: [
      "Company Formation",
      "Funding Rounds",
      "Intellectual Property",
      "Employment Law",
      "Regulatory Compliance",
    ],
  },
];
