import { richRequestWithToken } from "@src/utils/scenario.utils.ts";

type Params = {
  id: string;
};

export function removeCommentRequest({ id }: Params): void {
  richRequestWithToken(
    "PUT",
    `/v1/comment/commentApi/deactiveStatus/`,
    JSON.stringify({ id }),
    { tags: { name: "removeComment" } },
  );
}
