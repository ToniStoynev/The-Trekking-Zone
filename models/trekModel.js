import { appKey } from "../scripts/storage.js";
import { post, get, put, del } from "../scripts/requester.js";


export function create(data){
    return post(`appdata/${appKey}/treks`, data);
 }

 export async function getAllTreks(){
     return await get(`appdata/${appKey}/treks`);
 }

 export async function getTrek(id){
     return await get(`appdata/${appKey}/treks/${id}`);
 }

 export function edit(id, data){
    return put(`appdata/${appKey}/treks/${id}`, data);
 }

 export function close(id){
     return del(`appdata/${appKey}/treks/${id}`);
 }

