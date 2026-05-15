import { Routes } from '@angular/router';
import { CounterPage } from './counter-page/counter-page';

export const routes: Routes = [
  { path: '', redirectTo: 'counter', pathMatch: 'full' },
  { path: 'counter', component: CounterPage },
];
