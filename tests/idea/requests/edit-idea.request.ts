import { richRequestWithToken } from "./scenario.utils.ts";

import { IdeaType } from "./types/idea.type.ts";

type Params = {
  id: number;
  title: string;
  description: string;
  category_id: number;
};

export function editIdeaRequest({
  id,
  title,
  description,
  category_id,
}: Params): {
  id: number;
} {
  const { body } = richRequestWithToken<{ data: IdeaType }>(
    "PUT",
    `/v1/idea/ideaApi/editMyIdea/`,
    {
      id: id.toString(),
      title,
      description,
      category_id: category_id.toString(),
    },
    { tags: { name: "editIdea" } },
  );

  return { id: body!.data.id };
}
