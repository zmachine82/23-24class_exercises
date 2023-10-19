import { Component } from '@angular/core';
import { TodoListService } from '../services/todo-list.service';
import { TodoList } from '../models/todolist';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  currentLists: TodoList[] = [];

  constructor(private todoListService: TodoListService) {}

  ngOnInit() {
    this.currentLists = this.todoListService.lists;
  }
}
