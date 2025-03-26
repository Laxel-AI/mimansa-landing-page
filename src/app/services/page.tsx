import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/metadata/service";

interface ServiceCardProps {
  name: string;
  description: string;
  imageUrl: string;
  slug: string;
}

const ServiceCard = ({
  name,
  description,
  imageUrl,
  slug,
}: ServiceCardProps) => (
  <Link href={`/services/${slug}`} className="group relative block">
    <div className="relative h-[400px] w-full overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />

      {/* Background image */}
      <Image
        src={imageUrl}
        alt={name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-playfair text-white mb-2">{name}</h3>
            <p className="text-gray-200 text-sm line-clamp-2">{description}</p>
          </div>
          <ArrowUpRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </div>
  </Link>
);

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-playfair mb-6">
              Services & Industries
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our expertise spans across key services of the Indian economy. We
              combine deep industry knowledge with technical excellence to
              deliver optimal legal solutions for our clients.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              name={service.name}
              description={service.shortDescription}
              imageUrl={service.imageUrl}
              slug={service.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
