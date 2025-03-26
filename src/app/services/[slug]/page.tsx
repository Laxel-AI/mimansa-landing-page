import { services, KeyService, CaseStudy } from "@/metadata/service";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => (
  <h2 className="text-2xl font-playfair mb-6">{title}</h2>
);

const ServiceCard = ({ title, description }: KeyService) => (
  <div className="bg-white border p-6 rounded-lg hover:border-amber-600 transition-colors group">
    <h3 className="text-lg font-medium mb-3 group-hover:text-amber-600 transition-colors">
      {title}
    </h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const CaseStudyCard = ({ title, description, result, year }: CaseStudy) => (
  <div className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="text-sm text-amber-600 font-medium mb-2">{year}</div>
        <h3 className="text-lg font-medium mb-3">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {description}
        </p>
        <p className="text-sm font-medium text-gray-900 border-l-2 border-amber-600 pl-4">
          {result}
        </p>
      </div>
      <ArrowUpRight className="h-5 w-5 text-gray-400" />
    </div>
  </div>
);

interface ExpertiseListProps {
  items: string[];
}

const ExpertiseList = ({ items }: ExpertiseListProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
    {items.map((item, index) => (
      <div key={index} className="flex items-center space-x-3">
        <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
        <span className="text-gray-800">{item}</span>
      </div>
    ))}
  </div>
);

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Top Navigation */}

      {/* Hero Section */}
      <div className="relative bg-white pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-playfair mb-6">{service.name}</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {service.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Overview */}
            <div>
              <SectionHeader title="Overview" />
              <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  {service.longDescription}
                </p>
              </div>
            </div>

            {/* Key Services */}
            <div>
              <SectionHeader title="Key Services" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.keyServices.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
            </div>

            {/* Case Studies */}
            <div>
              <SectionHeader title="Selected Experience" />
              <div className="space-y-6">
                {service.caseStudies.map((study) => (
                  <CaseStudyCard key={study.id} {...study} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Expertise */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-6">Areas of Expertise</h3>
                <ExpertiseList items={service.expertise} />
              </div>

              {/* Contact Card */}
              <div className="bg-amber-50 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4">Get in Touch</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Speak with our experts about your legal needs in{" "}
                  {service.name.toLowerCase()}.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
