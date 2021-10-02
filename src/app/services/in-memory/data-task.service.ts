import { Status } from './../../enums/status';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataTaskService implements InMemoryDbService {
  createDb() {
    const tasks = [
      {
        id: 1,
        title: 'Tarefa Teste 1',
        description: 'Descrição do Tarefa Teste 1',
        status: Status.TO_DO,
        sprint: 1,
        dueDate: Date.now,
        createdAt: Date.now,
      },
      {
        id: 2,
        title: 'Tarefa Teste 2',
        description: 'Descrição do Tarefa Teste 2',
        status: Status.IN_PROGRESS,
        sprint: 1,
        dueDate: Date.now,
        createdAt: Date.now,
      },
      {
        id: 3,
        title: 'Tarefa Teste 3',
        description: 'Descrição do Tarefa Teste 3',
        status: Status.DONE,
        sprint: 1,
        dueDate: Date.now,
        createdAt: Date.now,
      },
    ];
    return { tasks };
  }
}
