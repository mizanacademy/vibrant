import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
// import { Itemdetails } from './Itemdetails/Itemdetails.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'itemdetails', component: ItemdetailsComponent },
  { path: 'explore', component: ExploreComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
