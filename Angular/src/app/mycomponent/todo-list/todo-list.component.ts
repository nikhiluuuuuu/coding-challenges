import { Component,OnInit } from '@angular/core';
import{Todo} from '../../todo'
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
todos:Todo[];
constructor(){
  this.todos = [
    {
      sno:1,
      title:"Qis is the best engineering college across Qis",
      desc:"description",
      active:true
    }
    ,
    {
      sno: 2,
      title: "This is my new title",
      desc: "description",
      active: true
    }
    , {
      sno: 3,
      title: "I am getting married by this year end",
      desc: "description",
      active: true
    },
    {
      sno: 4,
      title: "This is the title",
      desc: "description",
      active: true
    },
    {
      sno: 4,
      title: "This is the title",
      desc: "description",
      active: true
    },
  ]
}
ngOnInit(): void{
  
}
}
