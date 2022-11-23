import { apiInstance } from "./index";

const api = apiInstance();

function getBoardList(param, success, fail) {
  api.get(`/board`, { params: param }).then(success).catch(fail);
}

function getArticle(param, success, fail) {}

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
