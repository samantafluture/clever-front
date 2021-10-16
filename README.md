<p align="center">
  <a href="https://clever-app-puc.vercel.app/">
    <img src="https://github.com/samantafluture/clever-front/blob/main/src/assets/logo.png?raw=true" height="36" width="137" alt="Clever App" />
  </a>
</p>

<p align="center">Um aplicativo de gerenciamento de projetos 🚀 </p>

<div align="center">

![GitHub issue/pull request detail](https://img.shields.io/github/issues/detail/state/samantafluture/clever-front/15?style=for-the-badge)
![GitHub commit activity](https://img.shields.io/github/commit-activity/w/samantafluture/clever-front?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/samantafluture/clever-front?style=for-the-badge)
![Website](https://img.shields.io/website?style=for-the-badge&url=https%3A%2F%2Fclever-app-puc.vercel.app)

</div>
---

## Tecnologias Principais

- Angular
- Angular CLI
- [angular-in-memory-web-api (mock para API)](https://www.npmjs.com/package/angular-in-memory-web-api)

### Dependências dos Componentes UI 

- Angular Material CDK (para construção de: drag and drop, autocomplete)
- [ngx-progressbar](https://www.npmjs.com/package/ngx-progressbar)

### Estrutura de Pastas

A organização do front-end do sistema segue o padrão de projeto Angular.

Os `components` concentram os elementos de interface (HTML, CSS e lógica em TypeScript). Os `models` são interfaces e enums, basedos no diagrama de classes linkado acima. Já os `services` são métodos que fazem o contato com a API, sendo que cada model tem seu próprio service, em seu `module`.

```bash
├── src
│   ├── app
│   │   ├── components
│   │   ├── models
│   │   ├── services
│   │   ├── utils
│   │   ├── app-routing.module.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   ├── app.module.ts
│   ├── assets
│   ├── environments
│   ├── main.ts
│   ├── index.html
│   ├── style.css
```

## Overview

Trabalho de conclusão da Pós-graduação Lato Sensu em **Engenharia de Software** pela PUC Minas Virtual. O pdf completo está disponível [aqui](https://github.com/samantafluture/clever-front/blob/main/info/clever-app-dissertation.pdf).

### Funcionalidades

- Visualizar múltiplos projetos e seus progressos
- Cadastrar novos projetos
- Adicionar membros e responsável pelo projeto
- Visualizar sprints em kanban board
- Cadastrar novos sprints em projeto existente
- Visualizar tarefas por sprints
- Cadastrar novas tarefas em sprint existente
- Adicionar membro responsável pela tarefa

### Arquitetura

Além do código de front-end feito em **Angular**, neste repositório é possível acessar alguns dos documentos criados para como preparação para o desenvolvimento.

- [Diagrama de casos de uso](https://github.com/samantafluture/clever-front/blob/main/info/uml-diagrams/use-cases.jpeg)
- [Diagrama de classes de domínio](https://github.com/samantafluture/clever-front/blob/main/info/uml-diagrams/domain-classes.jpeg)
- [Diagrama de componentes](https://github.com/samantafluture/clever-front/blob/main/info/uml-diagrams/components.jpeg)
- [Diagrama de implantação](https://github.com/samantafluture/clever-front/blob/main/info/uml-diagrams/implementation.jpeg)
- [Estimativa de pontos de função](https://github.com/samantafluture/clever-front/blob/main/info/function-point.xlsx)
- [Site map](https://github.com/samantafluture/clever-front/blob/main/info/ux-ui-prototypes/site-map.jpg)
- [Protótipo do sistema](https://github.com/samantafluture/clever-front/blob/main/info/ux-ui-prototypes/wireframe-navegation.jpg)

O back-end será feito em **NestJS** e ainda está em desenvolvimento.

## No Ar 

✅ &nbsp; **Acesse o site no ar aqui: [https://clever-app-puc.vercel.app/](https://clever-app-puc.vercel.app/)**

## Demo 

Abaixo está uma demonstração em vídeo do front-end do sistema. 

Clique na imagem abaixo para assiste, no [Youtube](https://www.youtube.com/watch?v=r9gBmMNxyPY).

[![Demonstração em vídeo](https://hostmyimg.s3.amazonaws.com/Screen%20Shot%202021-10-16%20at%2015.24.04.png)](https://www.youtube.com/watch?v=r9gBmMNxyPY)

O deploy atual foi feito na Vercel, para demonstração. 

## Screenshots

📷 &nbsp; Abaixo, algumas screenshots das páginas e recursos principais:

### **/dashboard**

![Dashboard](https://github.com/samantafluture/clever-front/blob/main/info/screenshots/clever-app-dashboard.png?raw=true)

### **/novo-projeto**

![Novo Projeto](https://github.com/samantafluture/clever-front/blob/main/info/screenshots/clever-app-new-project-form.png?raw=true)

### **/projeto/:id**

![Projeto](https://github.com/samantafluture/clever-front/blob/main/info/screenshots/clever-app-view-project.png?raw=true)

### **/projeto/:id/sprint/:id**

![Sprint de Projeto](https://github.com/samantafluture/clever-front/blob/main/info/screenshots/clever-app-view-sprint.png?raw=true)

---

## Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ &nbsp; & :coffee: &nbsp; por Samanta Fluture. [Entre em contato!](https://www.linkedin.com/in/samantafluture/)
