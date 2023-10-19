import { Component, Input } from '@angular/core';
import { TodoList } from '../../models/todolist';

@Component({
  selector: 'app-sidebar-list',
  templateUrl: './sidebar-list.component.html',
  styleUrls: ['./sidebar-list.component.css']
})
export class SidebarListComponent {
  @Input() listsToDisplay: TodoList[] =[]

}
