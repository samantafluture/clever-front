import { Status } from './../../enums/status';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataSprintService implements InMemoryDbService {
  createDb() {
    const sprints = [
      {
        id: 1,
        title: 'Sprint Teste 1',
        description: 'Descrição do Sprint Teste 1',
        status: Status.TO_DO,
        project: 1,
        dueDate: Date.now,
        createdAt: Date.now,
      },
      {
        id: 2,
        title: 'Sprint Teste 2',
        description: 'Descrição do Sprint Teste 2',
        status: Status.IN_PROGRESS,
        project: 1,
        dueDate: Date.now,
        createdAt: Date.now,
      },
      {
        id: 3,
        title: 'Sprint Teste 3',
        description: 'Descrição do Sprint Teste 3',
        status: Status.DONE,
        project: 1,
        dueDate: Date.now,
        createdAt: Date.now,
      },
    ];
    return { sprints };
  }
}
