import { richRequestWithToken } from "/@src/utils/scenario.utils.ts";

type Params = {
  id: string;
};

export function removeLikeRequest({ id }: Params): void {
  richRequestWithToken(
    "DELETE",
    `/v1/like/likeApi/removeLike/`,
    JSON.stringify({ id }),
    { tags: { name: "removeLike" } },
  );
}
