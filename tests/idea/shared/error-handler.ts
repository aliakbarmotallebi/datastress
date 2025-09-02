// import { Counter } from "k6/metrics";

import { ErrorHandler } from "../../../src/classes/error-handler.class.ts";

// const errorCounter = new Counter("custom_error_logs");

export const errorHandler = new ErrorHandler((error) => {
  // errorCounter.add(1, error);
  console.error(error);
});
