import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import { Suspense } from "react";

function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <FeaturedProducts />
      </Suspense>
    </>
  );
}
export default HomePage;
