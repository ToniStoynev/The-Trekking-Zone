import { getTemplate, saveAndRedirect, checkContext } from "../scripts/helper.js";
import { register, logout, login } from "../models/userModel.js";
import { removeUser } from "../scripts/storage.js";
import { getAllTreks } from "../models/trekModel.js";

export function getLogin(ctx){
    getTemplate("users/login.hbs", ctx);
}

export function getRegister(ctx){
    getTemplate("users/register.hbs", ctx);
}

export function postRegister(ctx){
  if (ctx.params.password !== ctx.params.rePassword) {
      alert("Password do not match");
      throw new Error("Password do not match!");
  }

  let data = {
      username: ctx.params.username,
      password: ctx.params.password
  }

  register(data)
  .then(saveAndRedirect.bind(undefined, ctx, "#/home"))
  .catch(console.log);

}

export function logoutUser(ctx){
    logout()
        .then(() => {
            removeUser();
            ctx.redirect("#/home");
        });
}

export function postLogin(ctx){
    login(ctx.params)
    .then(saveAndRedirect.bind(undefined, ctx, "#/home"))
    .catch(console.log);
}

export async function getProfile(ctx){
    let newCtx = checkContext(ctx);
    let treks = await getAllTreks();
    let myTreks = treks.filter(e => e.organizer === ctx.username);
    newCtx.myTreks = myTreks;
    newCtx.treks = myTreks.length;
    getTemplate("users/profile.hbs", newCtx);
}