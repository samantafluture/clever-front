import { Role } from './../../enums/role';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataUserService implements InMemoryDbService {
  createDb() {
    const users = [
      {
        id: 1,
        name: 'Samanta Fluture',
        email: 'samanta@email.com',
        password: '1234567',
        jobTitle: 'Gerente de Projetos',
        photoUrl: 'https://github.com/samantafluture.png',
        role: Role.MANAGER
      },
      {
        id: 2,
        name: 'João Rodrigues',
        email: 'joao@email.com',
        password: '1234567',
        jobTitle: 'Programador',
        photoUrl: 'https://github.com/peas.png',
        role: Role.MEMBER
      },
      {
        id: 3,
        name: 'Mauro Cunha',
        email: 'mauro@email.com',
        password: '1234567',
        jobTitle: 'Designer',
        photoUrl: 'https://github.com/eemr3.png',
        role: Role.MEMBER
      },

    ];
    return { users };
  }
}
