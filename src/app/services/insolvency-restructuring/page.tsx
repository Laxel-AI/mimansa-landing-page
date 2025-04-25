"use client";

import { ServicePage } from "@/components/service-page-template";

const InsolvencyPage = () => {
  const keyServices = [
    {
      title: "Insolvency Resolution Process",
      description:
        "Guiding clients through the Corporate Insolvency Resolution Process (CIRP) under the Insolvency and Bankruptcy Code.",
    },
    {
      title: "Creditor Representation",
      description:
        "Representing financial and operational creditors in insolvency proceedings to maximize recovery and protect interests.",
    },
    {
      title: "Debtor Advisory",
      description:
        "Advising corporate debtors on restructuring options, insolvency proceedings, and strategies for business continuity.",
    },
    {
      title: "Resolution Applicant Support",
      description:
        "Assisting potential investors and resolution applicants in evaluating and acquiring distressed assets through the insolvency process.",
    },
    {
      title: "Insolvency Professional Advisory",
      description:
        "Providing legal support to Resolution Professionals and Liquidators in handling complex insolvency cases.",
    },
    {
      title: "Restructuring & Liquidation",
      description:
        "Facilitating business restructuring and orderly liquidation processes to optimize outcomes for stakeholders.",
    },
  ];

  return (
    <ServicePage
      title="Insolvency & Restructuring"
      subtitle="Strategic solutions for businesses navigating financial challenges"
      headerImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      description="Mimansa specializes in delivering strategic solutions for businesses navigating bankruptcy and insolvency challenges. Our approach focuses on providing tailored advice and actionable strategies to minimize risks and secure favorable outcomes. Our Insolvency & Restructuring team has provided advisory to various creditors, debtors, guarantors, directors, insolvency professionals, and resolution applicants regarding restructuring, liquidation, and winding-up matters under the Indian Insolvency & Bankruptcy Code. From initial evaluations to restructuring strategies and debt negotiations, we offer comprehensive bankruptcy services, guiding clients seamlessly through every stage of the insolvency process."
      keyServices={keyServices}
    />
  );
};
export default InsolvencyPage;
