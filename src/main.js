import getDetailContent from "./model/detail";
import detail from "../__fixtures__/detail.json";
import getMainList from "./model/main";

const test = async () => {
  const { articles } = await getMainList();
  console.log("data", articles);
  return articles;
};

test();
//console.log(detail[2]);
