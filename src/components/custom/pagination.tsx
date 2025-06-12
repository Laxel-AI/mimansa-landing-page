// src/components/custom/pagination.tsx
"use client";
import { FC } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  pageCount: number;
  className?: string;
}

interface PaginationArrowProps {
  direction: "left" | "right";
  href: string;
  isDisabled: boolean;
}

const PaginationArrow: FC<PaginationArrowProps> = ({
  direction,
  href,
  isDisabled,
}) => {
  const router = useRouter();
  const isLeft = direction === "left";

  return (
    <Button
      onClick={() => router.push(href)}
      disabled={isDisabled}
      variant="outline"
      size="sm"
      className={cn(
        "gap-1 transition-all",
        isDisabled && "opacity-50 cursor-not-allowed"
      )}
    >
      {isLeft ? (
        <>
          <ChevronLeft className="h-4 w-4" />
          Previous
        </>
      ) : (
        <>
          Next
          <ChevronRight className="h-4 w-4" />
        </>
      )}
    </Button>
  );
};

export function PaginationComponent({
  pageCount,
  className,
}: Readonly<PaginationProps>) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  if (pageCount <= 1) return null;

  return (
    <Pagination className={cn("mt-8", className)}>
      <PaginationContent className="gap-2">
        <PaginationItem>
          <PaginationArrow
            direction="left"
            href={createPageURL(currentPage - 1)}
            isDisabled={currentPage <= 1}
          />
        </PaginationItem>

        <PaginationItem>
          <div className="flex items-center gap-2 px-4">
            <span className="text-sm text-muted-foreground">
              Page{" "}
              <span className="font-semibold text-foreground">
                {currentPage}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-foreground">{pageCount}</span>
            </span>
          </div>
        </PaginationItem>

        <PaginationItem>
          <PaginationArrow
            direction="right"
            href={createPageURL(currentPage + 1)}
            isDisabled={currentPage >= pageCount}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
