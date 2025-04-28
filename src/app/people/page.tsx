import { people, Person } from "@/metadata/people";
import Link from "next/link";
import Image from "next/image";

export default function PeoplePage() {
  const partners = people.filter((person) => person.role === "Partner");
  // const associates = people.filter((person) => person.role === "Associate");
  // const interns = people.filter((person) => person.role === "Intern");

  const PersonCard = ({ person }: { person: Person }) => (
    <Link href={`/people/${person.slug}`} className="group">
      <div className="relative overflow-hidden bg-white">
        <div className="aspect-[4/5] relative overflow-hidden">
          <Image
            src={person.imageUrl}
            alt={person.name}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold tracking-tight">
            {person.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {person.title || person.role}
          </p>
          <div className="mt-4">
            <p className="text-sm text-gray-600 line-clamp-3">{person.bio}</p>
          </div>
        </div>
      </div>
    </Link>
  );

  const PeopleSection = ({
    title,
    people,
  }: {
    title: string;
    people: Person[];
  }) => (
    <div className="mt-16">
      <h2 className="text-2xl font-playfair mb-8">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {people.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-playfair mb-4">Our People</h1>
        <p className="text-xl text-gray-600">
          Our team combines deep legal expertise with a commitment to
          excellence, working collaboratively to deliver exceptional results for
          our clients.
        </p>
      </div>

      <PeopleSection title="Partners" people={partners} />
      {/* <PeopleSection title="Associates" people={associates} /> */}
      {/* <PeopleSection title="Interns" people={interns} /> */}
    </div>
  );
}
