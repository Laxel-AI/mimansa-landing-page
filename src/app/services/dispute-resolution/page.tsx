"use client";

import { ServicePage } from "@/components/service-page-template";

const DisputeResolutionPage = () => {
  const keyServices = [
    {
      title: "Commercial Litigation",
      description:
        "Representation in complex commercial disputes before courts at all levels, including High Courts and the Supreme Court of India.",
    },
    {
      title: "Arbitration",
      description:
        "Expert representation in domestic and international arbitration proceedings across various institutional rules and frameworks.",
    },
    {
      title: "Alternative Dispute Resolution",
      description:
        "Facilitation of mediation, conciliation, and other ADR mechanisms to achieve efficient and cost-effective resolutions.",
    },
    {
      title: "Regulatory Investigations",
      description:
        "Strategic guidance and representation during regulatory investigations and enforcement proceedings.",
    },
    {
      title: "Strategic Advisory",
      description:
        "Preventive counseling and risk assessment to identify and mitigate potential dispute risks in business operations.",
    },
    {
      title: "Industry-Specific Expertise",
      description:
        "Specialized knowledge in handling industry-specific disputes across sectors with thorough understanding of regulatory frameworks.",
    },
  ];

  return (
    <ServicePage
      title="Dispute Resolution"
      subtitle="Strategic representation and practical solutions for complex disputes"
      headerImage="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
      description="With a deep understanding of industry-specific challenges and evolving legal frameworks, Mimansa delivers strategic solutions to help clients navigate disputes effectively and protect their interests. Our Dispute Resolution Team operates in close collaboration with each specialized practice area, ensuring a seamless approach to litigation and dispute management. This integrated strategy becomes particularly crucial as cases advance to higher judicial forums, including the High Courts and the Supreme Court of India, where we offer robust representation and strategic advocacy. We are dedicated to achieving the best possible outcomes through litigation, arbitration, and alternative dispute resolution (ADR) mechanisms. Our approach combines legal expertise with a thorough understanding of regulatory and commercial implications, allowing us to craft strong arguments and effective resolutions for clients across diverse industries."
      keyServices={keyServices}
    />
  );
};

export default DisputeResolutionPage;
