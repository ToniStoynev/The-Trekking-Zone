import { getHome } from "../controllers/homeController.js";
import { getLogin, getRegister, postRegister, logoutUser, postLogin, getProfile } from "../controllers/userController.js";
import { getCreateTrek, postCreateTrek, getDetails, getEdit, postEdit, closeTrek, likeTrek } from "../controllers/trekController.js";


const app = Sammy("body", function(){
    this.use("Handlebars", "hbs");

    this.get("#/home", getHome);

    this.get("#/login", getLogin);

    this.post("#/login", postLogin);

    this.get("#/register", getRegister);

    this.post("#/register", postRegister);

    this.get("#/logout", logoutUser);

    this.get("#/create", getCreateTrek);

    this.post("#/create", postCreateTrek);

    this.get("#/details/:id", getDetails);

    this.get("#/edit/:id", getEdit);

    this.post("#/edit/:id", postEdit);

    this.get("#/close/:id", closeTrek);

    this.get("#/profile", getProfile);

    this.get("#/like/:id", likeTrek);
   
});

app.run("#/home");