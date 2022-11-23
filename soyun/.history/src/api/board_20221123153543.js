import { apiInstance } from "./index";

const api = apiInstance();
const board = "/board";

// /{category}
function getBoardList(category, success, fail) {
  api.get(`${board}/${category}`).then(success).catch(fail);
}

// /{articleNo}
function getArticle(articleNo, success, fail) {
  api.get(`${board}/view/${articleNo}`).then(success).catch(fail);
}

// /{category}/{pgno}/{pageSize}/{option}/{keyword}
function searchArticles(param, success, fail) {
    api.get(`${board}`, { params: param }).then(success).catch(fail);
}

function writeArticle(article, success, fail) {
  api.post(`${board}`, JSON.stringify(article)).then(success).catch(fail);
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
  api.delete(`${board}/${articleNo}`);
}

export { getBoardList, getArticle, searchArticles, writeArticle, modifyArticle, updateHit, updateLike, deleteArticle };
