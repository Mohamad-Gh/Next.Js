"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

const isInvalid = (text: string) => {
  return !text || text.trim() === "";
};

export async function shareMeal(
  prevState: { message: string | null } | void,
  formData: FormData
): Promise<{ message: string | null } | void> {
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
    return { message: "Invalid inputs" };
  }

  if (
    isInvalid(title) ||
    isInvalid(summary) ||
    isInvalid(instructions) ||
    isInvalid(creator) ||
    isInvalid(creator_email) ||
    !image ||
    image.size === 0
  ) {
    return { message: "Invalid inputs" };
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
