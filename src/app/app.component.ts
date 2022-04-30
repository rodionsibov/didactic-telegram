import { Component } from '@angular/core';
import { TaskInterface } from './task/task-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todo: TaskInterface[] = [
    {
      title: 'Buy apples',
      description: 'Go to the store and buy apples',
    },
    {
      title: 'Create a Kanban app',
      description: 'Using Firebase and Angular create a Kanban app!',
    },
  ];
}
