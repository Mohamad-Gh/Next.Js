import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db");

type Meal = {
  id: string;
  slug: string;
  title: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
};
export const getMeals = async (): Promise<Meal[]> => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return db.prepare("SELECT * FROM meals").all() as Meal[];
};

export const getMeal = (slug: string): Meal => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  return db.prepare("SELECT * FROM meals WHERE slug=?").get(slug) as Meal;
};

type MealInput = {
  // slug: string;
  title: string;
  image: File;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
};

export const saveMeal = async (meal: MealInput) => {
  const slug = slugify(meal.title);
  meal.instructions = xss(meal.instructions);
  const extension = meal.image.name.split(".").pop();
  const fileName = `${slug}.${extension}`;
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) throw new Error("Failed to save the image");
  });
  const newMeal = {
    ...meal,
    slug,
    image: `/images/${fileName}`,
  };
  db.prepare(
    `INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email) VALUES (
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )`
  ).run(newMeal);
};
