import { richRequestWithToken } from "./scenario.utils.ts";

import { LikeType } from "./types/like.type.ts";

type Params = {
  id: number;
};

export function addLikeRequest({ id }: Params): { id: string } {
  const { body } = richRequestWithToken<{ data: LikeType }>(
    "POST",
    `/v1/like/likeApi/addlike/`,
    JSON.stringify({ idea_id: id }),
    { tags: { name: "addLike" } },
  );

  return { id: body!.data._id };
}
