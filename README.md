# ApplicationNg

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Bootstrap

This project includes Bootstrap (v5) for styling and UI components.

- CSS is imported globally in `src/styles.css` via `@import 'bootstrap/dist/css/bootstrap.min.css';`.
- Bootstrap JS is imported into the client entry `src/main.ts` using the ESM bundle, so client-side interactive components (like dropdowns and tooltips) are available.

Quick usage example: add Bootstrap classes in `src/app/app.html`. A demo `btn btn-primary` has been added to demonstrate that Bootstrap is available.

If you're using SSR or only need CSS, it's fine to keep only the CSS import and avoid importing JS in `main.server.ts`.

## Logos & Public Assets

- Place static assets such as logos and images under `public/` (this folder is already referenced in `angular.json` assets). For example, add your logo to `public/images/logo.svg` and it will be available at `/images/logo.svg` at runtime.
- Example usage in templates: `<img src="/images/logo.svg" alt="App logo"/>`.
