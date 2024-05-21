import Router from "..";

describe("Rourer", () => {
  let router;

  beforeEach(() => {
    router = new Router();
  });

  test("addRoute 메서드가 정상적으로 동작하는지 확인", () => {
    const pageFunction = jest.fn();
    router.addRoute("/", pageFunction);
    router.addRoute("/detail/(\\w+)", pageFunction);

    expect(router.routes.length).toBe(2);
    expect(router.routes[0].regexString).toEqual(/^\/$/);
    expect(router.routes[1].regexString).toEqual(/^\/detail\/(\w+)$/);
    expect(router.routes[0].page).toBe(pageFunction);
    expect(router.routes[1].page).toBe(pageFunction);
  });

  test("showNotFound 함수가 정상적으로 동작하는지 확인", () => {
    const showNotFound = jest.fn();
    const pageFunction = jest.fn();
    router.setNotFound(showNotFound);
    router.addRoute("/", pageFunction);
    router.navigate("/hello");

    expect(showNotFound).toHaveBeenCalled();
  });

  test("match 함수가 정상적으로 동작하여 params 값을 뽑아오는지 확인", () => {
    const pageFunction = jest.fn();
    const path = "/detail/2";
    router.addRoute("/detail/(\\w+)", pageFunction);
    const match = path.match(router.routes[0].regexString);

    expect(match[1]).toBe("2");
  });
});
