export const appKey ="kid_HkjPGCuTr";
export const appSecret = "c9e42ec1018943b091cf77e3937d8afa";

function saveData(key, value){
    localStorage.setItem(key+appKey, JSON.stringify(value));
}

export function getData(key){
    return localStorage.getItem(key+appKey);
}

export function saveUser(data){
    saveData("userInfo", data);
    saveData("authToken", data._kmd.authtoken);
}

export function removeUser(){
    localStorage.clear();
}