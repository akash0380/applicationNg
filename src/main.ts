// Import bootstrap JS (bundle includes Popper) for client-side behaviors (dropdowns, modals, etc.)
// Use ESM Bootstrap JS bundle to avoid CommonJS optimization warnings
import 'bootstrap/dist/js/bootstrap.esm.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
