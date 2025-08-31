import { richRequest } from "./scenario.utils.ts";

import { CategoryType } from "./types/category.type.ts";

export function getCategoriesRequest(): { categoryId: number } {
  const { body } = richRequest<{ data: CategoryType[] }>(
    "GET",
    `/v1/category/categoryApi/getCategoriesName/`,
    undefined,
    { tags: { name: "getCategories" } },
  );

  return { categoryId: body!.data[0].id };
}
