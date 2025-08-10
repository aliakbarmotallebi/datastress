type Params = Record<string, string | number>;

export function q(params?: Params, staticParams?: Params): string {
  const allParams = { ...(params ?? {}), ...(staticParams ?? {}) };

  if (!allParams || Object.keys(allParams).length === 0) {
    return "";
  }

  const query = Object.entries(allParams)
    .map(([key, val]) => `${key}=${val}`)
    .join("&");

  return `?${query}`;
}
