import { Options } from "k6/options";

import { visitListPageScenario } from "./scenarios/visit-list-page.scenario.ts";

export const options: Options = {
  vus: 2,
  iterations: 5,
};

export default function (): void {
  visitListPageScenario();
}
