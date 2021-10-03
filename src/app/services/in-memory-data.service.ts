import { Status } from 'src/app/enums/status';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Role } from 'src/app/enums/role';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const projects = [
      {
        id: 1,
        title: 'Lançamento do eCommerce',
        description: 'Uma nova virtual da marca será lançada, focada no público feminino',
        dueDate: "2021-10-10",
        createdAt: Date.now,
      },
      {
        id: 2,
        title: 'Refatoração do Sitema de Pagamento',
        description: 'Novo banco de dados e servidor',
        dueDate: "2021-10-05",
        createdAt: Date.now,
      },
      {
        id: 3,
        title: 'Criação de Ferramenta de Email',
        description: 'Nova ferramenta para ajudar no disparo de emails de marketing',
        dueDate: "2021-11-21",
        createdAt: Date.now,
      },
    ];
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
    return { projects, sprints, tasks, users };
  }
}
