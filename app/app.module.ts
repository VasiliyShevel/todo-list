import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

// Components
import { AppComponent }  from './app.component';
import { LoginComponent }  from './components/login/login.component';
import { RegisterComponent }  from './components/register/register.component';
import { NavbarComponent }  from './components/navbar/navbar.component';
import { HomeComponent }  from './components/home/home.component';
import { UserTodosComponent }  from './components/user-todos/user-todos.component';
import { NewTodoComponent }  from './components/new-todo/new-todo.component';
import { TabsComponent }  from './components/tabs/tabs.component';
import { TabComponent }  from './components/tab/tab.component';
import { SharedTodosComponent }  from './components/shared-todos/shared-todos.component';
import { UserInfoComponent }  from './components/user-info/user-info.component';

// Services
import { LoginService }  from './services/login.service';
import { RegisterService }  from './services/register.service';
import { AuthService }  from './services/auth.service';
import { UsersService }  from './services/users.service';
import { TodosService }  from './services/todos.service';

@NgModule({
  imports:      [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {useHash: false}),
  ],
  declarations: [ 
    AppComponent, 
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    UserTodosComponent,
    NewTodoComponent,
    TabsComponent,
    TabComponent,
    SharedTodosComponent,
    UserInfoComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    { provide: LoginService, useClass: LoginService },
    { provide: RegisterService, useClass: RegisterService },
    { provide: AuthService, useClass: AuthService },
    { provide: UsersService, useClass: UsersService },
    { provide: TodosService, useClass: TodosService },
  ]
})

export class AppModule { }
