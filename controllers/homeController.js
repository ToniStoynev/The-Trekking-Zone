import { getTemplate, checkContext } from "../scripts/helper.js";
import { getAllTreks } from "../models/trekModel.js";


export async  function getHome(ctx){
     let newCtx = checkContext(ctx);
    let treks = await getAllTreks();
    newCtx.treks = treks;
    console.log(newCtx);
    getTemplate("home.hbs", newCtx);
}