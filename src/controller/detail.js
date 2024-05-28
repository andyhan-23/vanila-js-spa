import detailPage from "../views/pages/detail";
import { addClickEventToLogo } from "./click";

function DetailController(router, model) {
  this.detailPage = async id => {
    try {
      const articleItem = await model.articleItem(id);
      detailPage(articleItem);
      addClickEventToLogo(router);
    } catch (error) {
      if (import.meta.env.DEV)
        console.error(
          `디테일 컨트롤러를 통해 화면을 보여주는 부분에서 에러발생:${error}`,
        );
    }
  };
  router.addRoute("/detail/(\\w+)", this.detailPage);
}
export default DetailController;
