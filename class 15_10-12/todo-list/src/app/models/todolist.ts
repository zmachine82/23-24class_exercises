import { Todo } from "./todo";

export class TodoList {
  name: string;
  todos: Todo[];

  constructor(name: string, todos: Todo[] = []) {
    this.name = name;
    this.todos = todos;
  }
}
