// src/components/custom/search.tsx
"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Search() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const currentQuery = searchParams.get("query") || "";

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const clearSearch = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("query");
    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        type="text"
        placeholder="Search articles..."
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={currentQuery}
        className="pl-10 pr-10"
      />
      {currentQuery && (
        <Button
          onClick={clearSearch}
          variant="ghost"
          size="sm"
          className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-muted"
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
