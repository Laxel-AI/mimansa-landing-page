import Link from "next/link";
// import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 py-12 px-6 md:px-10 gap-10">
          <div>
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">
                Keep up-to-date with Mimansa
              </h3>
              <Link
                href="/signup"
                className="inline-flex items-center text-yellow-400 hover:text-yellow-300"
              >
                SIGN UP
                <span className="ml-2">→</span>
              </Link>
            </div>
            <div>
              <Link
                href="/contact"
                className="text-lg font-medium hover:text-gray-300"
              >
                CONTACT US
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <Link
              href="/people"
              className="block text-lg font-medium hover:text-gray-300"
            >
              PEOPLE
            </Link>
            <Link
              href="/services"
              className="block text-lg font-medium hover:text-gray-300"
            >
              SERVICES AND INDUSTRIES
            </Link>
            <Link
              href="/insights"
              className="block text-lg font-medium hover:text-gray-300"
            >
              INSIGHTS
            </Link>
            <Link
              href="/our-story"
              className="block text-lg font-medium hover:text-gray-300"
            >
              OUR STORY
            </Link>
          </div>

          {/* <div className="space-y-4">
            <Link
              href="/news"
              className="block text-lg font-medium hover:text-gray-300"
            >
              NEWS
            </Link>
            <div className="pl-6 space-y-3">
              <Link
                href="/inclusion"
                className="block text-gray-300 hover:text-white"
              >
                <span className="mr-2">—</span> Inclusion
              </Link>
              <Link
                href="/pro-bono"
                className="block text-gray-300 hover:text-white"
              >
                <span className="mr-2">—</span> Pro Bono
              </Link>
              <Link
                href="/social-responsibility"
                className="block text-gray-300 hover:text-white"
              >
                <span className="mr-2">—</span> Social Responsibility
              </Link>
              <Link
                href="/sustainability"
                className="block text-gray-300 hover:text-white"
              >
                <span className="mr-2">—</span> Sustainability
              </Link>
            </div>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div> */}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 px-6 md:px-10 border-t border-gray-700 text-sm text-gray-400">
          <Link href="/client-login" className="hover:text-white">
            Client Login
          </Link>
          <Link href="/terms" className="hover:text-white">
            Terms & Conditions
          </Link>
          <Link href="/sitemap" className="hover:text-white">
            Sitemap
          </Link>
          <Link href="/social-media-directory" className="hover:text-white">
            Social Media Directory
          </Link>
          <Link href="/attorney-advertising" className="hover:text-white">
            Attorney Advertising
          </Link>
          <Link href="/award-methodologies" className="hover:text-white">
            Award Methodologies
          </Link>
          <Link href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/medical-plan-transparency" className="hover:text-white">
            Medical Plan Transparency
          </Link>
        </div>

        <div className="py-4 px-6 md:px-10 border-t border-gray-700 text-sm text-gray-400">
          © {new Date().getFullYear()} MIMANSA LAW
        </div>
      </div>
    </footer>
  );
}
