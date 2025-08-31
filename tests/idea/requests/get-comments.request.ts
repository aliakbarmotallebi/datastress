import { q } from "./request.utils.ts";
import { richRequestWithToken } from "./scenario.utils.ts";

type Params = {
  node_id: number;
};

export function getCommentsRequest(params: Params): void {
  richRequestWithToken(
    "GET",
    `/v1/comment/commentApi/showComment/${q(params, { type: "idea" })}`,
    undefined,
    { tags: { name: "getComments" } },
  );
}
