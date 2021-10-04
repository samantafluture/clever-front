import { Task } from './../../../interfaces/task';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  @Input() id!: any;
  @Input() description: string = '';
  @Input() dueDate!: Date;
  @Input() isUrgent: boolean = false;
  @Input() isDone: boolean = false;
  @Output() checkEvent = new EventEmitter<any>();
  @ViewChild('taskItem')
  private taskElement!: ElementRef;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  edit() {
    this.router.navigate(['/tarefa/' + this.task.id + '/editar/']);
  }

  remove() {
    this.taskElement.nativeElement.remove();
  }

  check() {
    this.checkEvent.emit();
    this.isDone = true;
  }
}
