import { apiInstance } from "./index";

const api = apiInstance();
const board = "/board";

// /{category}
function getBoardList(category, success, fail) {
  api.get(`${board}/${category}`).then(success).catch(fail);
}

// /{articleNo}
function getArticle(category, articleNo, success, fail) {
  api.get(`${board}/view/${category}/${articleNo}`).then(success).catch(fail);
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

function updateHit(param, success, fail) {}

function updateLike(param, success, fail) {}

function deleteArticle(param, success, fail) {
  api.delete(`${board}`);
}

export { getBoardList, getArticle, searchArticles, writeArticle, modifyArticle, updateHit, updateLike, deleteArticle };
