import { apiInstance } from "./index";

const api = apiInstance();

// /{category}/{pgno}
function getBoardList(param, success, fail) {
  api.get(`/board`, { params: param }).then(success).catch(fail);
}

// /view/{category}/{no}
function getArticle(param, success, fail) {}

// /{category}/{pgno}/{pageSize}/{option}/{keyword}
function searchArticles(param, success, fail) {}

function writeArticle(article, success, fail) {
  api.post(`/`, JSON.stringify(article)).then(success).catch(fail);
}

function modifyArticle(article, success, fail) {
    api.put(`/`, JSON.stringify(article)).then(success).catch(fail);
}

function updateHit(param, success, fail) {}

function updateLike(param, success, fail) {}

function deleteArticle(param, success, fail) {
    api.delete(`/`,);
}

export { getBoardList, getArticle, searchArticles, writeArticle, modifyArticle, updateHit, updateLike, deleteArticle };
