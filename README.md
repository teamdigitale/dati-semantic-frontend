
[![License](https://img.shields.io/github/license/italia/bootstrap-italia.svg)](https://github.com/italia/bootstrap-italia/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/teamdigitale/dati-semantic-frontend.svg)](https://github.com/teamdigitale/dati-semantic-frontend/issues)
[![Join the #design channel](https://img.shields.io/badge/Slack%20channel-%23design-blue.svg)](https://developersitalia.slack.com/messages/C7VPAUVB3/)
[![Get invited](https://slack.developers.italia.it/badge.svg)](https://slack.developers.italia.it/)
[![18app on forum.italia.it](https://img.shields.io/badge/Forum-18app-blue.svg)](https://forum.italia.it/c/18app-carta-docente)

# Frontend for the National Data Catalog (NDC) for Semantic Interoperability

This is the frontend for the National Data Catalog (NDC) for Semantic Interoperability, a component of the PDND (Piattaforma Digitale Nazionale Dati) project.

PDND is composed of:
* a system to streamline the signing of "interoperability agreements" between API producers and consumers, by standardizing the process and authenticating participants
* a centralized API catalog, which enables the discovery and usage of eServices
* a centralized system which enables controlled and authorized access by consumers to the APIs, along with logging of the operations
* the National Data Catalog (NDC) for Semantic Interoperability, whose purpose is to store and index the semantic material (ontologies and controlled vocabularies) to be used as metadata with which to describe the APIs and the data they exchange

The frontend is composed of a website which enables anyone to browse and search the semantic material stored in the National Data Catalog backend.

# Index

- [How to start](#how-to-start)
- [How to contribute](#how-to-contribute)
- [Maintenance](#maintenance)
- [License](#license)


# How to start

This application is built using React with APIs served from [dati-semantic-backend](https://github.com/teamdigitale/dati-semantic-backend).

To just fix the UI of the application use `yarn start` and run the application to see your changes.

If you also need to fix UI on searching and details page either bring the backend service up or start the mock server using `scripts/start-mock-server.sh`

## Install

Steps for fresh install of app
- `yarn install`
- `yarn lint` (to verify all is fine)
- `yarn test` (to verify all is fine)
- `yarn build`
- `yarn start` or `docker-compose up` (will create the docker image and start the app)

### `yarn install`
To install the needed plugins for the React app

### `yarn start`
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn test`
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

### `yarn build`
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### `yarn lint`
To check for lint and checkstyle issues

### `yarn prepare`
To install the husky pre commit hooks

For every commit, build will be triggered using Github Actions. See file `node.js.yml` for details.

On successful build - tests, lint etc passing - image will be published to GHCR - Github Container Registry
and automatically deployed to the dev env.

Dev env can be viewed [here](https://ndc-dev.apps.cloudpub.testedev.istat.it/).

## Documentation
Documentation can be found here [Wiki](https://github.com/teamdigitale/dati-semantic-frontend/wiki)

# How to contribute

## Community

### Code of conduct

### Responsible Disclosure

### Segnalazione bug e richieste di aiuto

# Maintenance 

# License 

This work is licensed under the GNU Affero General Public License (AGPL), version 3 or later. You can find a copy of
the license in the [LICENSE](https://github.com/teamdigitale/dati-semantic-frontend/blob/main/LICENSE) file
