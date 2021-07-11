// src/app/components/header.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <div class="mobile-header">
        <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" />
        <div class="row">
          <label for="openSidebarMenu" class="sidebarIconToggle">
            <div class="spinner diagonal part-1"></div>
            <div class="spinner horizontal"></div>
            <div class="spinner diagonal part-2"></div>
          </label>
          <div class="column-6 offset-8">
            <div class="nav-logo"><h1>EpicRoadTrip</h1></div>
          </div>
        </div>
      </div>

      <div class="row align-center-center" id="desktop-header">
        <div class="sm-column-6 sm-offset-1 lg-column-4 lg-offset-2">
          <div class="nav-logo"><h1>EpicRoadTrip</h1></div>
        </div>
        <div class="sm-column-2 sm-offset-1 lg-column-2 lg-offset-2  a-menu">
          <h4>
            <a href="">HOME</a>
          </h4>
        </div>
        <div class="sm-column-2 sm-offset-1 lg-column-2 a-menu">
          <h4>
            <a href="">TRAVEL</a>
          </h4>
        </div>
        <div class="sm-column-2 sm-offset-1 lg-column-2 a-menu">
          <h4>
            <a href="">SLEEP</a>
          </h4>
        </div>
        <div class="sm-column-2 sm-offset-1 lg-column-2 a-menu">
          <h4>
            <a href="">EAT</a>
          </h4>
        </div>
        <div class="sm-column-2 sm-offset-1 lg-column-2 a-menu">
          <h4>
            <a href="">ENJOY</a>
          </h4>
        </div>
        <div class="sm-column-2 sm-offset-1 lg-column-2 a-menu">
          <h4>
            <a href=""></a>
          </h4>
        </div>
      </div>
    </header>
  `,
  styles: [],
})
export class HeaderComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
}
