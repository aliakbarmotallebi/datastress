import { richRequestWithToken } from "../../../src/utils/scenario.utils.ts";

import { CommentType } from "../types/comment.type.ts";

type Params = {
  node_id: number;
  reply_id?: string;
  text: string;
};

export function addCommentRequest({ node_id, reply_id, text }: Params): {
  id: string;
} {
  const { body } = richRequestWithToken<{ data: CommentType }>(
    "POST",
    `/v1/comment/commentApi/addComment/`,
    JSON.stringify({ type: "idea", node_id, reply_id, text }),
    { tags: { name: "addComment" } },
  );

  return { id: body!.data.id };
}
