import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './mycomponent/todo-list/todo-list.component';
import { TodoPageComponent } from './mycomponent/todo-page/todo-page.component';
import { TodoAboutComponent } from './mycomponent/todo-about/todo-about.component';
import { TodosComponent } from './mycomponent/todos/todos.component';
import { YelpComponent } from './mycomponent/yelp/yelp.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoPageComponent,
    TodoAboutComponent,
    TodosComponent,
    YelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
