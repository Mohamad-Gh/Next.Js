import Link from "next/link";
import React from "react";

function MealsPage() {
  return (
    <>
      <h1>Meals Page</h1>
      <p>
        <Link href="/meals/mealSlug">Dynamic Address</Link>
      </p>
    </>
  );
}

export default MealsPage;
