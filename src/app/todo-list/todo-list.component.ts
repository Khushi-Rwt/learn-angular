import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-todo-list',
    imports: [CommonModule],
    templateUrl: './todo-list.component.html',
    styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  list:any[] = [];
  addTask(item:string){
    console.log(item);
    this.list.push({id:this.list.length,name:item});
    // console.log(this.list);
  }
  removeTask(id:number){
    this.list = this.list.filter(item=>item.id != id);
  }
}
