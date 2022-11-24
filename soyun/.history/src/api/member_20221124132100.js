import { apiInstance } from "./index";

const api = apiInstance();
const member = "/member";

//
function login(param, success, fail) {
  api.get(`${board}`, { params: param }).then(success).catch(fail);
}

export { login, };
