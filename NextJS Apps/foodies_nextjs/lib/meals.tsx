import sql from "better-sqlite3";

const db = sql("meals.db");

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return db.prepare("SELECT * FROM meals").all();
};

type Meal = {
  title: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
};

export const getMeal = (slug: string): Meal => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  return db.prepare("SELECT * FROM meals WHERE slug=?").get(slug);
};
