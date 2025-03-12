"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(formData: FormData) {
  const title = formData.get("title");
  const summary = formData.get("summary");
  const instructions = formData.get("instructions");
  const image = formData.get("image");
  const creator = formData.get("name");
  const creator_email = formData.get("email");

  // Validate required fields
  if (
    typeof title !== "string" ||
    typeof summary !== "string" ||
    typeof instructions !== "string" ||
    !(image instanceof File) || // Check if it's a File object
    typeof creator !== "string" ||
    typeof creator_email !== "string"
  ) {
    throw new Error(
      "Invalid form data: All fields are required and must be of the correct type"
    );
  }

  const meal = {
    title,
    summary,
    instructions,
    image,
    creator,
    creator_email,
  };

  saveMeal(meal);
  redirect("/meals");
}
