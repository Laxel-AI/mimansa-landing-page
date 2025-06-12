// src/components/custom/category-select.tsx
import { getCategories } from "@/lib/api";
import CategoryButton from "@/components/custom/category-button";

export async function CategorySelect() {
  try {
    const { data: categories } = await getCategories();

    if (!categories || categories.length === 0) return null;

    return (
      <div className="w-full flex flex-wrap gap-2 justify-center items-center">
        <CategoryButton value="">All Categories</CategoryButton>
        {categories.map((category) => (
          <CategoryButton key={category.documentId} value={category.name}>
            {category.name}
          </CategoryButton>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error loading categories:", error);
    return null;
  }
}
