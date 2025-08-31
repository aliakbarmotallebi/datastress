import { q } from "./request.utils.ts";
import { richRequestWithToken } from "./scenario.utils.ts";

type Params = {
  id: number;
};

export function getLikeRequest(params: Params): void {
  richRequestWithToken(
    "GET",
    `/v1/like/likeApi/getLike/${q(params, { type: "idea" })}`,
    undefined,
    { tags: { name: "getLike" } },
  );
}
