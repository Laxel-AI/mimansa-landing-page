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
    title: "Founding & Managing Partner",
    email: "kkm@mimansa.law",
    phone: "+91 98765 43210",
    education: [
      "LL.B., National Law School of India University",
      "B.A. (Hons) Economics, Delhi University",
    ],
    specializationAreas: [
      "Corporate Law",
      "Mergers & Acquisitions",
      "Private Equity",
      "Banking & Finance",
    ],
    barAdmissions: ["Bar Council of India", "Supreme Court of India"],
    languages: ["English", "Hindi", "Malayalam"],
    bio: `Krishnamohan K. Menon brings over two decades of experience in corporate law and governance. He has been instrumental in shaping the firm's strategic direction and building its reputation for excellence in complex corporate transactions.`,
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    slug: "krishnamohan-menon",
  },
  {
    id: "2",
    name: "Bhishma Ahluwalia",
    role: "Partner",
    title: "Founding & Managing Partner",
    email: "ba@mimansa.law",
    phone: "+91 98765 43211",
    education: [
      "LL.M., Harvard Law School",
      "LL.B., National Law School of India University",
    ],
    specializationAreas: [
      "International Arbitration",
      "Dispute Resolution",
      "Infrastructure",
      "Real Estate",
    ],
    barAdmissions: ["Bar Council of India", "New York State Bar"],
    languages: ["English", "Hindi", "Punjabi"],
    bio: "Bhishma Ahluwalia is recognized for his expertise in international arbitration and complex dispute resolution. His practice focuses on high-stakes commercial litigation and arbitration across multiple jurisdictions.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    slug: "bhishma-ahluwalia",
  },
  {
    id: "3",
    name: "Gautam Dhamija",
    role: "Partner",
    title: "Partner",
    email: "gd@mimansa.law",
    phone: "+91 98765 43212",
    education: [
      "LL.B., Gujarat National Law University",
      "MBA, Indian Institute of Management Ahmedabad",
    ],
    specializationAreas: [
      "Technology Law",
      "Intellectual Property",
      "Data Privacy",
      "E-commerce",
    ],
    barAdmissions: ["Bar Council of India"],
    languages: ["English", "Hindi", "Gujarati"],
    bio: `Gautam Dhamija leads the firm's Technology and Intellectual Property practice. He specializes in complex technology transactions and has advised numerous startups and established companies in the technology sector.`,
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    slug: "gautam-dhamija",
  },
  {
    id: "4",
    name: "S.K. Singh",
    role: "Partner",
    title: "Partner",
    email: "sks@mimansa.law",
    phone: "+91 98765 43213",
    education: [
      "LL.B., Faculty of Law, University of Delhi",
      "B.Com (Hons), Delhi University",
    ],
    specializationAreas: [
      "Securities Law",
      "Capital Markets",
      "Corporate Governance",
      "Regulatory Compliance",
    ],
    barAdmissions: ["Bar Council of India", "Supreme Court of India"],
    languages: ["English", "Hindi"],
    bio: "S.K. Singh has extensive experience in securities law and capital markets. He has played a crucial role in numerous IPOs and other capital market transactions, advising both issuers and underwriters.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    slug: "sk-singh",
  },
  {
    id: "5",
    name: "Chaitanyashil Priyadarshi",
    role: "Partner",
    title: "Partner",
    email: "cp@mimansa.law",
    phone: "+91 98765 43214",
    education: [
      "LL.M., University of Cambridge",
      "B.A. LL.B. (Hons), NALSAR University of Law",
    ],
    specializationAreas: [
      "Competition Law",
      "Antitrust",
      "Regulatory Investigations",
      "Compliance",
    ],
    barAdmissions: ["Bar Council of India"],
    languages: ["English", "Hindi", "Bengali"],
    bio: "Chaitanyashil Priyadarshi heads the Competition Law practice at the firm. He has represented clients in numerous high-profile competition law cases and regulatory investigations.",
    imageUrl: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea",
    slug: "chaitanyashil-priyadarshi",
  },
  // Associates
  {
    id: "6",
    name: "Aisha Sharma",
    role: "Associate",
    email: "as@mimansa.law",
    phone: "+91 98765 43215",
    education: [
      "LL.B., National Law University Delhi",
      "B.A. (Hons) Political Science, Lady Shri Ram College",
    ],
    specializationAreas: ["Corporate Law", "Mergers & Acquisitions"],
    barAdmissions: ["Bar Council of Delhi"],
    languages: ["English", "Hindi", "Urdu"],
    bio: "Aisha Sharma specializes in corporate law and M&A transactions. She has worked on several high-profile merger and acquisition deals in the technology and financial services sectors.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    slug: "aisha-sharma",
  },
  {
    id: "7",
    name: "Rajat Verma",
    role: "Associate",
    email: "rv@mimansa.law",
    phone: "+91 98765 43216",
    education: ["LL.B., NALSAR University of Law"],
    specializationAreas: ["Technology Law", "Data Privacy"],
    barAdmissions: ["Bar Council of Maharashtra and Goa"],
    languages: ["English", "Hindi", "Marathi"],
    bio: "Rajat Verma focuses on technology law and data privacy matters. He advises clients on compliance with data protection regulations and technology contracts.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    slug: "rajat-verma",
  },
  // Interns
  {
    id: "8",
    name: "Priya Mehta",
    role: "Intern",
    email: "pm@mimansa.law",
    phone: "+91 98765 43217",
    education: ["Final Year, National Law School of India University"],
    specializationAreas: ["Corporate Law", "International Law"],
    barAdmissions: [],
    languages: ["English", "Hindi", "Gujarati"],
    bio: "Priya Mehta is currently interning with our Corporate Law team. She has demonstrated strong analytical skills and keen interest in international law.",
    imageUrl: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909",
    slug: "priya-mehta",
  },
  {
    id: "9",
    name: "Arjun Nair",
    role: "Intern",
    email: "an@mimansa.law",
    phone: "+91 98765 43218",
    education: ["Final Year, Gujarat National Law University"],
    specializationAreas: ["Dispute Resolution", "Arbitration"],
    barAdmissions: [],
    languages: ["English", "Hindi", "Malayalam"],
    bio: "Arjun Nair is working with our Dispute Resolution team. He has shown exceptional research abilities and strong drafting skills.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    slug: "arjun-nair",
  },
];
