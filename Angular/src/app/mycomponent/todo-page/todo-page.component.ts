import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css'
})
export class TodoPageComponent implements OnInit {
  @Input()
  todo!: Todo;
constructor(){

}
ngOnInit(): void {
  
}
}
