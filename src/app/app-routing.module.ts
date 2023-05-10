import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'explore', component: ExploreComponent },
  { path: "item-details", component: ItemDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
