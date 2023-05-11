import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { RouterModule } from '@angular/router';
import { CreateNftComponent } from './create-nft/create-nft.component';
import { CurrentlyMarketComponent } from './currently-market/currently-market.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { YoursJumbotronComponent } from './yours-jumbotron/yours-jumbotron.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ExploreComponent,
    CreateNftComponent,
    CurrentlyMarketComponent,
    ItemDetailsComponent,
    YoursJumbotronComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
