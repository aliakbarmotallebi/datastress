import { q } from "../../../src/utils/request.utils.ts";
import { richRequestWithToken } from "../../../src/utils/scenario.utils.ts";

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
