/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input, OnInit } from '@angular/core';
import { TodoModel } from '../../share/todo.model';

@Component({
  selector: 'app-todo',
  template: `<input type="checkbox" [checked]="todo.done" /> {{ todo.text }}`,
  styles: [],
})
export class TodoComponent implements OnInit {
  @Input() todo!: TodoModel;

  constructor() {}

  ngOnInit(): void {}
}
