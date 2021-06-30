import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destinations-list',
  template: `
    <section class="destinations-list-container">
      <div class="row">
        <div class="column-20 offset-3">
          <div class="destinations-list-title">
            <h1>Top Popular Destinations</h1>
          </div>
        </div>

        <div class="column-11 offset-1 destinations-item">
          <div class="row">
            <div class="column-11">
              <img
                src="https://www.le-voyage-autrement.com/public/img/upload/gallery/agency/829/img-2020-06-18-09-53-22-anakao.jpg"
                alt=""
              />
            </div>
            <div class="column-11 offset-1">
              <h2>Valle Aurina</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                illo, sapiente quasi molestiae in adipisci laborum nam tenetur
                ad aliquam praesentium, voluptatum aspernatur ipsum voluptate
                earum? Facere pariatur suscipit autem?
              </p>
            </div>
          </div>
        </div>
        <div class="column-11 offset-1 destinations-item">
          <div class="row">
            <div class="column-11">
              <img
                src="https://www.le-voyage-autrement.com/public/img/upload/gallery/agency/829/img-2020-06-18-09-53-22-anakao.jpg"
                alt=""
              />
            </div>
            <div class="column-11 offset-1">
              <h2>Valle Aurina</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                illo, sapiente quasi molestiae in adipisci laborum nam tenetur
                ad aliquam praesentium, voluptatum aspernatur ipsum voluptate
                earum? Facere pariatur suscipit autem?
              </p>
            </div>
          </div>
        </div>
        <div class="column-11 offset-1 destinations-item">
          <div class="row">
            <div class="column-11">
              <img
                src="https://www.le-voyage-autrement.com/public/img/upload/gallery/agency/829/img-2020-06-18-09-53-22-anakao.jpg"
                alt=""
              />
            </div>
            <div class="column-11 offset-1">
              <h2>Valle Aurina</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                illo, sapiente quasi molestiae in adipisci laborum nam tenetur
                ad aliquam praesentium, voluptatum aspernatur ipsum voluptate
                earum? Facere pariatur suscipit autem?
              </p>
            </div>
          </div>
        </div>
        <div class="column-11 offset-1 destinations-item">
          <div class="row">
            <div class="column-11">
              <img
                src="https://www.le-voyage-autrement.com/public/img/upload/gallery/agency/829/img-2020-06-18-09-53-22-anakao.jpg"
                alt=""
              />
            </div>
            <div class="column-11 offset-1">
              <h2>Valle Aurina</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                illo, sapiente quasi molestiae in adipisci laborum nam tenetur
                ad aliquam praesentium, voluptatum aspernatur ipsum voluptate
                earum? Facere pariatur suscipit autem?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class DestinationsListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
