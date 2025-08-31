import { sleep } from "k6";

import { visitDetailPageRequest } from "@tests/idea/requests/visit-detail-page.request.ts";
import { visitAndScrollListPageRequest } from "@tests/idea/requests/visit-and-scroll-list-page.request.ts";

export function visitDetailPageScenario(): void {
  const { randomId } = visitAndScrollListPageRequest();

  visitDetailPageRequest({ id: randomId });
  sleep(2);
}
