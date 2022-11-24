import { apiInstance } from "./index";

const api = apiInstance();
const member = "/member";

//
function listArticle(param, success, fail) {
  api.get(`${board}`, { params: param }).then(success).catch(fail);
}

export {};
