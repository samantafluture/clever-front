<p align="center">
  <a href="https://clever-app-puc.vercel.app/">
    <img src="https://github.com/samantafluture/clever-front/blob/main/src/assets/logo.png?raw=true" height="36" width="137" alt="Clever App" />
  </a>
</p>

<p align="center">Um aplicativo de gerenciamento de projetos π </p>

<div align="center">

![GitHub issue/pull request detail](https://img.shields.io/github/issues/detail/state/samantafluture/clever-front/15?style=for-the-badge)
![GitHub commit activity](https://img.shields.io/github/commit-activity/w/samantafluture/clever-front?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/samantafluture/clever-front?style=for-the-badge)
![Website](https://img.shields.io/website?style=for-the-badge&url=https%3A%2F%2Fclever-app-puc.vercel.app)

</div>

## Tecnologias Principais

- Angular
- Angular CLI
- [angular-in-memory-web-api (mock para API)](https://www.npmjs.com/package/angular-in-memory-web-api)

### DependΓͺncias dos Componentes UI 

- Angular Material CDK (para construΓ§Γ£o de: drag and drop, autocomplete)
- [ngx-progressbar](https://www.npmjs.com/package/ngx-progressbar)

### Estrutura de Pastas

A organizaΓ§Γ£o do front-end do sistema segue o padrΓ£o de projeto Angular.

Os `components` concentram os elementos de interface (HTML, CSS e lΓ³gica em TypeScript). Os `models` sΓ£o interfaces e enums, basedos no diagrama de classes linkado acima. JΓ‘ os `services` sΓ£o mΓ©todos que fazem o contato com a API, sendo que cada model tem seu prΓ³prio service, em seu `module`.

```bash
βββ src
β   βββ app
β   β   βββ components
β   β   βββ models
β   β   βββ services
β   β   βββ utils
β   β   βββ app-routing.module.ts
β   β   βββ app.component.ts
β   β   βββ app.component.html
β   β   βββ app.component.css
β   β   βββ app.module.ts
β   βββ assets
β   βββ environments
β   βββ main.ts
β   βββ index.html
β   βββ style.css
```

## Overview

Trabalho de conclusΓ£o da PΓ³s-graduaΓ§Γ£o Lato Sensu em **Engenharia de Software** pela PUC Minas Virtual. O pdf completo estΓ‘ disponΓ­vel [aqui](https://github.com/samantafluture/clever-front/blob/main/info/clever-app-dissertation.pdf).

### Funcionalidades

- Visualizar mΓΊltiplos projetos e seus progressos
- Cadastrar novos projetos
- Adicionar membros e responsΓ‘vel pelo projeto
- Visualizar sprints em kanban board
- Cadastrar novos sprints em projeto existente
- Visualizar tarefas por sprints
- Cadastrar novas tarefas em sprint existente
- Adicionar membro responsΓ‘vel pela tarefa

### Arquitetura

AlΓ©m do cΓ³digo de front-end feito em **Angular**, neste repositΓ³rio Γ© possΓ­vel acessar alguns dos documentos criados para como preparaΓ§Γ£o para o desenvolvimento.

- [Diagrama de casos de uso](https://github.com/samantafluture/clever-front/blob/main/info/uml-diagrams/use-cases.jpeg)
- [Diagrama de classes de domΓ­nio](https://github.com/samantafluture/clever-front/blob/main/info/uml-diagrams/domain-classes.jpeg)
- [Diagrama de componentes](https://github.com/samantafluture/clever-front/blob/main/info/uml-diagrams/components.jpeg)
- [Diagrama de implantaΓ§Γ£o](https://github.com/samantafluture/clever-front/blob/main/info/uml-diagrams/implementation.jpeg)
- [Estimativa de pontos de funΓ§Γ£o](https://github.com/samantafluture/clever-front/blob/main/info/function-point.xlsx)
- [Site map](https://github.com/samantafluture/clever-front/blob/main/info/ux-ui-prototypes/site-map.jpg)
- [ProtΓ³tipo do sistema](https://github.com/samantafluture/clever-front/blob/main/info/ux-ui-prototypes/wireframe-navegation.jpg)

O back-end serΓ‘ feito em **NestJS** e ainda estΓ‘ em desenvolvimento.

## No Ar 

β &nbsp; **Acesse o site no ar aqui: [https://clever-app-puc.vercel.app/](https://clever-app-puc.vercel.app/)**

## Demo 

Abaixo estΓ‘ uma demonstraΓ§Γ£o em vΓ­deo do front-end do sistema. 

Clique na imagem abaixo para assiste, no [Youtube](https://www.youtube.com/watch?v=r9gBmMNxyPY).

[![DemonstraΓ§Γ£o em vΓ­deo](https://hostmyimg.s3.amazonaws.com/Screen%20Shot%202021-10-16%20at%2015.24.04.png)](https://www.youtube.com/watch?v=r9gBmMNxyPY)

O deploy atual foi feito na Vercel, para demonstraΓ§Γ£o. 

## Screenshots

π· &nbsp; Abaixo, algumas screenshots das pΓ‘ginas e recursos principais:

### **/dashboard**

![Dashboard](https://github.com/samantafluture/clever-front/blob/main/info/screenshots/clever-app-dashboard.png?raw=true)

### **/novo-projeto**

![Novo Projeto](https://github.com/samantafluture/clever-front/blob/main/info/screenshots/clever-app-new-project-form.png?raw=true)

### **/projeto/:id**

![Projeto](https://github.com/samantafluture/clever-front/blob/main/info/screenshots/clever-app-view-project.png?raw=true)

### **/projeto/:id/sprint/:id**

![Sprint de Projeto](https://github.com/samantafluture/clever-front/blob/main/info/screenshots/clever-app-view-sprint.png?raw=true)

---

## LicenΓ§a

Este projeto estΓ‘ sob a licenΓ§a [MIT](./LICENSE).
