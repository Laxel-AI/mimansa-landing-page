// src/components/custom/share-buttons.tsx
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Share2, Twitter, Facebook, Linkedin, Copy, Check } from "lucide-react";

interface ShareButtonsProps {
  title: string;
  description?: string;
}

export function ShareButtons({ title, description }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description || title);
  const encodedUrl = encodeURIComponent(currentUrl);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground mr-2">Share:</span>

      <Button
        variant="outline"
        size="sm"
        onClick={() => window.open(shareLinks.twitter, "_blank")}
      >
        <Twitter className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => window.open(shareLinks.facebook, "_blank")}
      >
        <Facebook className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => window.open(shareLinks.linkedin, "_blank")}
      >
        <Linkedin className="h-4 w-4" />
      </Button>

      <Button variant="outline" size="sm" onClick={copyToClipboard}>
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </Button>
    </div>
  );
}
