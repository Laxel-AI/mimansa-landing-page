// src/components/block-renderer/index.tsx
import { JSX, ReactNode } from "react";

// Define the structure of Strapi blocks content
interface StrapiTextNode {
  type: "text";
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
}

interface StrapiLinkNode {
  type: "link";
  url: string;
  children: StrapiTextNode[];
}

interface StrapiParagraph {
  type: "paragraph";
  children: (StrapiTextNode | StrapiLinkNode)[];
}

interface StrapiHeading {
  type: "heading";
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: StrapiTextNode[];
}

interface StrapiList {
  type: "list";
  format: "ordered" | "unordered";
  children: StrapiListItem[];
}

interface StrapiListItem {
  type: "list-item";
  children: StrapiTextNode[];
}

interface StrapiQuote {
  type: "quote";
  children: StrapiTextNode[];
}

interface StrapiCode {
  type: "code";
  children: StrapiTextNode[];
}

type StrapiContentNode =
  | StrapiParagraph
  | StrapiHeading
  | StrapiList
  | StrapiQuote
  | StrapiCode;

interface BlockRendererProps {
  content?: StrapiContentNode[];
  blocks?: any[]; // For other custom blocks
}

function renderTextNode(node: StrapiTextNode | StrapiLinkNode): ReactNode {
  if (node.type === "link") {
    return (
      <a
        href={node.url}
        className="text-primary hover:underline font-medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        {node.children.map((child, index) => renderTextNode(child))}
      </a>
    );
  }

  let className = "";
  if (node.bold) className += " font-bold";
  if (node.italic) className += " italic";
  if (node.underline) className += " underline";
  if (node.strikethrough) className += " line-through";
  if (node.code) className += " bg-muted px-1 py-0.5 rounded text-sm font-mono";

  return className ? (
    <span className={className.trim()}>{node.text}</span>
  ) : (
    node.text
  );
}

function renderContentNode(node: StrapiContentNode, index: number): ReactNode {
  switch (node.type) {
    case "paragraph":
      return (
        <p key={index} className="mb-6 leading-relaxed">
          {node.children.map((child, childIndex) => (
            <span key={childIndex}>{renderTextNode(child)}</span>
          ))}
        </p>
      );

    case "heading":
      const HeadingTag = `h${node.level}` as keyof JSX.IntrinsicElements;
      const headingClasses = {
        1: "text-4xl font-bold mb-8 mt-12",
        2: "text-3xl font-bold mb-6 mt-10",
        3: "text-2xl font-semibold mb-4 mt-8",
        4: "text-xl font-semibold mb-4 mt-6",
        5: "text-lg font-semibold mb-3 mt-4",
        6: "text-base font-semibold mb-3 mt-4",
      };

      return (
        <HeadingTag
          key={index}
          className={headingClasses[node.level]}
          id={node.children
            .map((child) => child.text)
            .join("")
            .toLowerCase()
            .replace(/\s+/g, "-")}
        >
          {node.children.map((child, childIndex) => (
            <span key={childIndex}>{renderTextNode(child)}</span>
          ))}
        </HeadingTag>
      );

    case "list":
      const ListTag = node.format === "ordered" ? "ol" : "ul";
      const listClass =
        node.format === "ordered"
          ? "list-decimal list-inside mb-6 space-y-2"
          : "list-disc list-inside mb-6 space-y-2";

      return (
        <ListTag key={index} className={listClass}>
          {node.children.map((item, itemIndex) => (
            <li key={itemIndex} className="leading-relaxed">
              {item.children.map((child, childIndex) => (
                <span key={childIndex}>{renderTextNode(child)}</span>
              ))}
            </li>
          ))}
        </ListTag>
      );

    case "quote":
      return (
        <blockquote
          key={index}
          className="border-l-4 border-primary pl-6 my-8 italic text-lg text-muted-foreground"
        >
          {node.children.map((child, childIndex) => (
            <span key={childIndex}>{renderTextNode(child)}</span>
          ))}
        </blockquote>
      );

    case "code":
      return (
        <pre
          key={index}
          className="bg-muted p-4 rounded-lg overflow-x-auto my-6"
        >
          <code className="text-sm font-mono">
            {node.children.map((child, childIndex) => (
              <span key={childIndex}>{renderTextNode(child)}</span>
            ))}
          </code>
        </pre>
      );

    default:
      return null;
  }
}

// Block renderer for custom Strapi components
function renderCustomBlock(block: any, index: number): ReactNode {
  switch (block.__component) {
    case "blocks.text":
      return (
        <div key={index} className="my-8">
          <BlockRenderer content={block.content} />
        </div>
      );

    case "blocks.video":
      return (
        <div key={index} className="my-8">
          <div className="aspect-video rounded-lg overflow-hidden">
            {block.videoUrl ? (
              <iframe
                src={block.videoUrl}
                className="w-full h-full"
                allowFullScreen
                title={block.title || "Video"}
              />
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">
                  Video not available
                </span>
              </div>
            )}
          </div>
          {block.caption && (
            <p className="text-sm text-muted-foreground mt-2 text-center">
              {block.caption}
            </p>
          )}
        </div>
      );

    case "blocks.image":
      return (
        <div key={index} className="my-8">
          {block.image && (
            <div className="rounded-lg overflow-hidden">
              <img
                src={block.image.url}
                alt={block.image.alternativeText || ""}
                className="w-full h-auto"
              />
            </div>
          )}
          {block.caption && (
            <p className="text-sm text-muted-foreground mt-2 text-center">
              {block.caption}
            </p>
          )}
        </div>
      );

    default:
      console.warn(`Unknown block component: ${block.__component}`);
      return null;
  }
}

export function BlockRenderer({ content, blocks }: BlockRendererProps) {
  return (
    <div className="space-y-4">
      {/* Render Strapi rich text content */}
      {content && content.map((node, index) => renderContentNode(node, index))}

      {/* Render custom blocks */}
      {blocks && blocks.map((block, index) => renderCustomBlock(block, index))}
    </div>
  );
}
