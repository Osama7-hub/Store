import BlogList from "./components/BlogSection/BlogList";
import Category from "./components/Category/Category";
import Hero from "./components/Hero/Hero";
import ProductSection from "./components/ProductSection/ProductSection";
import Stat from "./components/Stat/Stat";

export default async function Home() {
  return (
    <>
      <Hero />
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl lg:max-w-7xl">
        <Stat />
        <Category />
        <ProductSection />
        <BlogList />
      </div>
    </>
  );
}
