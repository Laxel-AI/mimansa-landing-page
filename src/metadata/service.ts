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
    id: "dispute-resolution",
    name: "Dispute Resolution",
    slug: "dispute-resolution",
    shortDescription:
      "Strategic representation in complex civil and commercial disputes",
    longDescription: `With a deep understanding of industry-specific challenges and evolving legal frameworks, Mimansa delivers strategic solutions to help clients navigate disputes effectively and protect their interests. Our Dispute Resolution Team operates in close collaboration with each specialized practice area, ensuring a seamless approach to litigation and dispute management. This integrated strategy becomes particularly crucial as cases advance to higher judicial forums, including the High Courts and the Supreme Court of India, where we offer robust representation and strategic advocacy. We are dedicated to achieving best possible outcomes through litigation, arbitration, and alternative dispute resolution (ADR) mechanisms. Our approach combines legal expertise with a thorough understanding of regulatory and commercial implications, allowing us to craft strong arguments and effective resolutions for clients across diverse industries.`,
    imageUrl:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200",
    keyServices: [
      {
        title: "Commercial Litigation",
        description:
          "Representation in complex commercial disputes before courts at all levels, including High Courts and the Supreme Court of India",
      },
      {
        title: "Arbitration",
        description:
          "Expert representation in domestic and international arbitration proceedings across various institutional rules and frameworks",
      },
      {
        title: "Alternative Dispute Resolution",
        description:
          "Facilitation of mediation, conciliation, and other ADR mechanisms to achieve efficient and cost-effective resolutions",
      },
      {
        title: "Regulatory Investigations",
        description:
          "Strategic guidance and representation during regulatory investigations and enforcement proceedings",
      },
    ],
    caseStudies: [
      {
        id: "dr1",
        title: "IPL Scam Resolution",
        description:
          "Successfully represented clients in complex litigation related to the IPL scam, involving intricate regulatory and commercial issues",
        result:
          "Favorable outcome protecting client interests with strategic legal positioning",
        year: 2023,
      },
      {
        id: "dr2",
        title: "PMC-HDIL Scam",
        description:
          "Complex representation in high-profile financial scam with multiple stakeholders and regulatory considerations",
        result:
          "Effective resolution safeguarding client's legal position in a challenging regulatory environment",
        year: 2022,
      },
      {
        id: "dr3",
        title: "Delhi Modern Housing Co-operative Case",
        description:
          "Handled intricate dispute regarding regularization of contractual services in cooperative housing society",
        result:
          "Successfully resolved contractual irregularities with favorable terms for the client",
        year: 2024,
      },
    ],
    expertise: [
      "Commercial Disputes",
      "Civil Litigation",
      "Supreme Court Practice",
      "Arbitration",
      "Alternative Dispute Resolution",
      "Regulatory Compliance",
    ],
  },
  {
    id: "taxation",
    name: "Taxation",
    slug: "taxation",
    shortDescription: "Comprehensive tax advisory and litigation services",
    longDescription: `Our Tax team is a dynamic blend of seasoned lawyers and qualified Chartered Accountants, bringing together legal expertise and financial acumen to provide comprehensive tax advisory services across industries. We specialize in offering strategic solutions tailored to the unique needs of businesses, ensuring compliance with tax laws while optimizing financial efficiency. With a deep understanding of direct and indirect taxation frameworks, our team assists clients in navigating complex regulatory landscapes, mitigating tax risks, and structuring transactions in a tax-efficient manner. Whether it's corporate taxation, goods and services tax (GST), international tax advisory, or tax litigation, we provide end-to-end support at every stage.`,
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200",
    keyServices: [
      {
        title: "Tax Compliance & Advisory",
        description:
          "Helping businesses adhere to statutory requirements, optimize tax liabilities, and structure operations efficiently",
      },
      {
        title: "Tax Litigation & Dispute Resolution",
        description:
          "Representing clients in tax disputes before authorities, tribunals, and courts, leveraging our legal expertise to achieve favorable outcomes",
      },
      {
        title: "Corporate & Transactional Tax Planning",
        description:
          "Structuring mergers, acquisitions, and business reorganizations to maximize tax benefits while ensuring legal compliance",
      },
      {
        title: "Indirect Taxation & GST Advisory",
        description:
          "Providing guidance on GST applicability, compliance, filings, and dispute resolution under the GST framework",
      },
      {
        title: "International Tax & Cross-Border Transactions",
        description:
          "Advising multinational businesses on transfer pricing, double taxation avoidance, and international tax structuring",
      },
    ],
    caseStudies: [
      {
        id: "tax1",
        title: "C-form Portal Disputes",
        description:
          "Successfully represented clients in disputes related to C-forms procurements in inter-state sales where e-governance portals had technical issues",
        result:
          "Favorable judgment acknowledging technical limitations and protecting client's tax positions",
        year: 2023,
      },
      {
        id: "tax2",
        title: "Extension of Export Benefits",
        description:
          "Represented downstream export chain operators in securing export benefits through complex regulatory frameworks",
        result:
          "Successfully secured export benefits, creating valuable precedent for similar cases",
        year: 2024,
      },
    ],
    expertise: [
      "Direct Taxation",
      "Goods and Services Tax (GST)",
      "International Tax",
      "Tax Litigation",
      "Transfer Pricing",
      "Compliance & Risk Management",
    ],
  },
  {
    id: "insolvency-restructuring",
    name: "Insolvency & Restructuring",
    slug: "insolvency-restructuring",
    shortDescription:
      "Strategic solutions for businesses navigating financial challenges",
    longDescription: `Mimansa specializes in delivering strategic solutions for businesses navigating bankruptcy and insolvency challenges. Our approach focuses on providing tailored advice and actionable strategies to minimize risks and secure favorable outcomes. Our Insolvency & Restructuring team has provided advisory to various creditors, debtors, guarantors, directors, insolvency professionals, and resolution applicants regarding restructuring, liquidation, and winding-up matters under the Indian Insolvency & Bankruptcy Code. From initial evaluations to restructuring strategies and debt negotiations, we offer comprehensive bankruptcy services, guiding clients seamlessly through every stage of the insolvency process.`,
    imageUrl:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200",
    keyServices: [
      {
        title: "Insolvency Resolution Process",
        description:
          "Guiding clients through the Corporate Insolvency Resolution Process (CIRP) under the Insolvency and Bankruptcy Code",
      },
      {
        title: "Creditor Representation",
        description:
          "Representing financial and operational creditors in insolvency proceedings to maximize recovery and protect interests",
      },
      {
        title: "Debtor Advisory",
        description:
          "Advising corporate debtors on restructuring options, insolvency proceedings, and strategies for business continuity",
      },
      {
        title: "Resolution Applicant Support",
        description:
          "Assisting potential investors and resolution applicants in evaluating and acquiring distressed assets through the insolvency process",
      },
    ],
    caseStudies: [
      {
        id: "ir1",
        title: "Gupta Coal Litigation on Liquidator's Powers",
        description:
          "Landmark case establishing the scope and limitations of liquidator's powers in corporate insolvency resolution",
        result:
          "Precedent-setting judgment clarifying liquidator authority in complex resolution cases",
        year: 2023,
      },
      {
        id: "ir2",
        title: "Mass Scam Insolvency Litigation",
        description:
          "Represented stakeholders in complex insolvency proceedings arising from financial fraud cases",
        result:
          "Structured resolution protecting legitimate stakeholders while addressing regulatory concerns",
        year: 2022,
      },
    ],
    expertise: [
      "Corporate Debt Restructuring",
      "Insolvency Resolution",
      "Liquidation Proceedings",
      "Distressed Asset Acquisition",
      "Creditor Committee Representation",
      "Bankruptcy Advisory",
    ],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    slug: "real-estate",
    shortDescription:
      "Comprehensive legal solutions for real estate transactions and disputes",
    longDescription: `Our Real Estate team has worked on some of the largest, most prominent and complex engagements for a broad spectrum of clients such as land owners, developers, construction companies, investors, lenders, corporates, and HNI buyers. The team is able to leverage its experience and knowhow of local regulatory issues and past engagements with various state authorities and regulators to provide commercial and outcome-driven advice. Our Real Estate team has an extensive track record of handling some of the most significant and high-profile cases across the industry. We serve a diverse client base, including homebuyers, developers, construction firms, institutional investors, and lenders, delivering strategic legal and commercial solutions tailored to their needs. By combining legal acumen with industry insight, our team offers strategic solutions that drive successful real estate ventures while mitigating potential risks. Whether advising on large-scale developments or assisting individual buyers with property transactions, we remain committed to delivering efficient, commercially viable outcomes for our clients.`,
    imageUrl:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200",
    keyServices: [
      {
        title: "Real Estate Transactions",
        description:
          "Comprehensive legal services for property acquisitions, dispositions, leasing, and financing across commercial and residential sectors",
      },
      {
        title: "Real Estate Development",
        description:
          "Legal support for development projects including land acquisition, construction contracts, regulatory approvals, and project financing",
      },
      {
        title: "RERA Compliance",
        description:
          "Advisory on compliance with Real Estate (Regulation and Development) Act requirements for developers, agents, and other stakeholders",
      },
      {
        title: "Land Title & Due Diligence",
        description:
          "Thorough investigation of property titles, encumbrances, and legal risks to secure investments and prevent future disputes",
      },
      {
        title: "Real Estate Dispute Resolution",
        description:
          "Representation in property-related disputes, including title disputes, specific performance, and contractual breaches",
      },
    ],
    caseStudies: [
      {
        id: "re1",
        title: "Major Housing Cooperative Dispute",
        description:
          "Successfully represented stakeholders in complex cooperative housing society dispute involving multiple regulatory considerations",
        result:
          "Favorable resolution protecting client interests and establishing clear property rights",
        year: 2024,
      },
      {
        id: "re2",
        title: "Distressed Real Estate Project Resolution",
        description:
          "Advised on legal restructuring and resolution of stalled real estate development project with multiple stakeholders",
        result:
          "Project revival with protected homebuyer interests and viable commercial structure",
        year: 2023,
      },
    ],
    expertise: [
      "Real Estate Transactions",
      "Property Development",
      "RERA Compliance",
      "Land Acquisition",
      "Title Disputes",
      "Real Estate Finance",
    ],
  },
];
