"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var app_routes_1 = require('./app.routes');
// Components
var app_component_1 = require('./app.component');
var login_component_1 = require('./components/login/login.component');
var register_component_1 = require('./components/register/register.component');
var navbar_component_1 = require('./components/navbar/navbar.component');
var home_component_1 = require('./components/home/home.component');
var user_todos_component_1 = require('./components/user-todos/user-todos.component');
var new_todo_component_1 = require('./components/new-todo/new-todo.component');
var tabs_component_1 = require('./components/tabs/tabs.component');
var tab_component_1 = require('./components/tab/tab.component');
var shared_todos_component_1 = require('./components/shared-todos/shared-todos.component');
var user_info_component_1 = require('./components/user-info/user-info.component');
// Services
var login_service_1 = require('./services/login.service');
var register_service_1 = require('./services/register.service');
var auth_service_1 = require('./services/auth.service');
var users_service_1 = require('./services/users.service');
var todos_service_1 = require('./services/todos.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(app_routes_1.ROUTES, { useHash: false }),
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                navbar_component_1.NavbarComponent,
                home_component_1.HomeComponent,
                user_todos_component_1.UserTodosComponent,
                new_todo_component_1.NewTodoComponent,
                tabs_component_1.TabsComponent,
                tab_component_1.TabComponent,
                shared_todos_component_1.SharedTodosComponent,
                user_info_component_1.UserInfoComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                { provide: login_service_1.LoginService, useClass: login_service_1.LoginService },
                { provide: register_service_1.RegisterService, useClass: register_service_1.RegisterService },
                { provide: auth_service_1.AuthService, useClass: auth_service_1.AuthService },
                { provide: users_service_1.UsersService, useClass: users_service_1.UsersService },
                { provide: todos_service_1.TodosService, useClass: todos_service_1.TodosService },
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map