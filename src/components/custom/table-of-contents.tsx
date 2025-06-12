// src/components/custom/table-of-contents.tsx
"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content?: any[];
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (!content) return;

    // Extract headings from content
    const headings: TOCItem[] = [];
    content.forEach((node) => {
      if (node.type === "heading" && node.level <= 3) {
        const text = node.children.map((child: any) => child.text).join("");
        const id = text.toLowerCase().replace(/\s+/g, "-");
        headings.push({
          id,
          text,
          level: node.level,
        });
      }
    });

    setTocItems(headings);
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    tocItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [tocItems]);

  if (tocItems.length === 0) return null;

  return (
    <nav className="space-y-1">
      <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-4">
        Table of Contents
      </h4>
      <ul className="space-y-2">
        {tocItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "block text-sm py-1 transition-colors hover:text-primary",
                item.level === 2 && "pl-4",
                item.level === 3 && "pl-8",
                activeId === item.id
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
