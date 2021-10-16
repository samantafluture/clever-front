import { SprintService } from '../../sprints/sprint.service';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Task } from 'src/app/models/interfaces/task';
import { Observable } from 'rxjs';
import { Sprint } from 'src/app/models/interfaces/sprint';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { User } from 'src/app/models/interfaces/user';
import { Role } from 'src/app/models/enums/role';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  @Input() btnTitle: string = '';
  @Input() task!: Task;
  id!: number;
  sprint$!: Observable<Sprint>;
  sprints$ = this.sprintService.getSprints();
  @ViewChild('memberItem')
  private memberElement!: ElementRef;

  myControl = new FormControl();
  options: User[] = [
    {
      name: 'Maria Julia',
      email: 'maria@email.com',
      password: '12345',
      role: Role.MEMBER,
    },
    {
      name: 'Rodrigo Alves',
      email: 'rodrigo@email.com',
      password: '12345',
      role: Role.MEMBER,
    },
    {
      name: 'Guilherme Lima',
      email: 'guilherme@email.com',
      password: '12345',
      role: Role.MEMBER,
    },
  ];
  filteredOptions!: Observable<User[]>;

  constructor(
    private location: Location,
    private sprintService: SprintService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sprints$;
    this.id = this.activatedRoute.snapshot.params.id;
    this.sprint$ = this.sprintService.getSprintById(this.id);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => (typeof value === 'string' ? value : value.name)),
      map((name) => (name ? this._filter(name) : this.options.slice()))
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  cancel() {
    this.location.back();
    return false;
  }

  remove() {
    this.memberElement.nativeElement.remove();
  }
}
