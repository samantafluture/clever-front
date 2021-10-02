import { Status } from 'src/app/enums/status';
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
        title: 'Lançamento do eCommerce',
        description: 'Uma nova virtual da marca será lançada, focada no público feminino',
        status: Status.TO_DO,
        dueDate: "2021-10-20T22:18:26.625Z",
        createdAt: Date.now,
      },
      {
        id: 2,
        title: 'Refatoração do Sitema de Pagamento',
        description: 'Novo banco de dados e servidor',
        status: Status.IN_PROGRESS,
        dueDate: "2021-11-05T22:18:26.625Z",
        createdAt: Date.now,
      },
      {
        id: 3,
        title: 'Criação de Ferramenta de Email',
        description: 'Nova ferramenta para ajudar no disparo de emails de marketing',
        status: Status.DONE,
        dueDate: "2021-12-10T22:18:26.625Z",
        createdAt: Date.now,
      },
    ];
    return { projects };
  }
}
