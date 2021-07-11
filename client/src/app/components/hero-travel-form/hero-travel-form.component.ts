import { Component, OnInit } from '@angular/core'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import axios from "axios";


@Component({
  selector: 'app-hero-travel-form',
  template: `
    <section class="hero-travel">
      <div class="img-travel"></div>
      <div class="row">
        <div class="sm-column-22 sm-offset-1 lg-column-8 lg-offset-2 travel-form">
          <form action="/">
            <div class="row">
              <div class="sm-column-22 sm-offset-1 lg-column-22 lg-offset-1">
                <label for="where">
                  <h4>Where whould you like to go ?</h4>
                </label>
                <input type="text" class="a-input-text" id="where"
                  required
                  [(ngModel)]="originLocationCode" name="originLocationCode"
                  placeholder="Departure airport: City Airport, ex: MPL"
                />
                <input type="text" class="a-input-text" id="where"
                  required
                  [(ngModel)]="destinationLocationCode" name="destinationLocationCode"
                  placeholder="Destination: City airport, ex :JFK"
                />
              </div>
              <div class="sm-column-22 sm-offset-1 lg-column-10 lg-offset-1">
              <input type="date" class="a-input-text" id="departure-date"
                required
                [(ngModel)]="destinationLocationCode" name="departureDate"
              />
              </div>
              <div class="sm-column-22 sm-offset-1 lg-column-10 lg-offset-1">
                <input type="number" class="a-input-text" id="adults"
                  required
                  [(ngModel)]="adults" name="adults"
                  placeholder="Number of adults"
                />
              </div>
              <div class="sm-column-22 sm-offset-1 lg-column-13 lg-offset-1">
                <select class="a-select" name="Max Budget" id="Max Budget">
                  <option value="1" selected>
                    Max Budget
                  </option>
                  <option value="2" >
                    Lorem 2
                  </option>
                  <option value="3">
                    Lorem 3
                  </option>
                  <option value="4">
                    Lorem 4
                  </option>
                  <option value="5">
                    Lorem 5
                  </option>
                  <option value="6">
                    Lorem 6
                  </option>
                </select>
              </div>
              <div class="sm-column-22 sm-offset-1 lg-column-14 lg-offset-5">
                <button class="a-button secondary" ng-click="searchFlights()">BOOK NOW</button>
              </div>
            </div>
          </form>
        </div>
        <div class="sm-column-22 sm-offset-1 lg-column-8 lg-offset-2 pt-30">
          <div class="row">
            <div class="column-24">
              <h2>Let's discover the world together</h2>
            </div>
            <div class="column-24 pt-30">
              <p>
                Template based on deep research on the most popular travel
                booking websites such as booking.com, tripadvisor, yahoo travel,
                expedia, priceline, hotels.com, travelocity, kayak, orbitz, etc.
                This guys can’t be wrong. You should definitely give it a shot
                :)
              </p>
            </div>
            <div class="column-12 pt-30">
              <a class="a-button primary " href="">READ MORE</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class HeroTravelFormComponent implements OnInit {

  public originLocationCode: string;
  public destinationLocationCode: string;
  public departureDate: string;
  public adults: number;

  constructor() {

    // this.originLocationCode: string,
    //   this.destinationLocationCode: string,
    //     this.departureDate: string,
    //       this.adults: number
  };

  searchFlights() {
    console.log('SENT')
    axios
      .post('http://localhost:4040/api/travel/flights', {
        originLocationCode: this.originLocationCode,
        destinationLocationCode: this.destinationLocationCode,
        departureDate: this.departureDate,
        adults: this.adults
      })
  }
  ngOnInit(): void {

  }
}
