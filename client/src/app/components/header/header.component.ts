// src/app/components/header.component.ts
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-header',
  template: `
    <header>
      <div class="row align-center-center">
        <div class="column-4 lg-offset-2">
          <div class="nav-logo"><h1>TRAVEL</h1></div>
        </div>
        <div class="column-2 a-menu lg-offset-2">
          <h4>
            <a href="">HOME</a>
          </h4>
        </div>
        <div class="column-2 a-menu">
          <h4>
            <a href="">HOTELS</a>
          </h4>
        </div>
        <div class="column-2 a-menu">
          <h4>
            <a href="">PAGES</a>
          </h4>
        </div>
        <div class="column-2 a-menu">
          <h4>
            <a href="">BONUS</a>
          </h4>
        </div>
        <div class="column-2 a-menu">
          <h4>
            <a href="">CONTACT</a>
          </h4>
        </div>
      </div>
    </header>
  `,
  styles: [],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
