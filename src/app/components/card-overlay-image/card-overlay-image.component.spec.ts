import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOverlayImageComponent } from './card-overlay-image.component';

describe('CardOverlayImageComponent', () => {
  let component: CardOverlayImageComponent;
  let fixture: ComponentFixture<CardOverlayImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardOverlayImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardOverlayImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
