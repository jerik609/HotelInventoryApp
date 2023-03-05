import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// here we bootstrap the application - setting AppModule as the root module
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
