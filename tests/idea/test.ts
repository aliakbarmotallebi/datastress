import { Options } from "k6/options";

import { visitListPageScenario } from "./scenarios/visit-list-page.scenario.ts";
import { visitDetailPageScenario } from "./scenarios/visit-detail-page.scenario.ts";
import { exploreDetailPageScenario } from "./scenarios/explore-detail-page.scenario.ts";
import { commentScenario } from "./scenarios/comment.scenario.ts";
import { addAndEditIdeaScenario } from "./scenarios/add-and-edit-idea.scenario.ts";

export const options: Options = {
  // vus: 10,
  // iterations: 10,
  scenarios: {
    searchForAnIdeaAndViewIt: {
      executor: "ramping-arrival-rate",
      startRate: 300,
      timeUnit: "1m",
      preAllocatedVUs: 50,
      maxVUs: 200,
      stages: [
        { target: 300, duration: "1m" },
        { target: 600, duration: "2m" },
        { target: 600, duration: "4m" },
        { target: 60, duration: "2m" },
      ],
      gracefulStop: "5m",
    },
  },
};

export default function (): void {
  visitListPageScenario();
  visitDetailPageScenario();
  exploreDetailPageScenario();
  commentScenario();
  // addAndEditIdeaScenario();
}
