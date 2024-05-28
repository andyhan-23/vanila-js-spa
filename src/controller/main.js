import mainPage from "../views/pages/main";
import { addClickEventToItem } from "./click";
import { addClickEventToLogo } from "./click";

function MainController(router, model) {
  this.mainPage = async () => {
    try {
      const list = await model.mainList();
      mainPage(list);
      addClickEventToItem(router);
      addClickEventToLogo(router);
    } catch (error) {
      if (import.meta.env.DEV)
        console.error(
          `메인 컨트롤러를 통해 화면을 보여주는 부분에서 에러발생:${error}`,
        );
    }
  };
  router.addRoute("/", this.mainPage);
}

export default MainController;
