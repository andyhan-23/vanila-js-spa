import { http, HttpResponse } from "msw";

const handler = (method, path, data, callback) =>
  http[method](path, info => HttpResponse.json(callback(data)));

export default handler;
