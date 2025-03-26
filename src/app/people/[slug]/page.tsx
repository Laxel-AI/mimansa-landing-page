import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Mail,
  Phone,
  Building,
  Globe,
  BookOpen,
  Award,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { people, Person } from "@/metadata/people";

// Type definitions
interface InfoSectionProps {
  title: React.ReactNode;
  items: string[];
}

interface ContactButtonProps {
  icon: LucideIcon;
  text: string;
  href: string;
  label: string;
}

interface TitleWithIconProps {
  icon: LucideIcon;
  text: string;
}

const TitleWithIcon = ({ icon: Icon, text }: TitleWithIconProps) => (
  <div className="flex items-center space-x-2">
    <Icon className="h-5 w-5 text-amber-600" />
    <span>{text}</span>
  </div>
);

const InfoSection = ({ title, items }: InfoSectionProps) => (
  <div className="mb-8">
    <h3 className="text-lg font-medium tracking-tight mb-4">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-gray-600 flex items-center space-x-2">
          <span className="w-2 h-2 bg-amber-600 rounded-full" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ContactButton = ({
  icon: Icon,
  text,
  href,
  label,
}: ContactButtonProps) => (
  <a
    href={href}
    aria-label={label}
    className="flex items-center space-x-3 px-4 py-3 border rounded-lg text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
  >
    <Icon className="h-5 w-5 text-gray-400" />
    <span>{text}</span>
  </a>
);

const OtherPersonCard = ({ person }: { person: Person }) => (
  <Link
    href={`/people/${person.slug}`}
    className="group relative overflow-hidden bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
  >
    <div className="flex items-center space-x-4">
      <div className="h-16 w-16 relative rounded-full overflow-hidden">
        <Image
          src={person.imageUrl}
          alt={person.name}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="font-medium text-gray-900 group-hover:text-amber-600 transition-colors">
          {person.name}
        </h3>
        <p className="text-sm text-gray-500">{person.title || person.role}</p>
      </div>
    </div>
  </Link>
);

export default function PersonPage({ params }: { params: { slug: string } }) {
  const person = people.find((p) => p.slug === params.slug);

  if (!person) {
    notFound();
  }

  // Get other people with same role for "Other [Role]s" section
  const otherPeople = people.filter(
    (p) => p.role === person.role && p.id !== person.id
  );

  return (
    <div className="flex flex-col">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Image and Contact Info */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-8">
                <div className="aspect-[4/5] relative overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={person.imageUrl}
                    alt={person.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="space-y-3">
                  <ContactButton
                    icon={Mail}
                    text={person.email}
                    href={`mailto:${person.email}`}
                    label="Send email"
                  />
                  <ContactButton
                    icon={Phone}
                    text={person.phone}
                    href={`tel:${person.phone}`}
                    label="Call"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Main Content */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="mb-12">
                <h1 className="text-4xl font-playfair mb-2">{person.name}</h1>
                <p className="text-xl text-gray-600">
                  {person.title || person.role}
                </p>
              </div>

              {/* Bio */}
              <div className="prose max-w-none mb-12">
                <p className="text-lg leading-relaxed">{person.bio}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {/* Education */}
                <InfoSection
                  title={<TitleWithIcon icon={BookOpen} text="Education" />}
                  items={person.education}
                />

                {/* Bar Admissions */}
                {person.barAdmissions.length > 0 && (
                  <InfoSection
                    title={
                      <TitleWithIcon icon={Building} text="Bar Admissions" />
                    }
                    items={person.barAdmissions}
                  />
                )}

                {/* Areas of Specialization */}
                <InfoSection
                  title={
                    <TitleWithIcon
                      icon={Award}
                      text="Areas of Specialization"
                    />
                  }
                  items={person.specializationAreas}
                />

                {/* Languages */}
                <InfoSection
                  title={<TitleWithIcon icon={Globe} text="Languages" />}
                  items={person.languages}
                />
              </div>

              {/* Other People with Same Role */}
              {otherPeople.length > 0 && (
                <div className="mt-16 pt-12 border-t">
                  <h2 className="text-2xl font-playfair mb-8">
                    Other {person.role}s
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {otherPeople.slice(0, 2).map((otherPerson) => (
                      <OtherPersonCard
                        key={otherPerson.id}
                        person={otherPerson}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
