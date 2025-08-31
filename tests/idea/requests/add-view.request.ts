import { richRequestWithToken } from "./scenario.utils.ts";

type Params = {
  id: number;
};

export function addViewRequest({ id }: Params): void {
  richRequestWithToken(
    "POST",
    `/v1/view/viewApi/addView/`,
    JSON.stringify({ idea_id: id }),
    { tags: { name: "addView" } },
  );
}
