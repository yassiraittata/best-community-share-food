import Hero from "@/components/Hero";
import CategoryList from "@/components/category/CategoryList";
import MealsList from "@/components/meals/MealsList";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoryList />
      <MealsList />
    </main>
  );
}
