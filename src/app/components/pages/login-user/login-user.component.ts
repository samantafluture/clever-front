import { UsersService } from '../../features/users/users.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/interfaces/user';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/enums/role';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
})
export class LoginUserComponent implements OnInit {
  user!: User;

  constructor(private userService: UsersService, private router: Router) {
    this.user = {
      name: '',
      email: '',
      password: '',
      role: Role.MEMBER,
    };
  }

  ngOnInit(): void {}

  login(email: string, password: string) {
    this.userService.login(email, password).subscribe(
      () => {
        console.log('Logged in!', email, password);
        this.router.navigate(['/dashboard']);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
