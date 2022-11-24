import { apiInstance } from "./index";

const api = apiInstance();
const memberURL = "/member";

// emailId, pass
function login(member, success, fail) {
  api.post(`${member}`, JSON.stringify(member)).then(success).catch(fail);
}

// emailId, pass, name, nickname, phoneNumber
function join(member, success, fail) {
  api.post(`${member}`, JSON.stringify(member)).then(success).catch(fail);
}

// emailId
function checkEmailId(member, success, fail) {
  api.post(`${member}`, JSON.stringify(member)).then(success).catch(fail);
}

// /{emailId}
function searchPw(emailId, success, fail) {
  api.get(`${board}/${emailId}`).then(success).catch(fail);
}

//
function updateMember(member, success, fail) {
  api.post(`${member}`, JSON.stringify(member)).then(success).catch(fail);
}

// emailId
function quit(member, success, fail) {
  api.post(`${member}`, JSON.stringify(member)).then(success).catch(fail);
}

export { login, join, checkEmailId, searchPw, updateMember, quit };
