import { sleep } from "k6";

import { addCommentRequest } from "./requests/add-comment.request.ts";
import { getCommentsRequest } from "./requests/get-comments.request.ts";
import { removeCommentRequest } from "./requests/remove-comment.request.ts";
import { visitAndScrollListPageRequest } from "./requests/visit-and-scroll-list-page.request.ts";
import { visitDetailPageRequest } from "./requests/visit-detail-page.request.ts";

export function commentScenario(): void {
  const { randomId } = visitAndScrollListPageRequest();

  visitDetailPageRequest({ id: randomId });
  sleep(2);

  getCommentsRequest({ node_id: randomId });
  sleep(2);

  const { id: commentId } = addCommentRequest({
    node_id: randomId,
    text: "متن کامنت",
  });
  sleep(1);

  const { id: replyId } = addCommentRequest({
    node_id: randomId, 
    reply_id: commentId,
    text: "متن پاسخ به کامنت",
  });
  sleep(1);

  removeCommentRequest({ id: replyId });
  sleep(1);

  // TODO: [Bijan] Add reportCommentRequest

  removeCommentRequest({ id: commentId });
  sleep(1);
}
