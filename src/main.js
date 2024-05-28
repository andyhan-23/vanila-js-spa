import detail from "../__fixtures__/detail.json";
import getMainList from "./model/main";
import getDetailContent from "./model/detail";

const test = async () => {
  const data = await getDetailContent(2);
  console.log("data", data);
  return data;
};

test();
//console.log(detail[2]);
