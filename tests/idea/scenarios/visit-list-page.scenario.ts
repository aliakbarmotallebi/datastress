import { sleep } from "k6";

import { getCategoriesRequest } from "tests/idea/requests/get-categories.request.ts";
import { getIdeasRequest } from "tests/idea/requests/get-ideas.request.ts";
import { getMostVisitedIdeasRequest } from "tests/idea/requests/get-most-visited-ideas.request.ts";

export function visitListPageScenario(): void {
  getIdeasRequest();
  sleep(2);

  const { categoryId } = getCategoriesRequest();

  getIdeasRequest({ category_id: categoryId, isChosen: 0 });
  sleep(2);

  getIdeasRequest({ category_id: categoryId, isChosen: 1 });
  sleep(2);

  getMostVisitedIdeasRequest({ category_id: categoryId });
  sleep(2);
}
