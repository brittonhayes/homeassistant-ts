import { Middleware } from "openapi-typescript-fetch";

export const logger: Middleware = async (url, init, next) => {
  console.log(`fetching ${url}`);
  const response = await next(url, init);
  console.log(`fetched ${url}`);
  return response;
};
