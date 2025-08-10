import { q } from "/src/utils/request.utils.ts";
import { richRequest } from "/src/utils/scenario.utils.ts";

type Params = {
  category_id?: number;
};

export function getMostVisitedIdeasRequest(params?: Params): void {
  richRequest(
    "GET",
    `/v1/idea/ideaApi/mostVisitedIdeas/${q(params)}`,
    undefined,
    { tags: { name: "mostVisitedIdeas" } },
  );
}
