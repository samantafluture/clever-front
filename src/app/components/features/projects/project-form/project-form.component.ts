import { Project } from '../../../../models/interfaces/project';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { User } from 'src/app/models/interfaces/user';
import { Role } from 'src/app/models/enums/role';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css'],
})
export class ProjectFormComponent implements OnInit {
  @Input() project!: Project;
  @Input() btnTitle!: string;
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
  members: any[] = [];

  filteredOptions!: Observable<User[]>;

  constructor(private location: Location) {}

  ngOnInit(): void {
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

  addMember(member: any) {
    if (member) {
      this.members.push(member);
    }
    return false;
  }
}
