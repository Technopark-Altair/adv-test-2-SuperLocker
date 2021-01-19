import { NgModule } from '@angular/core';
import { CarComponent } from './car/car.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "car/:id", component: CarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
