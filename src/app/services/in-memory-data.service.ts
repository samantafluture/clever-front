import { Status } from 'src/app/models/enums/status';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Role } from 'src/app/models/enums/role';
import { Progress } from '../models/enums/progress';

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
        progress: Progress.TO_DO
      },
      {
        id: 2,
        title: 'Refatoração do Sistema de Pagamento',
        description: 'Novo banco de dados e servidor',
        dueDate: "2021-10-05",
        createdAt: Date.now,
        progress: Progress.IN_PROGRESS
      },
      {
        id: 3,
        title: 'Criação de Ferramenta de Email',
        description: 'Nova ferramenta para ajudar no disparo de emails de marketing',
        dueDate: "2021-11-21",
        createdAt: Date.now,
        progress: Progress.DONE
      },
    ];
    const sprints = [
      {
        id: 1,
        title: 'Criar novo Manual e Identidade de Marca',
        description: 'Incluir designs, tipografia, aplicações e logos',
        status: Status.TO_DO,
        project: {
          id: 1,
          title: 'Lançamento do eCommerce',
          description: 'Uma nova virtual da marca será lançada, focada no público feminino',
          dueDate: "2021-10-10",
          createdAt: Date.now,
        },
        dueDate: "2021-10-10",
        createdAt: Date.now,
      },
      {
        id: 2,
        title: 'Desenvolver integração com boleto',
        description: 'Deve conter rotas, documentação e possibilitar filtros',
        status: Status.IN_PROGRESS,
        project: {
          id: 2,
          title: 'Refatoração do Sistema de Pagamento',
          description: 'Novo banco de dados e servidor',
          dueDate: "2021-10-05",
          createdAt: Date.now,
        },
        dueDate: "2021-10-24",
        createdAt: Date.now,
      },
      {
        id: 3,
        title: 'Atualizar dashboard com métricas de serviços',
        description: 'A nova área do dashboard deve conter dados atualizados',
        status: Status.DONE,
        project: {
          id: 3,
          title: 'Criação de Ferramenta de Email',
          description: 'Nova ferramenta para ajudar no disparo de emails de marketing',
          dueDate: "2021-11-21",
          createdAt: Date.now,
        },
        dueDate: "2021-11-14",
        createdAt: Date.now,
      },
    ];
    const tasks = [
      {
        id: 1,
        description: 'Aprovar design da campanha principal',
        isUrgent: true,
        isDone: false,
        sprint: {
          id: 1,
          title: 'Criar novo Manual e Identidade de Marca',
          description: 'Incluir designs, tipografia, aplicações e logos',
          status: Status.TO_DO,
          project: {
            id: 1,
            title: 'Lançamento do eCommerce',
            description: 'Uma nova virtual da marca será lançada, focada no público feminino',
            dueDate: "2021-10-10",
            createdAt: Date.now,
          },
          dueDate: "2021-10-10",
          createdAt: Date.now,
        },
        dueDate: "2021-10-12",
        createdAt: Date.now,
      },
      {
        id: 2,
        description: 'Refatorar rotas da API',
        isUrgent: false,
        isDone: false,
        sprint: {
          id: 2,
          title: 'Desenvolver integração com boleto',
          description: 'Deve conter rotas, documentação e possibilitar filtros',
          status: Status.IN_PROGRESS,
          project: {
            id: 2,
            title: 'Refatoração do Sistema de Pagamento',
            description: 'Novo banco de dados e servidor',
            dueDate: "2021-10-05",
            createdAt: Date.now,
          },
          dueDate: "2021-10-24",
          createdAt: Date.now,
        },
        dueDate: "2021-11-04",
        createdAt: Date.now,
      },
      {
        id: 3,
        description: 'Criar autorização de login',
        isUrgent: false,
        isDone: true,
        sprint: {
          id: 3,
          title: 'Atualizar dashboard com métricas de serviços',
          description: 'A nova área do dashboard deve conter dados atualizados',
          status: Status.DONE,
          project: {
            id: 3,
            title: 'Criação de Ferramenta de Email',
            description: 'Nova ferramenta para ajudar no disparo de emails de marketing',
            dueDate: "2021-11-21",
            createdAt: Date.now,
          },
          dueDate: "2021-11-14",
          createdAt: Date.now,
        },
        dueDate: "2021-12-19",
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
