"use client";

import { ServicePage } from "@/components/service-page-template";

const RealEstatePage = () => {
  const keyServices = [
    {
      title: "Real Estate Transactions",
      description:
        "Comprehensive legal services for property acquisitions, dispositions, leasing, and financing across commercial and residential sectors.",
    },
    {
      title: "Real Estate Development",
      description:
        "Legal support for development projects including land acquisition, construction contracts, regulatory approvals, and project financing.",
    },
    {
      title: "RERA Compliance",
      description:
        "Advisory on compliance with Real Estate (Regulation and Development) Act requirements for developers, agents, and other stakeholders.",
    },
    {
      title: "Land Title & Due Diligence",
      description:
        "Thorough investigation of property titles, encumbrances, and legal risks to secure investments and prevent future disputes.",
    },
    {
      title: "Real Estate Dispute Resolution",
      description:
        "Representation in property-related disputes, including title disputes, specific performance, and contractual breaches.",
    },
    {
      title: "Regulatory Compliance",
      description:
        "Guidance on navigating complex regulatory frameworks affecting real estate transactions and developments across different jurisdictions.",
    },
  ];

  return (
    <ServicePage
      title="Real Estate"
      subtitle="Legal expertise across the real estate spectrum"
      headerImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      description="Our Real Estate team has worked on some of the largest, most prominent and complex engagements for a broad spectrum of clients such as land owners, developers, construction companies, investors, lenders, corporates, and HNI buyers. The team is able to leverage its experience and knowhow of local regulatory issues and past engagements with various state authorities and regulators to provide commercial and outcome-driven advice. Our Real Estate team has an extensive track record of handling some of the most significant and high-profile cases across the industry. By combining legal acumen with industry insight, our team offers strategic solutions that drive successful real estate ventures while mitigating potential risks. Whether advising on large-scale developments or assisting individual buyers with property transactions, we remain committed to delivering efficient, commercially viable outcomes for our clients."
      keyServices={keyServices}
    />
  );
};

export default RealEstatePage;
