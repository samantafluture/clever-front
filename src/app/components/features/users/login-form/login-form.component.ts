import { Component, Input, OnInit } from '@angular/core';
import { Role } from 'src/app/models/enums/role';
import { User } from 'src/app/models/interfaces/user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @Input() btnTitle!: string;
  @Input() user!: User;
  role = [Role.MEMBER, Role.MANAGER];

  constructor(private location: Location) {}

  ngOnInit(): void {}

  cancel() {
    this.location.back();
    return false;
  }}
