// src/components/custom/strapi-image.tsx
import Image from "next/image";
import { getStrapiMedia } from "@/lib/api";

interface StrapiImageProps {
  src: string;
  alt: string | null;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  [key: string]: any;
}

export function StrapiImage({
  src,
  alt,
  className,
  ...rest
}: Readonly<StrapiImageProps>) {
  const imageUrl = getStrapiMedia(src);

  if (!imageUrl) {
    return (
      <div className={`bg-muted flex items-center justify-center ${className}`}>
        <span className="text-muted-foreground text-sm">No image</span>
      </div>
    );
  }

  return (
    <Image
      src={imageUrl}
      alt={alt || "Blog post image"}
      className={className}
      {...rest}
    />
  );
}
