# Syndesi blog

This is the software used for my own blog. It depends on an custom API (powered by Directus) which will be published soon.

### Workspace setup

1. Setup the environment-files: Duplicate `.env.dev.example` as `.env.dev` and `.env.prod.example` as `.env.prod` in the main folder. Then adapt the variables listed inside the files, e.g. change your name and title.
2. Open a console in the root folder
3. Execute `yarn install`

### Developing

1. Open a console in the root folder.
2. Execute `yarn start`.
3. If nothing failed, the blog should be available at `localhost:8080/`. While developing the website will be automatically reloaded once you saved changed files.

### Building

1. Open a console in the root folder.
2. Execute `yarn build`.
3. If nothing failed, the compiled files are available at `/dist/`. Make sure to place these files at the same folder as specified in `.env.prod` (normally `/blog/`).

### Commits & co

1. Commit all required patches/features.
2. Execute `yarn release` and answer all questions.