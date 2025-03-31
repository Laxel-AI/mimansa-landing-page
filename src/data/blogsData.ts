// data/blogData.ts
import { BlogPost, BlogAuthor } from "~/types/blogs";

export const blogAuthors: BlogAuthor[] = [
  {
    id: 1,
    name: "Rajiv Mehta",
    title: "Partner, Corporate Practice",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    bio: "Rajiv Mehta is a senior partner in Mimansa's Corporate Practice with over 20 years of experience in mergers and acquisitions, corporate governance, and securities law. He advises clients across technology, finance, and manufacturing sectors on complex transactions and regulatory matters.",
  },
  {
    id: 2,
    name: "Anya Sharma",
    title: "Partner, Intellectual Property",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    bio: "Anya Sharma leads Mimansa's Intellectual Property practice. With a technical background in computer science and 15 years of legal experience, she specializes in patent strategy, trademark protection, and IP litigation for technology and pharmaceutical companies.",
  },
  {
    id: 3,
    name: "Vikram Khanna",
    title: "Partner, Litigation",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    bio: "Vikram Khanna is a seasoned litigator with extensive experience representing clients in high-stakes commercial disputes, arbitrations, and regulatory investigations. He has successfully argued cases before the Supreme Court and various High Courts across India.",
  },
  {
    id: 4,
    name: "Priya Nair",
    title: "Partner, Regulatory Compliance",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1998&q=80",
    bio: "Priya Nair leads Mimansa's Regulatory Compliance practice. With a dual background in law and economics, she advises clients on navigating complex regulatory frameworks in financial services, data protection, and sector-specific compliance regimes.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "navigating-indias-evolving-data-protection-landscape",
    title: "Navigating India's Evolving Data Protection Landscape",
    subtitle: "Strategic Compliance Approaches for Businesses",
    excerpt:
      "An analysis of India's data protection framework and practical strategies for businesses to achieve compliance while maintaining operational efficiency.",
    content: `
        <p>India's data protection landscape is undergoing significant evolution, creating both challenges and opportunities for businesses across sectors. With the Digital Personal Data Protection Act (DPDPA) now in force, organizations face a complex matrix of compliance requirements that impact everything from customer engagement to cross-border data transfers.</p>
        
        <h2>The Current Regulatory Framework</h2>
        
        <p>The DPDPA creates a comprehensive framework for personal data protection in India, drawing inspiration from global standards while establishing unique approaches to consent, data fiduciary obligations, and enforcement. Key provisions include:</p>
        
        <ul>
          <li>Notice and consent requirements that emphasize meaningful, informed consent</li>
          <li>Purpose limitation and data minimization principles</li>
          <li>Expanded data subject rights including access, correction, and erasure</li>
          <li>Cross-border data transfer restrictions with a whitelist approach</li>
          <li>Significant penalties for non-compliance, reaching up to 4% of global turnover</li>
        </ul>
        
        <p>Alongside the DPDPA, sector-specific regulations from the Reserve Bank of India, SEBI, and industry regulators create additional compliance layers that must be harmonized with the baseline data protection framework.</p>
        
        <h2>Strategic Compliance Approaches</h2>
        
        <p>Forward-thinking organizations are adopting strategic approaches to data protection compliance that go beyond checkbox exercises to create sustainable, integrated frameworks:</p>
        
        <h3>1. Data Mapping and Classification</h3>
        
        <p>Comprehensive data mapping identifies all personal data processing activities within an organization, enabling accurate classification based on sensitivity and applicable regulatory requirements. This foundation supports all other compliance activities and should be maintained as a living document reflecting organizational changes.</p>
        
        <h3>2. Privacy by Design</h3>
        
        <p>Embedding privacy considerations into product and process development from inception reduces compliance costs and creates more privacy-friendly offerings. This approach requires cross-functional collaboration between legal, IT, product, and business teams to identify privacy implications early in development cycles.</p>
        
        <h3>3. Consent Management</h3>
        
        <p>Effective consent management balances legal requirements with user experience considerations. Leading organizations are implementing layered consent mechanisms that provide essential information upfront with easily accessible detailed disclosures, supported by backend systems that accurately record and honor consent preferences.</p>
        
        <h3>4. Cross-Border Data Strategy</h3>
        
        <p>Organizations with global operations need comprehensive strategies for cross-border data transfers that account for India's emerging whitelist approach and contractual requirements. This may involve data localization for certain elements while maintaining global processing capabilities for other categories.</p>
        
        <h3>5. Vendor Management</h3>
        
        <p>Third-party risk management is increasingly critical, requiring enhanced due diligence, contractual protections, and ongoing monitoring of data processors. Organizations should establish clear data processing agreements and conduct regular compliance assessments of key vendors.</p>
        
        <h2>Industry-Specific Considerations</h2>
        
        <p>Data protection compliance strategies must be tailored to industry-specific requirements and risk profiles:</p>
        
        <p><strong>Financial Services:</strong> Financial institutions need to harmonize DPDPA requirements with RBI guidelines on customer data handling, account aggregator frameworks, and credit information regulations.</p>
        
        <p><strong>Healthcare:</strong> Healthcare providers and digital health platforms must balance data protection with guidelines from the National Medical Commission and the Digital Health Mission's data exchange protocols.</p>
        
        <p><strong>E-commerce and Retail:</strong> Customer profiling, targeted advertising, and marketing communications require careful consent management and transparency mechanisms to comply with both DPDPA and consumer protection regulations.</p>
        
        <p><strong>Technology and SaaS:</strong> Cloud service providers and technology platforms face complex challenges around data controller/processor relationships and cross-border data transfer compliance.</p>
        
        <h2>The Path Forward</h2>
        
        <p>As India's data protection framework continues to evolve, organizations should adopt agile compliance approaches that can adapt to regulatory changes while maintaining operational efficiency. Key recommended steps include:</p>
        
        <ul>
          <li>Establishing cross-functional privacy governance committees</li>
          <li>Implementing privacy impact assessments for new initiatives</li>
          <li>Developing comprehensive data breach response protocols</li>
          <li>Creating ongoing privacy training programs for employees</li>
          <li>Engaging proactively with industry associations and regulators on implementation challenges</li>
        </ul>
        
        <p>By treating data protection compliance as a strategic business initiative rather than a purely legal obligation, organizations can build customer trust while mitigating regulatory risks in India's evolving data landscape.</p>
      `,
    coverImage:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    authorId: 4,
    publishedAt: "2025-03-10",
    category: "Data Privacy",
    tags: ["Data Protection", "Regulatory Compliance", "DPDPA", "Privacy"],
    featured: true,
    readingTime: 8,
  },
  {
    id: 2,
    slug: "emerging-trends-in-ma-transactions",
    title:
      "Emerging Trends in M&A Transactions: New Structures for a Changing Market",
    excerpt:
      "An examination of innovative transaction structures being deployed in the current M&A landscape to address valuation gaps, regulatory challenges, and market uncertainties.",
    content: `
        <p>The M&A landscape in India is experiencing significant evolution driven by economic shifts, regulatory developments, and changing investor priorities. Deal structures are increasingly sophisticated as parties seek to allocate risk effectively and navigate complex regulatory environments.</p>
  
        <h2>Bridging Valuation Gaps with Contingent Consideration</h2>
        
        <p>Valuation disparities between buyers and sellers have led to the increasing use of contingent consideration mechanisms, particularly in sectors experiencing market volatility or disruption. Key approaches include:</p>
        
        <ul>
          <li><strong>Earnouts with Extended Timelines:</strong> Traditional earnout structures are being modified with longer performance periods (24-36 months) and multiple measurement points to accommodate business cycle fluctuations.</li>
          <li><strong>Milestone-Based Payments:</strong> Particularly prevalent in technology and pharmaceutical acquisitions, these structures tie additional consideration to specific non-financial achievements such as product launches, regulatory approvals, or technology implementation benchmarks.</li>
          <li><strong>Revenue-Share Arrangements:</strong> In lieu of fixed earnouts, some transactions include ongoing revenue-share provisions that align seller incentives with long-term performance.</li>
        </ul>
        
        <p>While these structures can effectively bridge valuation gaps, they require careful drafting to avoid post-closing disputes. Clear definitions of performance metrics, accounting methodologies, and governance during the earnout period are essential.</p>
        
        <h2>Regulatory-Responsive Transaction Structures</h2>
        
        <p>India's evolving regulatory landscape is driving innovation in deal structures to ensure compliance while achieving transaction objectives:</p>
        
        <h3>Foreign Investment Considerations</h3>
        
        <p>The revised FDI policy framework has prompted creative structuring approaches, particularly in regulated sectors:</p>
        
        <ul>
          <li><strong>Two-Phase Transactions:</strong> Structuring acquisitions in regulated sectors as multi-phase transactions, with initial investments in permitted activities followed by conditional investments in restricted areas subject to regulatory approval.</li>
          <li><strong>Dual-Entity Structures:</strong> Separating regulated and non-regulated business components into distinct entities to allow for different investment structures and timelines.</li>
          <li><strong>Convertible Instruments with Regulatory Triggers:</strong> Using convertible securities with conversion rights contingent on regulatory clearances.</li>
        </ul>
        
        <h3>Competition Law Navigation</h3>
        
        <p>With increasingly assertive Competition Commission of India (CCI) review processes, transaction structures now frequently incorporate:</p>
        
        <ul>
          <li><strong>Pre-emptive Remedies:</strong> Building potential divestiture packages or behavioral commitments into transaction agreements to accelerate regulatory approval.</li>
          <li><strong>Staggered Closings:</strong> Sequencing transaction components to allow non-controversial elements to close while addressing competitive concerns in sensitive areas.</li>
          <li><strong>Hold-Separate Arrangements:</strong> Implementing temporary operational separation pending final regulatory determinations.</li>
        </ul>
        
        <h2>Risk Allocation Through Innovative Warranty & Indemnity Structures</h2>
        
        <p>Traditional warranty and indemnity frameworks are evolving to reflect changing risk preferences and market conditions:</p>
        
        <h3>Warranty & Indemnity Insurance Variations</h3>
        
        <ul>
          <li><strong>Synthetic Warranties:</strong> In transactions where seller indemnification is limited (e.g., financial sponsor exits), buyers and insurers are creating synthetic warranty packages backed primarily by insurance rather than seller indemnification.</li>
          <li><strong>Specific Risk Policies:</strong> Supplementing general W&I coverage with specific policies addressing identified high-risk areas such as tax structures, environmental liabilities, or pending litigation.</li>
          <li><strong>Stapled Insurance:</strong> Sellers pre-arranging W&I insurance terms and presenting them as part of the transaction package to streamline negotiations and optimize coverage.</li>
        </ul>
        
        <h3>Specific Indemnity Innovations</h3>
        
        <p>Beyond traditional indemnification structures, we're seeing:</p>
        
        <ul>
          <li><strong>Business Interruption Indemnities:</strong> Specific protection against value erosion from disruptive events, with defined calculation methodologies.</li>
          <li><strong>Compliance Remediation Cost-Sharing:</strong> Structured approaches to allocating costs for post-closing regulatory compliance enhancements, particularly in sectors experiencing regulatory evolution.</li>
        </ul>
        
        <h2>Private Equity Influence on Deal Structures</h2>
        
        <p>The significant presence of private equity in Indian M&A has introduced structures optimized for financial investor objectives:</p>
        
        <ul>
          <li><strong>Structured Equity Arrangements:</strong> Implementing liquidation preferences, ratchets, and similar mechanisms in minority investments to provide downside protection while preserving upside potential.</li>
          <li><strong>Interim Holding Structures:</strong> Creating temporary holding vehicles for bolt-on acquisitions prior to integration into platform companies.</li>
          <li><strong>Vendor Financing Arrangements:</strong> Partial seller financing with creative security packages to optimize capital structures and bridge valuation gaps.</li>
        </ul>
        
        <h2>ESG Considerations in Transaction Structures</h2>
        
        <p>Environmental, social, and governance factors are increasingly reflected in deal terms:</p>
        
        <ul>
          <li><strong>ESG-Linked Earnouts:</strong> Tying portion of contingent consideration to achievement of specific sustainability metrics or improvement targets.</li>
          <li><strong>Climate Risk Allocation:</strong> Specific indemnity structures addressing potential climate-related transition risks and physical asset exposures.</li>
          <li><strong>Social Impact Provisions:</strong> Transaction terms that protect or incentivize community investment, employment preservation, or other social impact objectives post-closing.</li>
        </ul>
        
        <h2>Conclusion: Implications for Transaction Parties</h2>
        
        <p>As M&A transaction structures become more sophisticated, all parties need enhanced focus on:</p>
        
        <ul>
          <li>Early identification of structural options aligned with strategic objectives</li>
          <li>Comprehensive scenario analysis to test structure performance under various outcomes</li>
          <li>Careful attention to contract drafting to clearly implement chosen structures</li>
          <li>Due consideration of accounting, tax, and governance implications of innovative structures</li>
        </ul>
        
        <p>By thoughtfully employing these emerging structural approaches, transaction parties can navigate today's complex market conditions while effectively balancing risk and opportunity.</p>
      `,
    coverImage:
      "https://images.unsplash.com/photo-1607944024060-0450380ddd33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    authorId: 1,
    publishedAt: "2025-02-28",
    category: "Corporate Law",
    tags: [
      "M&A",
      "Corporate Transactions",
      "Deal Structures",
      "Private Equity",
    ],
    featured: true,
    readingTime: 10,
  },
  {
    id: 3,
    slug: "intellectual-property-strategies-for-ai-innovations",
    title: "Intellectual Property Strategies for AI Innovations",
    subtitle: "Navigating the Complex Intersection of AI Technology and IP Law",
    excerpt:
      "Practical approaches to protecting AI innovations in India's evolving IP landscape, addressing challenges in patent protection, copyright applications, and trade secret strategies.",
    content: `
        <p>Artificial intelligence technologies present unique challenges for intellectual property protection frameworks that were largely designed for human-created innovations. As AI development accelerates across India's technology landscape, companies need tailored strategies to safeguard their innovations while navigating the complexities of current IP law.</p>
        
        <h2>The State of AI Protection in India</h2>
        
        <p>India's intellectual property regime is evolving to address AI-related innovations, though significant ambiguities remain. The current landscape includes:</p>
        
        <ul>
          <li>Patent Office guidance indicating that AI algorithms per se fall within the computer program exclusion under Section 3(k) of the Patents Act</li>
          <li>Growing recognition that AI applications with technical effects may qualify for patent protection</li>
          <li>Copyright protection available for original software code and potentially for AI-generated works with sufficient human direction</li>
          <li>Trade secret protection gaining importance for elements that may not qualify for formal IP protection</li>
        </ul>
        
        <h2>Patent Strategies for AI Innovations</h2>
        
        <p>While pure algorithms face patentability challenges, carefully crafted patent applications can protect key aspects of AI technologies:</p>
        
        <h3>Technical Application Focus</h3>
        
        <p>Successful AI patent applications emphasize specific technical implementations and effects rather than abstract algorithms. Effective approaches include:</p>
        
        <ul>
          <li>Framing innovations in terms of systems that solve specific technical problems</li>
          <li>Detailing hardware integrations and technical architectures that implement the AI functionality</li>
          <li>Emphasizing improved technical performance, efficiency, or capabilities</li>
          <li>Focusing on novel training methodologies with technical advantages</li>
        </ul>
        
        <p>For example, rather than claiming an algorithm for image recognition, applications should focus on a specific system that uses that algorithm to solve a technical problem, such as identifying manufacturing defects with improved accuracy or efficiency.</p>
        
        <h3>Strategic Claim Drafting</h3>
        
        <p>Patent applications should include multiple claim categories to maximize protection prospects:</p>
        
        <ul>
          <li>System claims integrating hardware and software components</li>
          <li>Method claims detailing technical steps and transformations</li>
          <li>Computer-readable medium claims (though these face higher scrutiny)</li>
          <li>Training methodology claims focusing on the technical aspects of model development</li>
        </ul>
        
        <p>Drafting should carefully avoid characterizing the invention as primarily a mathematical method, algorithm, or business method, instead emphasizing technical character throughout the specification.</p>
        
        <h2>Copyright Protection Strategies</h2>
        
        <p>Copyright offers important protection for several elements of AI innovations:</p>
        
        <h3>Software Code Protection</h3>
        
        <p>The underlying code implementing AI systems clearly qualifies for copyright protection. Companies should:</p>
        
        <ul>
          <li>Maintain rigorous documentation of authorship and development history</li>
          <li>Implement appropriate copyright notices in code repositories</li>
          <li>Consider selective registration of key code components</li>
          <li>Implement technical measures to prevent unauthorized access or copying</li>
        </ul>
        
        <h3>Training Data Compilations</h3>
        
        <p>While individual data points may not be protectable, carefully compiled datasets may qualify for copyright protection as original compilations if they demonstrate sufficient creativity in selection and arrangement. Strategies include:</p>
        
        <ul>
          <li>Documenting the creative choices in dataset creation and curation</li>
          <li>Demonstrating the original selection criteria and organization principles</li>
          <li>Creating layered access protections for valuable training datasets</li>
        </ul>
        
        <h3>AI-Generated Outputs</h3>
        
        <p>The copyright status of AI-generated content remains uncertain in many jurisdictions, including India. To maximize protection prospects:</p>
        
        <ul>
          <li>Ensure and document meaningful human direction in the creative process</li>
          <li>Structure workflows to incorporate human creative choices in prompt engineering</li>
          <li>Maintain detailed records of human contributions to final outputs</li>
          <li>Implement clear ownership provisions in agreements with AI system users</li>
        </ul>
        
        <h2>Trade Secret Protection</h2>
        
        <p>For many AI innovations, trade secret protection offers advantages over formal IP rights:</p>
        
        <ul>
          <li>Protection for algorithms and models that may not qualify for patent protection</li>
          <li>No disclosure requirements that could enable competitive workarounds</li>
          <li>Potentially unlimited duration if secrecy is maintained</li>
          <li>Immediate protection without registration requirements</li>
        </ul>
        
        <p>Effective trade secret strategies for AI innovations include:</p>
        
        <h3>Comprehensive Secrecy Measures</h3>
        
        <ul>
          <li>Implementing robust technical controls including access limitations and monitoring</li>
          <li>Deploying model encryption and obfuscation techniques</li>
          <li>Creating detailed documentation of secrecy measures for potential enforcement actions</li>
          <li>Establishing clear classification systems for confidential AI-related information</li>
        </ul>
        
        <h3>Contractual Protections</h3>
        
        <ul>
          <li>Developing tailored confidentiality provisions for AI development contexts</li>
          <li>Implementing appropriate restrictions in API and model access agreements</li>
          <li>Creating specific provisions addressing model improvement and derivative works</li>
          <li>Establishing clear ownership provisions for collaborative AI development</li>
        </ul>
        
        <h2>Hybrid Protection Strategies</h2>
        
        <p>Most sophisticated AI developers implement layered protection strategies combining multiple IP mechanisms:</p>
        
        <ul>
          <li>Patenting specific technical implementations and systems</li>
          <li>Copyright protection for code, documentation, and creative elements</li>
          <li>Trade secret protection for algorithms, models, and training methodologies</li>
          <li>Strategic defensive publications to prevent competitors from patenting incremental innovations</li>
        </ul>
        
        <p>The optimal balance depends on factors including:</p>
        
        <ul>
          <li>The nature of the specific AI technology</li>
          <li>Competitive landscape and reverse engineering risk</li>
          <li>Commercialization strategies (product sales vs. services vs. licensing)</li>
          <li>Resource constraints for IP protection and enforcement</li>
        </ul>
        
        <h2>Practical Recommendations</h2>
        
        <p>Organizations developing AI technologies in India should consider the following practical steps:</p>
        
        <ul>
          <li>Conduct early IP strategy assessments for new AI initiatives</li>
          <li>Implement inventor education programs addressing AI-specific considerations</li>
          <li>Develop clear documentation protocols for human contributions to AI development</li>
          <li>Create tailored confidentiality and IP assignment provisions for AI development contexts</li>
          <li>Monitor evolving legal developments in AI-related IP protection</li>
          <li>Consider international protection strategies for valuable AI innovations</li>
        </ul>
        
        <p>By thoughtfully navigating the complex intersection of AI technology and intellectual property law, companies can build valuable protection portfolios that support their innovation and commercialization objectives in this rapidly evolving field.</p>
      `,
    coverImage:
      "https://images.unsplash.com/photo-1677442135196-9460e884adf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    authorId: 2,
    publishedAt: "2025-02-15",
    category: "Intellectual Property",
    tags: [
      "Artificial Intelligence",
      "Patents",
      "Copyright",
      "Trade Secrets",
      "Innovation",
    ],
    featured: false,
    readingTime: 9,
  },
  {
    id: 4,
    slug: "commercial-litigation-trends-india",
    title: "Evolving Trends in Commercial Litigation in India",
    excerpt:
      "An analysis of significant developments shaping commercial litigation practice in India, including procedural reforms, evolving judicial approaches, and the impact of technology.",
    content: `
        <p>India's commercial litigation landscape is experiencing significant transformation driven by regulatory reforms, evolving judicial attitudes, and technological advancements. These changes are reshaping how disputes are resolved and creating both challenges and opportunities for businesses operating in India.</p>
        
        <h2>Procedural Reforms and Specialized Forums</h2>
        
        <p>Recent years have seen concerted efforts to create more efficient dispute resolution mechanisms for commercial matters:</p>
        
        <h3>Commercial Courts Framework</h3>
        
        <p>The Commercial Courts Act has established specialized commercial divisions and appellate divisions in High Courts, along with dedicated Commercial Courts at the district level. Key developments include:</p>
        
        <ul>
          <li>Increasing specialization among judges hearing commercial matters, leading to more nuanced decisions in complex business disputes</li>
          <li>Implementation of case management hearings to streamline proceedings and reduce delays</li>
          <li>Stricter timelines for case progression and written submissions</li>
          <li>Growing body of commercial jurisprudence addressing sophisticated business transactions</li>
        </ul>
        
        <p>While implementation has been uneven across jurisdictions, the commercial courts framework has generally delivered faster resolution of complex business disputes in major commercial centers.</p>
        
        <h3>Pre-Institution Mediation</h3>
        
        <p>The mandatory pre-institution mediation requirement introduced by the 2018 amendment to the Commercial Courts Act is increasingly shaping dispute resolution strategies:</p>
        
        <ul>
          <li>Early resolution of disputes with settlement potential</li>
          <li>Opportunities for preserving business relationships through negotiated solutions</li>
          <li>Increasing sophistication of mediation approaches for complex commercial matters</li>
          <li>Development of specialized mediator panels with industry-specific expertise</li>
        </ul>
        
        <p>Although initial skepticism existed, we're now seeing meaningful engagement with the mediation process in appropriate cases, with successful mediations reducing litigation volumes in commercial matters.</p>
        
        <h2>Evolving Substantive Approaches</h2>
        
        <p>Beyond procedural reforms, we're observing important shifts in how courts approach commercial disputes:</p>
        
        <h3>Contractual Interpretation</h3>
        
        <p>Indian courts are increasingly adopting a non-interventionist approach to commercial contracts, particularly those negotiated between sophisticated business parties:</p>
        
        <ul>
          <li>Greater deference to the express terms negotiated between parties</li>
          <li>Narrowing application of unconscionability doctrines in business-to-business contexts</li>
          <li>Increasing reluctance to rewrite contractual bargains under the guise of interpretation</li>
          <li>Enhanced recognition of standard international commercial practices and terms</li>
        </ul>
        
        <p>This evolution provides greater certainty for commercial transactions while placing additional premium on careful contract drafting and negotiation.</p>
        
        <h3>Damages Assessment</h3>
        
        <p>Courts are demonstrating increasing sophistication in assessing damages in complex commercial cases:</p>
        
        <ul>
          <li>Greater receptivity to expert evidence on financial and economic aspects of damages</li>
          <li>More nuanced approaches to consequential damages and lost profits claims</li>
          <li>Increasing willingness to award substantial damages when properly proven</li>
          <li>Growing recognition of complex valuation methodologies in appropriate cases</li>
        </ul>
        
        <p>This trend rewards thorough damages preparation and presentation, with courts increasingly expecting rigorous economic analysis rather than speculative claims.</p>
        
        <h3>Interim Relief Practices</h3>
        
        <p>Approaches to interim measures are evolving to address commercial realities:</p>
        
        <ul>
          <li>More sophisticated analysis of balance of convenience in complex commercial contexts</li>
          <li>Increasing use of creative interim arrangements to preserve business operations during disputes</li>
          <li>Greater willingness to enforce well-drafted emergency arbitrator decisions</li>
          <li>Enhanced recognition of the need for speedy interim relief in time-sensitive commercial contexts</li>
        </ul>
        
        <h2>Technology Impact on Commercial Litigation</h2>
        
        <p>The digitalization of court processes, accelerated by the pandemic, has permanently altered commercial litigation practice:</p>
        
        <h3>Virtual Hearings and Electronic Filing</h3>
        
        <ul>
          <li>Continued availability of virtual hearing options for procedural matters and certain substantive hearings</li>
          <li>Streamlined electronic filing systems reducing administrative burdens</li>
          <li>Enhanced access to court records and case status information</li>
          <li>Reduced geographical limitations for specialized counsel participation</li>
        </ul>
        
        <p>These developments have improved efficiency while reducing costs associated with routine court appearances.</p>
        
        <h3>Evidence Management and Presentation</h3>
        
        <p>Digital transformation is particularly evident in how evidence is managed and presented:</p>
        
        <ul>
          <li>Increased acceptance of electronic evidence with appropriate authentication</li>
          <li>More sophisticated digital document management in complex commercial cases</li>
          <li>Growing use of technology for evidence presentation in hearings</li>
          <li>Enhanced capabilities for managing large document volumes efficiently</li>
        </ul>
        
        <h3>Technology-Related Disputes</h3>
        
        <p>The rise of digital business models has generated new categories of commercial disputes requiring specialized knowledge:</p>
        
        <ul>
          <li>Complex software implementation and licensing disputes</li>
          <li>Data breach and cybersecurity-related litigation</li>
          <li>Intellectual property issues in digital contexts</li>
          <li>Regulatory challenges involving emerging technologies</li>
        </ul>
        
        <p>These matters often require courts to grapple with novel technical issues, creating both challenges and opportunities for litigants.</p>
        
        <h2>Strategic Implications for Businesses</h2>
        
        <p>These evolving trends have important implications for businesses operating in India:</p>
        
        <h3>Dispute Prevention and Management</h3>
        
        <ul>
          <li>Investing in robust contract drafting with clear dispute resolution provisions</li>
          <li>Implementing early case assessment protocols for emerging disputes</li>
          <li>Developing appropriate escalation processes for managing disputes before they reach litigation</li>
          <li>Creating focused documentation protocols for potential dispute areas</li>
        </ul>
        
        <h3>Dispute Resolution Strategy</h3>
        
        <ul>
          <li>Reassessing forum selection approaches in light of specialized court developments</li>
          <li>Taking meaningful advantage of pre-institution mediation opportunities</li>
          <li>Building relationships with specialized counsel in key commercial practice areas</li>
          <li>Developing litigation budgeting and management processes that reflect procedural reforms</li>
        </ul>
        
        <h3>Technology Adoption</h3>
        
        <ul>
          <li>Implementing appropriate legal technology solutions for efficient dispute management</li>
          <li>Developing capabilities for digital evidence preservation and management</li>
          <li>Training internal teams on technological aspects of modern dispute processes</li>
        </ul>
        
        <h2>Conclusion</h2>
        
        <p>India's commercial litigation landscape continues to evolve in ways that reward preparation, specialization, and strategic thinking. By understanding these trends and adapting approaches accordingly, businesses can navigate disputes more effectively while managing risks and costs associated with commercial litigation.</p>
      `,
    coverImage:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    authorId: 3,
    publishedAt: "2025-01-28",
    category: "Litigation",
    tags: [
      "Commercial Courts",
      "Dispute Resolution",
      "Legal Strategy",
      "Litigation",
    ],
    featured: false,
    readingTime: 7,
  },
  {
    id: 5,
    slug: "corporate-governance-trends-india",
    title:
      "Corporate Governance Evolution in India: Emerging Trends and Best Practices",
    excerpt:
      "An analysis of significant developments in India's corporate governance landscape and practical approaches for boards and management teams.",
    content: `
        <p>Corporate governance frameworks in India are undergoing substantial evolution driven by regulatory changes, investor expectations, and emerging global standards. These developments present both challenges and opportunities for boards and management teams seeking to build robust governance frameworks.</p>
        
        <h2>Regulatory Landscape Evolution</h2>
        
        <p>Recent years have witnessed significant regulatory developments affecting corporate governance requirements:</p>
        
        <h3>Companies Act and SEBI Listing Regulations Updates</h3>
        
        <p>The core governance framework established by the Companies Act and SEBI's Listing Obligations and Disclosure Requirements (LODR) continues to evolve, with recent changes focusing on:</p>
        
        <ul>
          <li>Enhanced disclosure requirements around related party transactions</li>
          <li>Strengthened independence requirements for board committees</li>
          <li>Expanded reporting on environmental and social governance factors</li>
          <li>More detailed disclosure requirements around board evaluation processes</li>
          <li>Stricter requirements for group corporate structures and subsidiary governance</li>
        </ul>
        
        <p>These incremental changes reflect a continuing regulatory focus on transparency, independence, and accountability in corporate governance structures.</p>
        
        <h3>Environmental, Social and Governance (ESG) Requirements</h3>
        
        <p>Perhaps the most significant recent development is the introduction of mandatory Business Responsibility and Sustainability Reporting (BRSR) for India's largest 1,000 listed companies. Key aspects include:</p>
        
        <ul>
          <li>Detailed reporting on environmental metrics including GHG emissions, energy usage, and waste management</li>
          <li>Comprehensive disclosure of social impact indicators including workforce diversity, labor practices, and community engagement</li>
          <li>Governance disclosures around ethics, anti-corruption, and responsible business practices</li>
          <li>Forward-looking sustainability targets and implementation roadmaps</li>
        </ul>
        
        <p>These requirements represent a fundamental shift from voluntary to mandatory sustainability reporting, signaling the integration of ESG considerations into mainstream corporate governance expectations.</p>
        
        <h2>Evolving Board Practices</h2>
        
        <p>Beyond regulatory compliance, leading companies are adopting enhanced governance practices that reflect evolving expectations:</p>
        
        <h3>Board Composition and Diversity</h3>
        
        <p>Forward-thinking boards are moving beyond minimum regulatory requirements to build more diverse and effective boards:</p>
        
        <ul>
          <li>Expanding diversity considerations beyond gender to include professional background, age, geography, and other dimensions</li>
          <li>Implementing rigorous skills mapping to identify board capability requirements</li>
          <li>Developing structured succession planning processes for board renewal</li>
          <li>Creating customized onboarding programs for new directors</li>
        </ul>
        
        <p>These approaches recognize that board effectiveness depends on having the right mix of perspectives and expertise to address increasingly complex oversight responsibilities.</p>
        
        <h3>Board Effectiveness and Evaluation</h3>
        
        <p>Board evaluation practices are becoming more substantive and action-oriented:</p>
        
        <ul>
          <li>Moving beyond compliance-oriented evaluations to genuinely assess board effectiveness</li>
          <li>Incorporating external facilitation periodically for greater objectivity</li>
          <li>Establishing clear action plans based on evaluation outcomes</li>
          <li>Implementing ongoing feedback mechanisms rather than solely annual assessments</li>
        </ul>
        
        <p>These practices reflect the understanding that meaningful board evaluation is essential for continuous governance improvement.</p>
        
        <h3>Risk Governance Enhancements</h3>
        
        <p>Board oversight of risk management is evolving to address more complex and interconnected risks:</p>
        
        <ul>
          <li>Developing more sophisticated risk appetite frameworks</li>
          <li>Expanding risk oversight beyond traditional financial and operational risks to emerging areas like cybersecurity, climate change, and reputation</li>
          <li>Implementing dedicated board discussions focused on long-term strategic risks</li>
          <li>Creating clearer delineation between board and management risk responsibilities</li>
        </ul>
        
        <p>These approaches recognize that effective risk governance requires both comprehensive frameworks and regular board engagement with material risks.</p>
        
        <h2>Shareholder Engagement and Activism</h2>
        
        <p>The relationship between companies and their shareholders continues to evolve:</p>
        
        <h3>Institutional Investor Expectations</h3>
        
        <p>Institutional investors in India are becoming more vocal about governance expectations:</p>
        
        <ul>
          <li>Publishing detailed voting policies on key governance matters</li>
          <li>Engaging directly with boards on governance concerns</li>
          <li>Taking more active stances on director elections and remuneration proposals</li>
          <li>Incorporating ESG factors into investment and engagement decisions</li>
        </ul>
        
        <p>These developments require boards to understand and proactively address institutional investor priorities.</p>
        
        <h3>Shareholder Activism</h3>
        
        <p>While still less prevalent than in some markets, shareholder activism in India is increasing:</p>
        
        <ul>
          <li>Growing willingness of shareholders to challenge board decisions publicly</li>
          <li>Use of regulatory complaints mechanisms to address governance concerns</li>
          <li>Coordination among institutional investors on governance matters</li>
          <li>Media outreach strategies to amplify governance concerns</li>
        </ul>
        
        <p>These trends highlight the importance of boards maintaining strong shareholder communication and anticipating potential activism triggers.</p>
        
        <h2>Technology and Governance</h2>
        
        <p>Technology is reshaping governance practices in several important ways:</p>
        
        <h3>Digital Boardroom Tools</h3>
        
        <ul>
          <li>Implementation of secure board portal solutions for information sharing</li>
          <li>Data visualization tools to improve board reporting effectiveness</li>
          <li>Collaborative platforms for board deliberation between meetings</li>
          <li>Electronic voting and resolution mechanisms</li>
        </ul>
        
        <p>These tools are enhancing board efficiency while improving information security and access.</p>
        
        <h3>Technology Risk Governance</h3>
        
        <p>Boards are developing enhanced approaches to technology risk oversight:</p>
        
        <ul>
          <li>Implementing regular cybersecurity briefings and scenario exercises</li>
          <li>Developing technology expertise at the board level</li>
          <li>Creating clearer reporting on technology risks and mitigation strategies</li>
          <li>Establishing technology committees in sectors with high digital dependency</li>
        </ul>
        
        <h2>Future Outlook and Recommendations</h2>
        
        <p>As corporate governance continues to evolve, boards should consider the following strategic approaches:</p>
        
        <h3>Moving Beyond Compliance</h3>
        
        <ul>
          <li>Viewing governance as a source of competitive advantage rather than a compliance burden</li>
          <li>Benchmarking against global best practices rather than local minimum requirements</li>
          <li>Developing governance frameworks aligned with company values and long-term strategy</li>
          <li>Implementing regular governance reviews beyond required assessments</li>
        </ul>
        
        <h3>Building Future-Ready Governance Capabilities</h3>
        
        <ul>
          <li>Developing board expertise in emerging areas like digital transformation, sustainability, and geopolitical risk</li>
          <li>Creating governance structures adaptable to changing business models and stakeholder expectations</li>
          <li>Implementing continuous director education programs on emerging governance topics</li>
          <li>Fostering board cultures that balance oversight with strategic value addition</li>
        </ul>
        
        <h3>Integrating Stakeholder Governance</h3>
        
        <ul>
          <li>Developing more structured approaches to understanding diverse stakeholder interests</li>
          <li>Creating clearer connections between stakeholder impacts and strategic decision-making</li>
          <li>Implementing appropriate stakeholder-oriented metrics in performance frameworks</li>
          <li>Enhancing disclosure on how stakeholder considerations inform board decisions</li>
        </ul>
        
        <p>By embracing these forward-looking governance approaches, Indian companies can build more resilient boards capable of navigating increasingly complex business environments while meeting evolving stakeholder expectations.</p>
      `,
    coverImage:
      "https://images.unsplash.com/photo-1573164574511-73c773193279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    authorId: 1,
    publishedAt: "2025-01-15",
    category: "Corporate Governance",
    tags: ["Corporate Law", "SEBI", "ESG", "Board Practices"],
    featured: false,
    readingTime: 8,
  },
  {
    id: 6,
    slug: "esg-compliance-framework-india",
    title: "Building Effective ESG Compliance Frameworks in India",
    subtitle:
      "Strategic Approaches for Companies Navigating Environmental, Social and Governance Requirements",
    excerpt:
      "Practical guidance for developing robust ESG compliance programs that address regulatory requirements while creating strategic advantage.",
    content: `
        <p>Environmental, Social, and Governance (ESG) compliance is rapidly evolving from a voluntary initiative to a mandatory requirement for companies operating in India. With the introduction of Business Responsibility and Sustainability Reporting (BRSR) and growing investor focus on ESG performance, organizations need structured approaches to build effective compliance frameworks.</p>
        
        <h2>The Evolving ESG Regulatory Landscape</h2>
        
        <p>India's ESG regulatory framework is expanding across multiple dimensions:</p>
        
        <h3>Mandatory Reporting Requirements</h3>
        
        <ul>
          <li>SEBI's mandatory BRSR for top 1,000 listed companies, with detailed environmental, social, and governance disclosures</li>
          <li>Enhanced environmental compliance reporting under various pollution control regulations</li>
          <li>CSR reporting requirements under the Companies Act</li>
          <li>Proposed climate risk disclosure frameworks aligned with international standards</li>
        </ul>
        
        <h3>Sector-Specific ESG Regulations</h3>
        
        <ul>
          <li>Energy efficiency and renewable energy obligations for designated industries</li>
          <li>Extended Producer Responsibility requirements for manufacturing sectors</li>
          <li>Supply chain due diligence obligations in certain industries</li>
          <li>Water conservation and management mandates for water-intensive sectors</li>
        </ul>
        
        <h3>Financial Sector ESG Integration</h3>
        
        <ul>
          <li>RBI's guidance on climate risk integration in risk management frameworks</li>
          <li>Sustainable finance taxonomies and disclosure frameworks</li>
          <li>ESG integration in lending decisions by major financial institutions</li>
          <li>Green bond standards and sustainable investment guidelines</li>
        </ul>
        
        <p>This evolving landscape requires companies to develop comprehensive compliance approaches that can adapt to changing requirements while maintaining operational efficiency.</p>
        
        <h2>Building Block 1: ESG Governance Structure</h2>
        
        <p>Effective ESG compliance begins with appropriate governance mechanisms:</p>
        
        <h3>Board-Level Oversight</h3>
        
        <p>Leading practices include:</p>
        
        <ul>
          <li>Clear delineation of ESG oversight responsibilities at the board level</li>
          <li>Regular board agenda items addressing material ESG risks and opportunities</li>
          <li>Board skill matrix including relevant ESG expertise</li>
          <li>Board-approved ESG policies and targets with implementation accountability</li>
        </ul>
        
        <p>Companies may assign ESG oversight to an existing committee (often audit, risk, or nomination/governance) or create a dedicated sustainability committee depending on the materiality of ESG issues to their business.</p>
        
        <h3>Management Integration</h3>
        
        <p>Operational ESG governance typically includes:</p>
        
        <ul>
          <li>Executive-level ESG steering committee with cross-functional representation</li>
          <li>Dedicated sustainability function with appropriate resources and reporting lines</li>
          <li>Clear ESG roles and responsibilities across business units and functions</li>
          <li>ESG performance metrics integrated into performance management systems</li>
        </ul>
        
        <p>Effective ESG governance structures balance centralized policy direction with distributed implementation responsibility to ensure both strategic alignment and operational effectiveness.</p>
        
        <h2>Building Block 2: ESG Risk Assessment and Materiality</h2>
        
        <p>Comprehensive ESG frameworks must be grounded in thoughtful risk assessment and materiality determination:</p>
        
        <h3>ESG Risk Identification Processes</h3>
        
        <p>Structured approaches typically include:</p>
        
        <ul>
          <li>Periodic ESG risk scans across operations, value chain, and market context</li>
          <li>Integration of ESG factors into enterprise risk management processes</li>
          <li>Forward-looking assessment of emerging ESG risks and regulatory developments</li>
          <li>Consideration of both direct operational risks and value chain exposures</li>
        </ul>
        
        <h3>Materiality Assessment Methodology</h3>
        
        <p>Effective materiality assessments typically involve:</p>
        
        <ul>
          <li>Structured stakeholder engagement to understand varied ESG expectations</li>
          <li>Dual materiality consideration (impact on business and impact on environment/society)</li>
          <li>Quantitative and qualitative assessment methodologies</li>
          <li>Regular reassessment as business conditions and stakeholder expectations evolve</li>
        </ul>
        
        <p>These assessments should inform both compliance priorities and strategic initiatives to ensure resources are allocated to the most significant ESG issues.</p>
        
        <h2>Building Block 3: Policy and Standard Development</h2>
        
        <p>Comprehensive policy frameworks establish clear expectations and provide implementation guidance:</p>
        
        <h3>Core ESG Policy Architecture</h3>
        
        <p>Key policy elements typically include:</p>
        
        <ul>
          <li>Overarching ESG/sustainability policy establishing principles and commitments</li>
          <li>Topic-specific policies addressing material issues (e.g., climate, human rights, diversity)</li>
          <li>Implementation standards providing operational guidance</li>
          <li>Relevant procedures and work instructions for specific activities</li>
        </ul>
        
        <h3>Policy Integration Approaches</h3>
        
        <p>Effective policy frameworks:</p>
        
        <ul>
          <li>Align ESG policies with broader corporate policy architecture</li>
          <li>Integrate ESG considerations into existing operational policies rather than creating standalone parallel requirements where appropriate</li>
          <li>Establish clear policy governance including review cycles and approval authorities</li>
          <li>Ensure policies are adapted to local regulatory contexts while maintaining global principles</li>
        </ul>
        
        <p>Well-designed policy frameworks balance comprehensive coverage with usability to drive effective implementation.</p>
        
        <h2>Building Block 4: Data Management and Reporting Systems</h2>
        
        <p>Reliable ESG data is fundamental to both compliance and performance improvement:</p>
        
        <h3>ESG Data Management Infrastructure</h3>
        
        <p>Key elements include:</p>
        
        <ul>
          <li>Centralized ESG data management systems with appropriate access controls</li>
          <li>Clear data governance including ownership, quality controls, and validation processes</li>
          <li>Integration with operational systems to automate data collection where possible</li>
          <li>Appropriate audit trails for regulatory reporting</li>
        </ul>
        
        <h3>Reporting Framework Alignment</h3>
        
        <p>Effective reporting approaches:</p>
        
        <ul>
          <li>Align data collection with relevant reporting frameworks (BRSR, GRI, SASB, etc.)</li>
          <li>Establish clear reporting calendars and responsibilities</li>
          <li>Implement appropriate internal controls for reported information</li>
          <li>Design reporting processes to meet both compliance requirements and stakeholder information needs</li>
        </ul>
        
        <p>Investing in robust ESG data management reduces compliance burdens while improving decision-making capability.</p>
        
        <h2>Building Block 5: Training and Capacity Building</h2>
        
        <p>Even the best-designed frameworks require knowledgeable people for effective implementation:</p>
        
        <h3>Role-Based ESG Training</h3>
        
        <p>Comprehensive approaches include:</p>
        
        <ul>
          <li>Board and executive education on material ESG topics and governance responsibilities</li>
          <li>Function-specific training on relevant ESG requirements and implementation approaches</li>
          <li>General employee awareness programs on company ESG commitments and individual contributions</li>
          <li>Specialized technical training for sustainability professionals</li>
        </ul>
        
        <h3>Capability Development</h3>
        
        <p>Beyond training, organizations should consider:</p>
        
        <ul>
          <li>Integrating ESG competencies into relevant job descriptions</li>
          <li>Developing internal ESG subject matter experts within key functions</li>
          <li>Creating communities of practice to share knowledge and best practices</li>
          <li>Establishing external partnerships to access specialized expertise</li>
        </ul>
        
        <p>These investments build organizational capacity to respond effectively to evolving ESG requirements.</p>
        
        <h2>Building Block 6: Monitoring and Continuous Improvement</h2>
        
        <p>Effective frameworks include robust assurance mechanisms:</p>
        
        <h3>Performance Monitoring Systems</h3>
        
        <ul>
          <li>Defined ESG key performance indicators with appropriate review cadence</li>
          <li>Clear performance targets and accountability mechanisms</li>
          <li>Regular management reviews of ESG performance</li>
          <li>Transparent internal reporting on progress and challenges</li>
        </ul>
        
        <h3>Assurance Processes</h3>
        
        <ul>
          <li>Internal audit coverage of material ESG risks and compliance obligations</li>
          <li>External assurance of key reported metrics</li>
          <li>Management certifications of ESG disclosures</li>
          <li>Periodic framework effectiveness assessments</li>
        </ul>
        
        <p>These mechanisms provide confidence in the integrity of ESG programs while driving continuous improvement.</p>
        
        <h2>Strategic Integration and Value Creation</h2>
        
        <p>Beyond compliance, leading organizations are leveraging ESG frameworks to create strategic value:</p>
        
        <h3>Business Strategy Integration</h3>
        
        <ul>
          <li>Incorporating material ESG trends into strategic planning processes</li>
          <li>Aligning sustainability initiatives with core business priorities</li>
          <li>Developing products and services addressing sustainability challenges</li>
          <li>Leveraging ESG performance for competitive differentiation</li>
        </ul>
        
        <h3>Stakeholder Engagement</h3>
        
        <ul>
          <li>Using ESG frameworks to strengthen investor communications</li>
          <li>Leveraging sustainability credentials in customer relationships</li>
          <li>Enhancing employee engagement through purpose-driven initiatives</li>
          <li>Building trust with communities and regulators through transparent ESG practices</li>
        </ul>
        
        <p>When thoughtfully implemented, ESG compliance frameworks can become platforms for innovation and value creation rather than mere compliance exercises.</p>
        
        <h2>Conclusion</h2>
        
        <p>Building effective ESG compliance frameworks requires systematic approaches addressing governance, risk assessment, policy development, data management, capability building, and assurance. By developing these fundamental building blocks while maintaining focus on strategic integration, companies can not only meet evolving regulatory requirements but also create sustainable value for a broad range of stakeholders.</p>
      `,
    coverImage:
      "https://images.unsplash.com/photo-1520453803296-c39eabe2dab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    authorId: 4,
    publishedAt: "2024-12-20",
    category: "Regulatory Compliance",
    tags: ["ESG", "Sustainability", "BRSR", "Corporate Governance"],
    featured: true,
    readingTime: 12,
  },
];

// Helper functions

// Get a single blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

// Get author by ID
export const getAuthorById = (id: number): BlogAuthor | undefined => {
  return blogAuthors.find((author) => author.id === id);
};

// Get featured blog posts
export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter((post) => post.featured);
};

// Get recent blog posts
export const getRecentPosts = (limit: number = 3): BlogPost[] => {
  return [...blogPosts]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, limit);
};

// Get posts by category
export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
};

// Get posts by tag
export const getPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter((post) =>
    post.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
};

// Get posts by author
export const getPostsByAuthor = (authorId: number): BlogPost[] => {
  return blogPosts.filter((post) => post.authorId === authorId);
};

// Get related posts
export const getRelatedPosts = (
  currentSlug: string,
  limit: number = 3
): BlogPost[] => {
  const currentPost = getBlogPostBySlug(currentSlug);

  if (!currentPost) return [];

  return blogPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      // Calculate relevance score (shared tags, same category, same author)
      let score = 0;

      // Award points for matching tags
      post.tags.forEach((tag) => {
        if (currentPost.tags.includes(tag)) score += 2;
      });

      // Award points for same category
      if (post.category === currentPost.category) score += 3;

      // Award points for same author
      if (post.authorId === currentPost.authorId) score += 2;

      return { ...post, relevanceScore: score };
    })
    .filter((post) => post.relevanceScore > 0)
    .sort((a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0))
    .slice(0, limit);
};
