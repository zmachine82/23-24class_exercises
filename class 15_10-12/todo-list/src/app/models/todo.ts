export class Todo {
  name: string;
  completed: boolean

  constructor(name: string, completed: boolean = false) {
    this.name = name;
    this.completed = completed;
  }
}
