import { q } from "/@src/utils/request.utils.ts";
import { richRequest } from "/@src/utils/scenario.utils.ts";

import { addViewRequest } from "@tests/idea/requests/add-view.request.ts";
import { getFavoriteRequest } from "@tests/idea/requests/get-favorite.request.ts";
import { getLikeRequest } from "@tests/idea/requests/get-like.request.ts";

import { IdeaType } from "@tests/idea/types/idea.type.ts";

type Params = {
  id: number;
};

export function getMyIdeaRequest(params: Params): void {
  richRequest<{ data: IdeaType[] }>(
    "GET",
    `/v1/idea/ideaApi/getMyIdeas/${q(params)}`,
    undefined,
    { tags: { name: "getMyIdea" } },
  );

  getLikeRequest({ id: params.id });
  getFavoriteRequest({ id: params.id });
  addViewRequest({ id: params.id });
}
