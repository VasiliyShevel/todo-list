"use strict";
//import { LoggedInGuard } from '';
var login_component_1 = require('./components/login/login.component');
var register_component_1 = require('./components/register/register.component');
var home_component_1 = require('./components/home/home.component');
exports.ROUTES = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'registration', component: register_component_1.RegisterComponent },
];
//# sourceMappingURL=app.routes.js.map