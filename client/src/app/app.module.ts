import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroTravelFormComponent } from './components/hero-travel-form/hero-travel-form.component';
import { DestinationsListComponent } from './destinations-list/destinations-list.component';
import { HotDealsComponent } from './views/hot-deals/hot-deals.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroTravelFormComponent,
    DestinationsListComponent,
    HotDealsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
