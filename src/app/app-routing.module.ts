import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SingleviewComponent } from './singleview/singleview.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:':id/singleview',component:SingleviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
