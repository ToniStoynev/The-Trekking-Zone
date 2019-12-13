import { getTemplate, checkContext } from "../scripts/helper.js";
import { create, edit, close, getTrek } from "../models/trekModel.js";
import { getData } from "../scripts/storage.js";



export function getCreateTrek(ctx){
    let newCtx = checkContext(ctx);
    getTemplate("treks/create.hbs", newCtx);
}

export function postCreateTrek(ctx){
    let data = {
        ...ctx.params,
        likes: 0,
        organizer: JSON.parse(getData("userInfo")).username
    };

    create(data)
        .then(() => ctx.redirect("#/home"))
        .catch(console.log);
}

export async function getDetails(ctx){
    let newCtx = checkContext(ctx);
    let trek = await  getTrek(ctx.params.id);
    Object.keys(trek).forEach(key => {
        newCtx[key] = trek[key];
    })
    newCtx.isOrganizer = newCtx.username === trek.organizer;
    getTemplate(`treks/details.hbs`, newCtx);
}

export async function getEdit(ctx){
    let newCtx = checkContext(ctx);
    let trek = await  getTrek(ctx.params.id);
    Object.keys(trek).forEach(key => {
        newCtx[key] = trek[key];
    })
    getTemplate("treks/edit.hbs", newCtx);
}

export function postEdit(ctx){
    let newCtx = checkContext(ctx);
    let data = {
        ...ctx.params
    };
    delete data.id;
    edit(ctx.params.id, data)
        .then(() => {
            console.log(newCtx);
            newCtx.redirect(`#/details/${ctx.params.id}`);
        })
        .catch(console.log);
}

export  function closeTrek(ctx){
    close(ctx.params.id)
    .then(() => {
        ctx.redirect("#/home");
    })
    .catch(console.log);
}

export async function likeTrek(ctx){
    let newCtx = checkContext(ctx);
    let trek = await getTrek(ctx.params.id);
    trek.likes++;
    Object.keys(trek).forEach(key => {
        newCtx[key] = trek[key];
    });
    console.log(newCtx);
    edit(ctx.params.id, trek)
        .then(() => {
            newCtx.redirect(`#/details/${ctx.params.id}`);
        })
        .catch(console.log);
}