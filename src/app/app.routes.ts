import { Routes } from '@angular/router';
import { CoreConceptsComponent } from './pages/core-concepts/core-concepts.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'core-concepts', component: CoreConceptsComponent },
  { path: '**', component: PageNotFoundComponent },
];
