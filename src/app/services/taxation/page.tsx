"use client";

import { ServicePage } from "@/components/service-page-template";

const TaxationPage = () => {
  const keyServices = [
    {
      title: "Tax Compliance & Advisory",
      description:
        "Helping businesses adhere to statutory requirements, optimize tax liabilities, and structure operations efficiently.",
    },
    {
      title: "Tax Litigation & Dispute Resolution",
      description:
        "Representing clients in tax disputes before authorities, tribunals, and courts, leveraging our legal expertise to achieve favorable outcomes.",
    },
    {
      title: "Corporate & Transactional Tax Planning",
      description:
        "Structuring mergers, acquisitions, and business reorganizations to maximize tax benefits while ensuring legal compliance.",
    },
    {
      title: "Indirect Taxation & GST Advisory",
      description:
        "Providing guidance on GST applicability, compliance, filings, and dispute resolution under the GST framework.",
    },
    {
      title: "International Tax & Cross-Border Transactions",
      description:
        "Advising multinational businesses on transfer pricing, double taxation avoidance, and international tax structuring.",
    },
    {
      title: "Tax Due Diligence & Risk Assessment",
      description:
        "Conducting thorough evaluations of financial and tax exposures to support informed decision-making.",
    },
  ];

  return (
    <ServicePage
      title="Taxation"
      subtitle="Comprehensive tax advisory services across industries"
      headerImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
      description="Our Tax team is a dynamic blend of seasoned lawyers and qualified Chartered Accountants, bringing together legal expertise and financial acumen to provide comprehensive tax advisory services across industries. We specialize in offering strategic solutions tailored to the unique needs of businesses, ensuring compliance with tax laws while optimizing financial efficiency. With a deep understanding of direct and indirect taxation frameworks, our team assists clients in navigating complex regulatory landscapes, mitigating tax risks, and structuring transactions in a tax-efficient manner. Whether it's corporate taxation, goods and services tax (GST), international tax advisory, or tax litigation, we provide end-to-end support at every stage."
      keyServices={keyServices}
    />
  );
};

export default TaxationPage;
