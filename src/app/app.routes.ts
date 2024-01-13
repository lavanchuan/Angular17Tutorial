import { Routes } from '@angular/router';
import { DogComponent } from './components/dog/dog.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component:HomeComponent},
  {path: "dog", component: DogComponent}
];
