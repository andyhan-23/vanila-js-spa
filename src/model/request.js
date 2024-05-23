import axios from "axios";
import initMocks from "../mock";
import { URL } from "./constant";

const instance = axios.create({
  baseURL: URL.base,
});

const splitUrl = config => {
  let temp_url = config.url.split("/");
  return `/${temp_url[1]}`;
};

instance.interceptors.request.use(config => {
  const currentUrl = splitUrl(config);
  if (URL.main === currentUrl || URL.detail === currentUrl) {
    initMocks();
    config.baseURL = null;
  } else {
    throw new Error(`${config.url}는 잘못된 요청입니다.`);
  }
  return config;
});

instance.interceptors.response.use(async response => {
  try {
    const result = await response.data;
    if (!result) {
      throw new Error("데이터가 없습니다.");
    }
    return result;
  } catch (error) {
    const currentUrl = splitUrl(response.config);
    if (import.meta.env.DEV) {
      if (URL.main === currentUrl)
        console.error(
          `${URL.main}요청에 대한 응답을 받는 도중 에러 발생:${error}`,
        );
      else if (URL.detail === currentUrl)
        console.error(
          `${URL.detail}요청에 대항 응답을 받는 도중 에러 발생:${error}`,
        );
    }
    return null;
  }
});

export default instance;
