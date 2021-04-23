import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTravelFormComponent } from './hero-travel-form.component';

describe('HeroTravelFormComponent', () => {
  let component: HeroTravelFormComponent;
  let fixture: ComponentFixture<HeroTravelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroTravelFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTravelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
