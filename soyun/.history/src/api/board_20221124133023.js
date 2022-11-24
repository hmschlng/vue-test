import { apiInstance } from "./index";

const api = apiInstance();
const boardURL = "/board";

// 
function listArticle(param, success, fail) {
  api.get(`${boardURL}`, {params: param}).then(success).catch(fail);
}

// 
function countListSize(param, success, fail) {
  api.get(`${boardURL}/count`, {params: param}).then(success).catch(fail);
}

// /{articleNo}
function getArticle(articleNo, success, fail) {
  api.get(`${boardURL}/${articleNo}`).then(success).catch(fail);
}

function writeArticle(article, success, fail) {
  api.post(`${boardURL}`, JSON.stringify(article)).then(success).catch(fail);
}

function modifyArticle(article, success, fail) {
  api.put(`${board}`, JSON.stringify(article)).then(success).catch(fail);
}

function updateHit(article, success, fail) {
  api.put(`${board}/hit`, JSON.stringify(article)).then(success).catch(fail);
}

function updateLike(article, success, fail) {
  api.put(`${board}/like`, JSON.stringify(article)).then(success).catch(fail);
}

// /{articleNo}
function deleteArticle(articleNo, success, fail) {
  api.delete(`${board}/${articleNo}`).then(success).catch(fail);
}

export { listArticle, countListSize, getArticle, writeArticle, modifyArticle, updateHit, updateLike, deleteArticle };
