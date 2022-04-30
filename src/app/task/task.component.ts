import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskInterface } from './task-interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task: TaskInterface | null = null;
  @Output() edit = new EventEmitter<TaskInterface>();

  constructor() {}

  ngOnInit(): void {}
}
