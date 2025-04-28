"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function LegalDisclaimer() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  // Check localStorage only after component is mounted (client-side)
  useEffect(() => {
    const hasAgreed = localStorage.getItem("disclaimerAgreed") === "true";
    setShowDisclaimer(!hasAgreed);
  }, []);

  const handleAgree = () => {
    setShowDisclaimer(false);
    localStorage.setItem("disclaimerAgreed", "true");
    // Close modal or continue
  };

  const handleDisagree = () => {
    // Redirect to google or another neutral site
    window.location.href = "https://www.google.com";
  };

  // Don't render anything during server-side rendering or if agreed
  if (!showDisclaimer) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg sm:max-w-xl md:max-w-2xl mx-auto rounded-lg shadow-lg flex flex-col">
        {/* Fixed header */}
        <div className="p-4 sm:p-6 border-b border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center">
            DISCLAIMER
          </h2>
        </div>

        {/* Scrollable content */}
        <div className="p-4 sm:p-6 overflow-y-auto max-h-[50vh] md:max-h-[60vh]">
          <div className="text-gray-700 text-sm sm:text-base">
            <p className="font-semibold mb-4">
              Current rules of the Bar Council of India impose restrictions on
              maintaining a web page and do not permit lawyers to provide
              information concerning their areas of practice. Mimansa Law
              Offices is, therefore, constrained from providing any further
              information on this web page.
            </p>

            <p className="mb-4">
              The rules of the Bar Council of India prohibit law firms from
              soliciting work or advertising in any manner. By clicking on
              &apos;I AGREE&apos;, the user acknowledges that:
            </p>

            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                The user wishes to gain more information about Mimansa Law
                Offices, its practice areas and its attorneys, for his/her own
                information and use
              </li>
              <li>
                The information is made available/provided to the user only on
                his/her specific request and any information obtained or
                material downloaded from this website is completely at the
                user&apos;s volition and any transmission, receipt or use of
                this site is not intended to, and will not, create any
                lawyer-client relationship
              </li>
              <li>
                None of the information contained on the website is in the
                nature of a legal opinion or otherwise amounts to any legal
                advice
              </li>
              <li>
                Mimansa Law Offices India, is not liable for any consequence of
                any action taken by the user relying on material/information
                provided under this website. In cases where the user has any
                legal issues, he/she in all cases must seek independent legal
                advice
              </li>
            </ul>
          </div>
        </div>

        {/* Fixed footer with buttons */}
        <div className="p-4 sm:p-6 border-t border-gray-200 bg-gray-50 rounded-b-lg">
          <div className="flex flex-row justify-center items-center space-x-4 sm:space-x-8">
            <Button
              onClick={handleAgree}
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-2 min-w-[120px]"
            >
              I AGREE
            </Button>

            <Button
              onClick={handleDisagree}
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-50 px-6 sm:px-8 py-2 min-w-[120px]"
            >
              I DISAGREE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
