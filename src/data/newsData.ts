// data/newsData.ts
import { NewsItem } from "~/types/news";

export const newsItems: NewsItem[] = [
  {
    id: 1,
    slug: "policy-impact-new-administration",
    type: "THE MIMANSA PODCAST",
    title: "How a New Administration's Policy Playbook May Impact Businesses",
    description:
      "A discussion on the economic and regulatory implications of recent policy shifts.",
    content: `
        <p>In this episode of the Mimansa podcast, partners Rajiv Sharma and Priya Mehta discuss the implications of recent policy shifts on businesses across various sectors.</p>
        
        <p>The podcast delves into new regulatory frameworks that might impact corporate governance, international trade relations, and tax implications. Rajiv and Priya analyze how these changes could affect both domestic companies and multinational corporations operating in India and abroad.</p>
        
        <p>Key discussion points include:</p>
        <ul>
          <li>Changes to foreign direct investment regulations</li>
          <li>Environmental compliance requirements</li>
          <li>Digital economy taxation</li>
          <li>Cross-border data transfer regulations</li>
        </ul>
        
        <p>The speakers also offer practical guidance for businesses looking to navigate these changing regulatory landscapes while maintaining compliance and operational efficiency.</p>
        
        <p>This episode is particularly valuable for C-suite executives, compliance officers, and corporate legal teams seeking to understand and prepare for upcoming regulatory changes.</p>
      `,
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    date: "2025-03-15",
    author: "Rajiv Sharma, Priya Mehta",
    category: "Podcast",
    tags: ["Policy", "Regulation", "Business Impact", "Compliance"],
    featured: true,
  },
  {
    id: 2,
    slug: "global-regulation-analysis",
    type: "MIMANSA RESOURCES",
    title: "Global Impact Analysis: Navigating Cross-Border Regulation",
    description:
      "Key strategies for multinational corporations facing evolving regulatory challenges.",
    content: `
        <p>Mimansa Law's International Regulatory team has published a comprehensive guide on navigating the increasingly complex landscape of cross-border regulations.</p>
        
        <p>This resource provides an in-depth analysis of regulatory convergence and divergence across major economic regions, with particular focus on:</p>
        
        <ul>
          <li>EU's Digital Markets Act and Digital Services Act</li>
          <li>Changes to US antitrust enforcement approaches</li>
          <li>India's evolving data protection framework</li>
          <li>APAC regulatory harmonization efforts</li>
        </ul>
        
        <p>The guide highlights potential compliance pitfalls for multinational operations and offers strategic approaches to creating adaptable compliance programs that can respond to regional regulatory variations while maintaining operational consistency.</p>
        
        <p>Case studies from the technology, pharmaceutical, and financial services sectors provide practical examples of successful cross-border regulatory navigation strategies.</p>
        
        <p>This resource is essential reading for general counsel, compliance officers, and risk management professionals at companies with global operations or aspirations.</p>
      `,
    image:
      "https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80",
    date: "2025-03-01",
    author: "International Regulatory Team",
    category: "Resources",
    tags: [
      "Global Regulation",
      "Compliance",
      "Cross-Border",
      "Risk Management",
    ],
  },
  {
    id: 3,
    slug: "privacy-ruling-impact",
    type: "CLIENT ALERT",
    title: "Supreme Court Decision Reshapes Data Privacy Landscape",
    description:
      "Analysis of recent ruling and implications for technology companies and data controllers.",
    content: `
        <p>In a landmark decision yesterday, the Supreme Court of India has significantly reshaped the data privacy landscape with implications for both domestic and international businesses operating in India.</p>
        
        <p>The ruling in <em>Data Privacy Commission v. TechGiant India Ltd.</em> clarifies the extent of constitutional privacy protections in the commercial context and establishes new standards for consent and data minimization that go beyond previous interpretations.</p>
        
        <p>Key points from the ruling include:</p>
        
        <ul>
          <li>Enhanced transparency requirements for data collection practices</li>
          <li>Stricter standards for establishing valid user consent</li>
          <li>New limitations on secondary data usage and processing</li>
          <li>Expanded right to erasure guidelines</li>
        </ul>
        
        <p>The decision creates immediate compliance obligations for technology companies, particularly those in e-commerce, social media, and digital advertising sectors. Companies now have a 90-day window to align their data practices with the new standards or face potential regulatory action.</p>
        
        <p>Mimansa Law's Privacy and Data Security team is available to assist clients in understanding the full implications of this ruling and implementing necessary changes to data governance frameworks and privacy policies.</p>
      `,
    image:
      "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    date: "2025-02-24",
    author: "Privacy and Data Security Team",
    category: "Client Alert",
    tags: ["Privacy", "Supreme Court", "Data Protection", "Compliance"],
    featured: true,
  },
  {
    id: 4,
    slug: "esg-reporting-trends",
    type: "WEBINAR",
    title: "Emerging Trends in Corporate Sustainability Reporting",
    description:
      "Expert guidance on compliance with new ESG disclosure requirements.",
    content: `
        <p>Mimansa Law's Environmental, Social, and Governance (ESG) practice group will host a webinar on April 15, 2025, focusing on emerging trends in corporate sustainability reporting.</p>
        
        <p>This interactive session will provide practical guidance on navigating the evolving landscape of ESG disclosure requirements, with particular attention to recent regulatory developments in India and international standards.</p>
        
        <p>Topics to be covered include:</p>
        
        <ul>
          <li>SEBI's new ESG disclosure framework and implementation timeline</li>
          <li>Integration with international standards (ISSB, GRI, TCFD)</li>
          <li>Key challenges in climate-related financial disclosures</li>
          <li>Addressing supply chain sustainability reporting</li>
          <li>Strategies for avoiding greenwashing allegations</li>
        </ul>
        
        <p>The webinar will feature presentations from Mimansa partners Deepa Kapoor and Arjun Reddy, along with guest speaker Dr. Vikram Singh, Sustainability Director at RenewCorp India.</p>
        
        <p>This session is designed for corporate secretaries, compliance officers, sustainability professionals, and in-house counsel responsible for ESG reporting and compliance.</p>
        
        <p>Participants will receive a comprehensive resource guide including reporting templates, regulatory checklists, and best practice examples.</p>
      `,
    image:
      "https://images.unsplash.com/photo-1541560584753-cefb2f1887cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    date: "2025-02-15",
    author: "ESG Practice Group",
    category: "Webinar",
    tags: ["ESG", "Sustainability", "Corporate Reporting", "Compliance"],
  },
  {
    id: 5,
    slug: "fintech-merger-case-study",
    type: "CASE STUDY",
    title: "Landmark Merger: Navigating Regulatory Hurdles in Fintech",
    description:
      "How our team helped secure approval for a complex cross-border acquisition.",
    content: `
        <p>Mimansa Law recently guided PayNow Technologies through its landmark ₹4.2 billion acquisition of DigiWallet, a transaction that required navigating complex regulatory hurdles across multiple jurisdictions.</p>
        
        <p>This case study examines how our cross-practice team of M&A, fintech regulatory, and competition law specialists collaborated to overcome significant challenges including:</p>
        
        <ul>
          <li>Simultaneous regulatory approvals from the RBI, Competition Commission of India, and foreign investment authorities</li>
          <li>Novel data sharing and protection issues arising from the combination of two digital payment platforms</li>
          <li>Structuring user consent transfers while maintaining compliance with privacy regulations</li>
          <li>Addressing competition concerns in specific payment processing segments</li>
        </ul>
        
        <p>The case highlights Mimansa's innovative approach to transaction structuring that allowed for progressive regulatory clearances while maintaining deal momentum and certainty.</p>
        
        <p>Our team designed a phased integration plan that addressed regulatory concerns while preserving the commercial objectives of the acquisition, ultimately securing all necessary approvals within the ambitious timeline set by our client.</p>
        
        <p>This successful outcome reinforces Mimansa Law's position as a leading advisor on complex fintech transactions requiring sophisticated regulatory navigation.</p>
      `,
    image:
      "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2025-01-30",
    author: "M&A and Fintech Teams",
    category: "Case Study",
    tags: ["Fintech", "M&A", "Regulatory Approval", "Cross-Border"],
  },
  {
    id: 6,
    slug: "aviation-sector-legal-update",
    type: "INDUSTRY INSIGHT",
    title: "Legal Developments Reshaping India's Aviation Sector",
    description:
      "Analysis of new regulations and their impact on airlines, airports, and service providers.",
    content: `
        <p>India's aviation sector is undergoing significant regulatory evolution that will reshape the competitive landscape and operational requirements for industry participants. Mimansa Law's Aviation practice has prepared a detailed analysis of these developments.</p>
        
        <p>Recent legal and policy changes covered in this update include:</p>
        
        <ul>
          <li>The new Airport Economic Regulatory Authority amendments and their impact on airport fee structures</li>
          <li>Updated foreign direct investment policies for airlines and support services</li>
          <li>Revised aircraft leasing frameworks under the GIFT City regulations</li>
          <li>Environmental compliance requirements including noise pollution and emissions standards</li>
          <li>Changes to consumer protection rules for flight cancellations and delays</li>
        </ul>
        
        <p>The analysis highlights both opportunities and compliance challenges for airlines, airport operators, MRO providers, and other aviation sector participants operating in or entering the Indian market.</p>
        
        <p>Mimansa Law has extensive experience advising domestic and international aviation industry clients on regulatory matters, commercial transactions, and dispute resolution in this specialized sector.</p>
      `,
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    date: "2025-01-15",
    author: "Aviation Practice Group",
    category: "Industry Insight",
    tags: ["Aviation", "Regulatory", "Investment", "Compliance"],
  },
  {
    id: 7,
    slug: "renewable-energy-financing",
    type: "LEGAL UPDATE",
    title: "New Frameworks for Renewable Energy Project Financing",
    description:
      "Recent legal developments creating opportunities for green energy investments in India.",
    content: `
        <p>Several recent legal and policy developments have created significant new opportunities for financing renewable energy projects in India. Mimansa Law's Energy and Finance practices have collaborated to analyze these changes and their implications.</p>
        
        <p>Key developments covered in this update include:</p>
        
        <ul>
          <li>The Ministry of New and Renewable Energy's revised guidelines for solar power procurement</li>
          <li>RBI's new priority sector lending classifications for renewable projects</li>
          <li>Tax incentives for green bonds and sustainability-linked financing</li>
          <li>Updated regulatory frameworks for corporate power purchase agreements</li>
          <li>State-level policy changes affecting project viability</li>
        </ul>
        
        <p>The analysis examines how these changes impact different financing structures including project finance, yieldcos, green bonds, and infrastructure investment trusts specifically focused on renewable assets.</p>
        
        <p>Mimansa Law has significant experience advising developers, financial institutions, and investors on renewable energy projects across solar, wind, hydro, and emerging technologies such as green hydrogen and battery storage.</p>
        
        <p>Our team can provide tailored guidance on optimizing financing structures to take advantage of these new frameworks while ensuring regulatory compliance and risk mitigation.</p>
      `,
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2025-01-05",
    author: "Energy and Finance Practice Groups",
    category: "Legal Update",
    tags: [
      "Renewable Energy",
      "Project Finance",
      "Green Investment",
      "Regulatory",
    ],
  },
  {
    id: 8,
    slug: "pharmaceutical-compliance-guide",
    type: "PUBLICATION",
    title: "Comprehensive Guide to Pharmaceutical Regulatory Compliance",
    description:
      "New publication addressing the complex legal landscape for pharmaceutical companies in India.",
    content: `
        <p>Mimansa Law's Life Sciences practice has published a comprehensive guide to pharmaceutical regulatory compliance, addressing the increasingly complex legal landscape facing pharmaceutical manufacturers, distributors, and research organizations in India.</p>
        
        <p>This 120-page publication provides detailed analysis and practical guidance on:</p>
        
        <ul>
          <li>Drug approval processes and recent procedural changes</li>
          <li>Manufacturing compliance under revised Schedule M requirements</li>
          <li>Clinical trial regulations and ethical compliance frameworks</li>
          <li>Drug pricing controls and the DPCO's evolving interpretations</li>
          <li>Digital health and telemedicine regulatory considerations</li>
          <li>Advertising and promotion compliance</li>
          <li>Import and export regulations</li>
        </ul>
        
        <p>The guide includes practical tools including compliance checklists, regulatory submission templates, and decision trees for common compliance scenarios.</p>
        
        <p>Authored by partners Dr. Anand Mehta and Sunita Verma, along with contributions from the wider Life Sciences team, this publication reflects Mimansa's deep expertise in pharmaceutical regulation developed through decades of advising leading domestic and multinational pharmaceutical companies.</p>
        
        <p>This resource is particularly valuable for regulatory affairs professionals, in-house legal teams, and compliance officers in the pharmaceutical and biotechnology sectors.</p>
      `,
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2024-12-20",
    author: "Life Sciences Practice Group",
    category: "Publication",
    tags: [
      "Pharmaceutical",
      "Regulatory Compliance",
      "Life Sciences",
      "Healthcare Law",
    ],
  },
];

// Filter featured news items
export const featuredNews = newsItems.filter((item) => item.featured);

// Get recent news (sorted by date)
export const recentNews = [...newsItems].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

// Get news by category
export const getNewsByCategory = (category: string): NewsItem[] => {
  return newsItems.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );
};

// Get news by tag
export const getNewsByTag = (tag: string): NewsItem[] => {
  return newsItems.filter((item) =>
    item.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
};

// Get related news (by matching tags, excluding the current article)
export const getRelatedNews = (
  currentId: number,
  limit: number = 3
): NewsItem[] => {
  const currentItem = newsItems.find((item) => item.id === currentId);

  if (!currentItem) return [];

  const relatedItems = newsItems
    .filter((item) => item.id !== currentId)
    .map((item) => {
      // Count matching tags
      const matchingTags = item.tags.filter((tag) =>
        currentItem.tags.includes(tag)
      ).length;

      // Return item with match score
      return { ...item, matchScore: matchingTags };
    })
    .filter((item) => item.matchScore > 0)
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, limit);

  return relatedItems;
};
