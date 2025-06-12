// src/components/custom/category-button.tsx
"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CategoryButtonProps {
  value: string;
  children: React.ReactNode;
}

export default function CategoryButton({
  value,
  children,
}: CategoryButtonProps) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const currentCategory = searchParams.get("category") || "";
  const isActive = currentCategory === value;

  const handleClick = () => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    if (value && value !== "") {
      params.set("category", value);
    } else {
      params.delete("category");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Button
      onClick={handleClick}
      variant={isActive ? "default" : "outline"}
      size="sm"
      className={cn(
        "transition-all duration-200",
        isActive
          ? "bg-primary text-primary-foreground shadow-md"
          : "hover:bg-primary/10 hover:text-primary"
      )}
    >
      {children}
    </Button>
  );
}
