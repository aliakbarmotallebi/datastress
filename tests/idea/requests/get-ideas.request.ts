import { q } from "/src/utils/request.utils.ts";
import { richRequest } from "/src/utils/scenario.utils.ts";

import { IdeaType } from "./types/idea.type.ts";

type Params = {
  lastId?: number;
  category_id?: number;
  isChosen?: number;
};

export function getIdeasRequest(params?: Params): {
  randomId: number;
  lastId: number | undefined;
} {
  const { body } = richRequest<{ data: IdeaType[] }>(
    "GET",
    `/v1/idea/ideaApi/getIdeas/${q(params)}`,
    undefined,
    { tags: { name: "getIdeas" } },
  );

  return { randomId: body!.data[0].id, lastId: body!.data.at(-1)?.id };
}
