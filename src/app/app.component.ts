import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicsComponent } from './basics/basics.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ChildComponent } from './child/child.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PipesComponent } from "./pipes/pipes.component";

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        CommonModule,
        BasicsComponent,
        HeaderComponent,
        FormsModule,
        FormComponent,
        MatSlideToggleModule,
        TodoListComponent,
        ChildComponent,
        UserDetailsComponent,
        PipesComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  // Send data parent to child component
  data = 20;
  updateChild() {
    this.data = Math.floor(Math.random() * 10);
  }

  userDetails = [
    { name: 'Khushi', age: 22, city: 'Delhi' },
    { name: 'John', age: 45, city: 'Mumbai' },
    { name: 'Jack', age: 30, city: 'Delhi' },
    { name: 'Aish', age: 28, city: 'Mumbai' },
  ];

  //send data child to parent
  x = '';
  updateData(item: string) {
    console.log(item);
    this.x = item;
  }

  // Two way binding
  firstName = '';

}   