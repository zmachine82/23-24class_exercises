import { Injectable } from '@angular/core';
import { TodoList } from '../models/todolist';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  lists: TodoList[] = [new TodoList('test list')];
  selectedList?: TodoList;

  constructor() { }

  addList(newList: TodoList) {
    this.lists.push(newList)
    this.selectedList = newList
  }

  markAsSelected(listToSelect: TodoList) {
    this.selectedList = listToSelect;
  }
}
