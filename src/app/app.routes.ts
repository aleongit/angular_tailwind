import { Routes } from '@angular/router';
import { CoreConceptsComponent } from './pages/core-concepts/core-concepts.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CustomizationComponent } from './pages/customization/customization.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'core-concepts', component: CoreConceptsComponent },
  { path: 'customization', component: CustomizationComponent },
  { path: '**', component: PageNotFoundComponent },
];
