// types.ts
export type PersonRole = "Partner" | "Associate" | "Intern";

export interface Person {
  id: string;
  name: string;
  role: PersonRole;
  title?: string;
  email: string;
  phone: string;
  education: string[];
  specializationAreas: string[];
  barAdmissions: string[];
  languages: string[];
  bio: string;
  imageUrl: string;
  slug: string;
}

// data.ts
export const people: Person[] = [
  {
    id: "1",
    name: "Krishnamohan K. Menon",
    role: "Partner",
    title:
      "Co-founder & Managing Partner, Advocate on Record of the Supreme Court of India",
    email: "kkm@mimansa.law",
    phone: "+91 98765 43210",
    education: ["ILS LAW COLLEGE, PUNE"],
    specializationAreas: [
      "Criminal and Civil Litigation",
      "Real Estate",
      "Commercial Disputes",
      "Tax Litigation",
      "Insolvency and Restructuring",
      "Supreme Court Practice",
    ],
    barAdmissions: [
      "BAR COUNCIL OF DELHI",
      "SUPREME COURT OF INDIA",
      "SCAORA",
      "DELHI HIGH COURT",
      "NATIONAL COMPANY LAW TRIBUNAL",
      "CUSTOMS, EXCISE AND SERVICE TAX TRIBUNAL",
    ],
    languages: ["English", "Hindi", "Malayalam"],
    bio: `Krishnamohan is the co-founder and Managing Partner of Mimansa Law Offices, and is an Advocate on Record of the Supreme Court of India. Krishna has over 15 years of extensive experience in criminal and civil litigation including in the areas of real estate, commercial disputes, tax litigation and insolvency and restructuring and a robust Supreme Court practice in different subject areas.

Krishna started his career with Tier-1 law firm and association with the Chamber of the Additional Solicitor General of India. An astute litigator, Krishna has successfully advised and handled disputes of Domestic and International clients before various fora including the Supreme Court, Various High Courts, Company Tribunals and Central Excise and Service Tax Appellate Tribunal.

Krishna is an ardent writer and speaks on topics relating to restructuring and insolvency, banking and finance, in India and has authored pieces and engaged in Channel discussions in various subject areas including envisioning of the metamorphization of the dispute and regulatory segments in the coming decade.`,
    imageUrl: "/lawyers/krishnamohan-menon.png",
    slug: "krishnamohan-menon",
  },
  {
    id: "2",
    name: "Bhishma Ahluwalia",
    role: "Partner",
    title: "Founding Partner, Forbes-recognized Forty Under Forty Professional",
    email: "ba@mimansa.law",
    phone: "+91 98765 43211",
    education: ["Chartered Accountant"],
    specializationAreas: [
      "Indirect Taxation",
      "GST Framework",
      "Iron & Steel Industry",
      "Automotive Sector",
      "Electronics Sector",
      "Strategized Litigations",
    ],
    barAdmissions: [
      "Bar Council of Delhi",
      "The Institute of Chartered Accountants of India",
    ],
    languages: ["English", "Hindi"],
    bio: "Bhishma, a founding partner at Mimansa, is a distinguished Forbes-recognized Forty Under Forty professional. Holding dual qualifications as an Advocate and Chartered Accountant, he specializes in Indirect Taxation. With over a decade of experience in the field, he has successfully guided clients through the transition from the previous Indirect Tax regime to the GST framework with remarkable ease. His in-depth understanding of domestic heavy manufacturing operations has earned him significant recognition, particularly within the Iron & Steel, Automotive, and Electronics sectors.",
    imageUrl: "/lawyers/bhishma-ahluwalia.png",
    slug: "bhishma-ahluwalia",
  },
  {
    id: "3",
    name: "Gautam Dhamija",
    role: "Partner",
    title: "Partner, General Commercial Litigation Practice Lead",
    email: "gd@mimansa.law",
    phone: "+91 98765 43212",
    education: ["VIPS, GURU GOBIND SINGH INDRAPRASTHA UNIVERSITY"],
    specializationAreas: [
      "Commercial Disputes",
      "Arbitrations",
      "Debt Recovery",
      "Financial Restructuring",
      "Company Law",
    ],
    barAdmissions: [
      "Bar Council of Delhi",
      "Supreme Court of India",
      "Delhi High Court",
    ],
    languages: ["English", "Hindi"],
    bio: `Gautam leads the General Commercial Litigation practice at Mimansa, bringing his deep expertise in commercial disputes, arbitrations, and debt recovery to the forefront. As a specialist in these areas, he has played a pivotal role in successfully prosecuting and defending complex legal matters across various judicial and quasi-judicial forums. His clientele spans a wide array of industries, including fast-moving consumer goods (FMCG) manufacturers, real estate developers, international traders, chemical industries, film production houses, and more.`,
    imageUrl: "/lawyers/gautam-dhamija.png",
    slug: "gautam-dhamija",
  },
  {
    id: "4",
    name: "S.K. Singh",
    role: "Partner",
    title: "Partner, Tax Advisory and Revenue Litigation Lead",
    email: "sks@mimansa.law",
    phone: "+91 98765 43213",
    education: ["Retired IRS Officer"],
    specializationAreas: [
      "Tax Advisory",
      "Revenue Litigation",
      "GST Regime",
      "Financial Law",
      "Regulatory Challenges",
    ],
    barAdmissions: ["Bar Council of Delhi"],
    languages: ["English", "Hindi"],
    bio: "Mr. S.K. Singh oversees the tax advisory and revenue litigation portfolio at Mimansa. A retired IRS officer and seasoned advocate, Mr. Singh brings over four decades of expertise navigating the dynamic landscape of financial law. He has successfully guided a diverse range of manufacturing and service sector clients, leveraging his profound understanding of regulatory challenges within the taxation domain. A passionate advocate for education, Mr. Singh has taken a leading role in enlightening various industrial associations about the benefits and risks associated with the GST regime.",
    imageUrl: "/lawyers/sk-singh.png",
    slug: "sk-singh",
  },
  {
    id: "5",
    name: "Chaitanyashil Priyadarshi",
    role: "Partner",
    title: "Partner, Insolvency and Real Estate Advisory Lead",
    email: "cp@mimansa.law",
    phone: "+91 98765 43214",
    education: ["ILS LAW COLLEGE, PUNE"],
    specializationAreas: [
      "Insolvency Law",
      "Real Estate Disputes",
      "Restructuring",
      "Insolvency Resolution Processes",
      "Corporate Transactions",
      "Legal Technology",
    ],
    barAdmissions: [
      "Bar Council of Delhi",
      "Supreme Court of India",
      "Delhi High Court",
      "National Company Law Tribunal (NCLT)",
    ],
    languages: ["English", "Hindi", "Assamese"],
    bio: "Chaitanya is a Partner at Mimansa Law Offices, where he leads the Insolvency and Real Estate Advisory practice. With deep expertise in restructuring, real estate disputes, and insolvency law, he advises a wide range of clients including financial institutions, real estate developers, homebuyer groups, and insolvency professionals. His work spans across the National Company Law Tribunal, Real Estate Regulatory Authorities, and High Courts. At Mimansa, Chaitanya is also heading the team building Laxel.ai, an AI-driven legal tool designed to streamline and enhance the firm's internal operations and client services.",
    imageUrl: "/lawyers/chaitanyashil-priyadarshi.png",
    slug: "chaitanyashil-priyadarshi",
  },
  {
    id: "6",
    name: "Nirnay Gupta",
    role: "Partner",
    title: "Legal Counsel, Capital Markets & Litigation Specialist",
    email: "nirnay@mimansalaw.in",
    phone: "+91 72919 90185",
    education: [
      "ILS LAW COLLEGE, PUNE [B.S.L LLB]",
      "LLM in Arbitration & Dispute Resolution from George Washington University (U.S.A)",
    ],
    specializationAreas: [
      "Electricity Laws",
      "White Collar Crimes",
      "Telecom & Mining Laws",
      "Financial & Regulatory Laws",
      "Corporate Laws",
      "Commercial Disputes",
    ],
    barAdmissions: [
      "Supreme Court of India",
      "High Court of Chhattisgarh",
      "DRT",
    ],
    languages: ["English", "Hindi"],
    bio: `Nirnay is a Partner at Mimansa Law Offices, bringing over 14 years of extensive experience across Corporate, Commercial, and Regulatory law, with a specialized focus on Capital Markets and Litigation. His deep understanding of the banking, securities, and financial markets enhances his ability to navigate complex legal frameworks with precision.

As a practicing advocate before the Hon'ble High Court of Chhattisgarh, Nirnay represents clients in high-stakes matters across the Hon'ble Supreme Court of India, various High Courts, Tribunals, and Commissions. His expertise extends to white-collar crimes, providing strategic advice on complex financial fraud, corporate misconduct, and regulatory violations.

Nirnay is well known for his influential work in the mining and telecom industries, where he handles intricate legal disputes. He regularly appears before various judicial forums and has valuable experience in commercial arbitrations, ensuring robust legal advocacy for his diverse clientele.`,
    imageUrl: "/lawyers/nirnay-gupta.jpeg",
    slug: "nirnay-gupta",
  },
];
