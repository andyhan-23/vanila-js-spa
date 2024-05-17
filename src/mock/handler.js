import { rest } from "msw";

const handler = (method, path, data, callback) =>
  rest[method](path, (req, res, ctx) => res(ctx.json(callback(req, data))));

export default handler;

// const handlers = [
//   http.get("/main", () => {
//     return HttpResponse.json({
//       id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
//       firstName: "John",
//       lastName: "Maverick",
//     });
//   }),
// ];

// export default handlers;
