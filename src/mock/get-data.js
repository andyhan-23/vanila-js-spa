import mainJSON from "../../__fixtures__/main.json";
import detailJSON from "../../__fixtures__/detail.json";

const getData = target => {
  try {
    switch (target) {
      case "main":
        return mainJSON;
      case "detail":
        return detailJSON;
      default:
        throw new Error("No DATA");
    }
  } catch (error) {
    if (import.meta.env) console.error(error);
  }
};

export default getData;
