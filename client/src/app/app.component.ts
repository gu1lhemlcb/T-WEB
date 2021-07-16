import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- header -->
    <app-header></app-header>

    <!-- routes will be rendered here -->
    <!-- <app-hero-travel-form></app-hero-travel-form> -->
    <app-hero-travel-form></app-hero-travel-form>
    <app-destinations-list></app-destinations-list>
    <router-outlet></router-outlet>

    <!-- footer -->
    <a routerLink="/find-flights" routerLinkActive="active">ELELELELELELE</a>
    <app-footer></app-footer>

  `,
  styles: []
})
export class AppComponent {
  title = 'client';
}
