import { richRequest } from "./scenario.utils.ts";

import { IdeaType } from "./types/idea.type.ts";

export function getMyIdeasRequest(): void {
  richRequest<{ data: IdeaType[] }>(
    "GET",
    `/v1/idea/ideaApi/getMyIdeas/`,
    undefined,
    { tags: { name: "getMyIdeas" } },
  );
}
