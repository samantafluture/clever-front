import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/enums/role';
import { User } from 'src/app/interfaces/user';
import { UsersService } from '../../users/users.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  user!: User;

  constructor(
    private location: Location,
    private userService: UsersService,
    private router: Router
  ) {
    this.user = {
      name: '',
      email: '',
      password: '',
      role: Role.MEMBER,
    };
  }

  ngOnInit(): void {
    this.user = {
      name: '',
      email: '',
      password: '',
      role: Role.MEMBER,
    };
  }

  create(user: User): void {
    this.userService.createUser(user).subscribe(
      () => {
        console.log('User created!', user);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.log(error);
        this.location.back();
      }
    );
  }

  cancel() {
    this.location.back();
    return false;
  }
}
