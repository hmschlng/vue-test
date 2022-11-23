import { apiInstance } from "./index";

const api = apiInstance();

function getBoardList(param, success, fail) {
  api.get(`/board`, { params: param }).then(success).catch(fail);
}

function getArticle(param, success, fail) { }

function searchArticles(param, success, fail) { }

function writeArticle(param, success, fail) { }

function modifyArticle(param, success, fail) { }

function updateHit(param, success, fail) { }

function updateLike(param, success, fail) { }

function deleteArticle(param, success, fail) { }

export { getBoardList, getArticle, getArticle, modifyArticle, deleteArticle };