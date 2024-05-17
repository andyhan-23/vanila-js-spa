import initMocks from "./mock";
import axios from "axios";

initMocks();

const data = async () => {
  const data = await axios.get("/main");
  console.log(data.data);
};

data();
