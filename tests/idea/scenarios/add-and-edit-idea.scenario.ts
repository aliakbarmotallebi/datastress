import { sleep } from "k6";

import { addIdeaRequest } from "./requests/add-idea.request.ts";
import { editIdeaRequest } from "./requests/edit-idea.request.ts";
import { getCategoriesRequest } from "./requests/get-categories.request.ts";
import { getIdeasRequest } from "./requests/get-ideas.request.ts";
import { getMyIdeaRequest } from "./requests/get-my-idea.request.ts";
import { getMyIdeasRequest } from "./requests/get-my-ideas.request.ts";

export function addAndEditIdeaScenario(): void {
  getIdeasRequest();
  sleep(1);

  const { categoryId } = getCategoriesRequest();

  const { id } = addIdeaRequest({
    title: "عنوان ایده",
    description: "توضیحات ایده",
    category_id: categoryId,
  });
  sleep(1);

  getMyIdeasRequest();
  sleep(1);

  getMyIdeaRequest({ id });
  sleep(1);

  getCategoriesRequest();

  editIdeaRequest({
    id,
    title: "عنوان ایده ویرایش شده",
    description: "توضیحات ایده ویرایش شده",
    category_id: categoryId,
  });
  sleep(1);

  getMyIdeasRequest();
  sleep(1);

  getMyIdeaRequest({ id });
  sleep(1);
}
