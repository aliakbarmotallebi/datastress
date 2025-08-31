// import { check } from "k6";
import http from "k6/http";

import { getCurrentRecord } from "tests/idea/data.ts";

import { BASE_URL } from "tests/idea/shared/configs.ts";
// import { errorHandler } from "tests/idea/shared/error-handler.ts";

export function richRequest<TBody = unknown>(
  ...args: Parameters<typeof http.request>
): {
  res: ReturnType<typeof http.request>;
  body: TBody | null;
} {
  args[1] = `${BASE_URL}${args[1]}`;

  const res = http.request(...args);

  // const checkStatus = check(res, {
  //   "status is 200": (res) => res.status === 200,
  // });

  // errorHandler.log(!checkStatus, res);

  let body: TBody | null = null;
  try {
    body = res.json() as TBody;
  } catch {}

  return { res, body };
}

export function richRequestWithToken<TBody = unknown>(
  ...args: Parameters<typeof richRequest<TBody>>
): ReturnType<typeof richRequest<TBody>> {
  args[3] = {
    ...(args[3] ?? {}),
    headers: {
      ...(args[3]?.headers ?? {}),
      Authorization: `Bearer ${getCurrentRecord().token}`,
    },
  };

  return richRequest<TBody>(...args);
}
