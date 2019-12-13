import { saveUser, getData } from "./storage.js";

export function getTemplate(path, ctx){
    ctx.loadPartials({
        header: "../views/common/header.hbs",
        footer: "../views/common/footer.hbs",
        error: "../views/treks/error.hbs",
        trekHolder: "../views/treks/trekHolder.hbs"
    })
    .then(function(){
        this.partial(`../views/${path}`);
    })
}

export function saveAndRedirect(ctx, path, data){
    saveUser(data);
    ctx.redirect(path);
}

export function checkContext(ctx){
    if (getData("userInfo") !== null) {
        ctx.isLogged = true;
        ctx.username = JSON.parse(getData("userInfo")).username;
    }

    return ctx;
}