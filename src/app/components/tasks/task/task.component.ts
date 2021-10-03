import { IsUrgent } from './../../../enums/is-urgent';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() description: string = '';
  @Input() dueDate!: Date;
  @Input() isUrgent!: IsUrgent;
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

}
