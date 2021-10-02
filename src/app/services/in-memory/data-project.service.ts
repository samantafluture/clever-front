import { Status } from './../../enums/status';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataProjectService implements InMemoryDbService {
  createDb() {
    const projects = [
      {
        id: 1,
        title: 'Projeto Teste 1',
        description: 'Descrição do Projeto Teste 1',
        status: Status.TO_DO,
        dueDate: Date.now,
        createdAt: Date.now,
      },
      {
        id: 2,
        title: 'Projeto Teste 2',
        description: 'Descrição do Projeto Teste 2',
        status: Status.IN_PROGRESS,
        dueDate: Date.now,
        createdAt: Date.now,
      },
      {
        id: 3,
        title: 'Projeto Teste 3',
        description: 'Descrição do Projeto Teste 3',
        status: Status.DONE,
        dueDate: Date.now,
        createdAt: Date.now,
      },
    ];
    return { projects };
  }
}
