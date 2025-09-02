import { CategoryType } from "./category.type.ts";

export type IdeaType = {
  id: number;
  description: string;
  title: string;
  category: CategoryType;
  path: string;
};
