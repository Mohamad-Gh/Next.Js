import React from "react";

export default function MealDetailsPage({
  params,
}: {
  params: { mealslug: string };
}) {
  return (
    <>
      <h1>Meal Details</h1>
      <p>{params.mealslug}</p>
    </>
  );
}
