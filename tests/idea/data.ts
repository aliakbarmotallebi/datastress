import csv from "k6/experimental/csv";
import { open } from "k6/experimental/fs";

import { RecordType } from "@tests/idea/types/record.type.ts";

const file = await open("@tests/idea/data.csv");
const data = await csv.parse(file, {
  delimiter: ",",
  asObjects: true,
});

export function getCurrentRecord(): RecordType {
  const index = __VU % data.length;
  return (data as unknown as RecordType[])[index];
}
