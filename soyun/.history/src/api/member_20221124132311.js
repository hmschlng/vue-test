import { apiInstance } from "./index";

const api = apiInstance();
const member = "/member";

// emailId, pass
function login(member, success, fail) {
  api.post(`${member}`, JSON.stringify(member)).then(success).catch(fail);
}

// emailId, pass, name, nickname, phoneNumber
function join(member, success, fail) {
  api.post(`${member}`, JSON.stringify(member)).then(success).catch(fail);
}

// emailId, pass, name, nickname, phoneNumber
function join(member, success, fail) {
  api.post(`${member}`, JSON.stringify(member)).then(success).catch(fail);
}

//
// function login(param, success, fail) {
//   api.get(`${board}`, { params: param }).then(success).catch(fail);
// }

export { login };
