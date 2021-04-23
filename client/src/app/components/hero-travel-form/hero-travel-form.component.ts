import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-hero-travel-form',
  template: `
    <section class="hero-travel">
      <div class="img-travel"></div>
      <div class="row align-center-center">
        <div class="column-8 lg-offset-2 travel-form">
          <form action="/">
            <div class="row align-center-center">
              <div class="column-18">
                <label for="where">
                  <h4>Where whould you like to go ?</h4>
                </label>
                <input
                  class="a-input-text"
                  type="text"
                  name="where"
                  id="where"
                  placeholder="Destination: Country, City, Airport..."
                />
              </div>
              <div class="column-8">
                <input
                  class="a-input-text"
                  type="date"
                  name="check-in"
                  id="check-in"
                />
              </div>
              <div class="column-8 lg-offset-2">
                <input
                  class="a-input-text"
                  type="date"
                  name="check-out"
                  id="check-in"
                />
              </div>
              <div class="column-8">
                <select class="a-select" name="adults" id="adults">
                  <option value="1" selected>
                    Adults
                  </option>
                  <option value="2">
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
              <div class="column-8 lg-offset-2">
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
              <div class="column-18">
                <a href="" class="a-button secondary">Book Now</a>
              </div>
            </div>
          </form>
        </div>
        <div class="column-8 lg-offset-2">
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
            <div class="column-8 pt-30">
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
  constructor() {}

  ngOnInit(): void {}
}
