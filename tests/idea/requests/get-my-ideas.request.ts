import { richRequest } from "@src/utils/scenario.utils.ts";

import { IdeaType } from "@tests/idea/types/idea.type.ts";

export function getMyIdeasRequest(): void {
  richRequest<{ data: IdeaType[] }>(
    "GET",
    `/v1/idea/ideaApi/getMyIdeas/`,
    undefined,
    { tags: { name: "getMyIdeas" } },
  );
}
