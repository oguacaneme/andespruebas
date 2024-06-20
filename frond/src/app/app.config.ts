import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { FormsModule }   from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),    
     provideRouter(routes),
     FormsModule,
     provideHttpClient(),
     importProvidersFrom(
      HttpClientModule,
      NgForm,
      
           )
    ]
};
