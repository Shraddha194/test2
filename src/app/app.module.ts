import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { routingArr } from './app.routing';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './user-list/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserListComponent,
    LoginComponent,
    PageNotFoundComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    routingArr
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
