import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() description: string = '';
  @Input() dueDate!: Date;
  @Input() isUrgent: boolean = false;
  @Input() isDone: boolean = false;
  @Output() checkEvent = new EventEmitter<any>();
  @Output() editEvent = new EventEmitter<any>();
  @Output() removeEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  edit() {
    this.editEvent.emit();
  }

  remove() {
    this.removeEvent.emit();
  }

  check() {
    this.checkEvent.emit();
    this.isDone = true;
  }
}
