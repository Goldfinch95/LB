import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselButtonElementComponent } from './carrousel-button-element.component';

describe('CarrouselButtonElementComponent', () => {
  let component: CarrouselButtonElementComponent;
  let fixture: ComponentFixture<CarrouselButtonElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrouselButtonElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrouselButtonElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
