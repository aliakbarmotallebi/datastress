import http from "k6/http";

import { richRequestWithToken } from "/src/utils/scenario.utils.ts";

import { IdeaType } from "./types/idea.type.ts";

const imageFile = open("./assets/logo.png", "b");

type Params = {
  title: string;
  description: string;
  category_id: number;
};

export function addIdeaRequest({ title, description, category_id }: Params): {
  id: number;
} {
  const { body } = richRequestWithToken<{ data: IdeaType }>(
    "POST",
    `/v1/idea/ideaApi/addIdea/`,
    {
      title,
      description,
      category_id: category_id.toString(),
      path: http.file(imageFile, "logo.png"),
    },
    { tags: { name: "addIdea" } },
  );

  return { id: body!.data.id };
}
