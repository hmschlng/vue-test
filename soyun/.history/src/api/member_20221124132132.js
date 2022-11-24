import { apiInstance } from "./index";

const api = apiInstance();
const member = "/member";

function login(article, success, fail) {
    api.post(`${board}`, JSON.stringify(article)).then(success).catch(fail);
  }

//
// function login(param, success, fail) {
//   api.get(`${board}`, { params: param }).then(success).catch(fail);
// }

export { login, };
