import http from "k6/http";

export type ErrorHandlerErrorData = Record<string, string>;

export type ErrorHandlerCallback = (error: ErrorHandlerErrorData) => unknown;

export class ErrorHandler {
  private readonly callback: ErrorHandlerCallback;

  public constructor(callback: ErrorHandlerCallback) {
    this.callback = callback;
  }

  public log(
    isError: boolean,
    res: http.RefinedResponse<http.ResponseType | undefined>,
    tags = {},
  ): void {
    if (!isError) {
      return;
    }

    let body: string = "";
    try {
      body = JSON.stringify(res.json());
    } catch {}

    const errorData = {
      url: res.url,
      status: res.status.toString(),
      error_code: res.error_code.toString(),
      body,
      ...tags,
    };

    this.callback(errorData);
  }
}
