# Virometer

“ViroMeter” ist ein Dashboard zur Darstellung verschiedener Daten und Zahlen zur Corona-Pandemie. Das Dashboard ist simpel aufgebaut und mit Erklärungen sowie sinnvollen Diagrammen versehen, um das Verständnis der Daten beim Verwender zu gewährleisten.
Version: 2022

---------------------------------------------------------------------------------------------------------------

This project will visualize data about Covid19. It was generated using [Nx](https://nx.dev).

<p align="center"><img src="apps/virometer/src/assets/virometerLogo.png" width="200"></p>

## Erste Schritte fürs Projekt

- Install Visual Studio Code
- Installiere `NX Console` Extension
- Installiere `ESLint` Extension
- Führe `npm install` aus...Das dauert eine Weile. Hol dir am Besten einen Kaffee :)
- Führe `docker-compose build --parallel` aus... Das dauert evtl eine Weile (vor allem in Zukunft, wenn wir mehrere images haben). Zeit für noch einen Kaffee :D
- Füre `docker-compose up -d` aus
- WICHTIG: Libraries dürfen nicht einfach so umbenannt werden, dafür gibt es eine [schematic](https://github.com/nrwl/nx/issues/2001)
- Bevor du irgendetwas änderst, informiere dich darüber, wie der [Workspace in nrwl nx mit react-express](https://nx.dev/latest/react/workspace/workspace-overview) aufgebaut ist und was [Workplace Schematic](https://nx.dev/latest/react/workspace/schematics/using-schematics) ist

## Zusatzinfo

- Um die gitbash im Terminal in VS Code auszuführen, einfach folgendes Kommando im Terminal ausführen: `` C:\Program` Files\Git\bin\bash.exe ``

## Datenbank

- [How To](https://confluence-student.it.hs-heilbronn.de/display/LAPSW2020WiSeTeam3/LABSW20T3-39+-+feat%28db%29%3A+datenbank+aufsetzen)

&nbsp;&nbsp;

---

&nbsp;&nbsp;

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="250"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@virometer-gmbh/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## ☁ Nx Cloud

### Computation Memoization in the Cloud

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
