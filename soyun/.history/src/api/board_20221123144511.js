import { apiInstance } from "./index";

const api = apiInstance();

function getBoardList(param, success, fail) { 
    api.get(`/board`, { params: param })
        .then(success).catch(fail);
}

function