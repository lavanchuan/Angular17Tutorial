import { Routes } from '@angular/router';
import { ClassBindingComponent } from './components/class-binding/class-binding.component';
import { ComponentLifeCycleComponent } from './components/component-life-cycle/component-life-cycle.component';
import { DirectiveComponent } from './components/directive/directive/directive.component';
import { NgForComponent } from './components/directive/structural/ng-for/ng-for.component';
import { DogComponent } from './components/dog/dog.component';
import { HomeComponent } from './components/home/home.component';
import { PipeDateComponent } from './components/pipe/pipe-date/pipe-date.component';

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component:HomeComponent},
  {path: "dog", component: DogComponent},
  {path: "directive", component: DirectiveComponent},
  {path: "ng-for", component: NgForComponent},
  {path: "component-life-cycle", component:ComponentLifeCycleComponent},
  {path: "class-binding", component: ClassBindingComponent},
  {path: "pipe-date", component:PipeDateComponent}
];
