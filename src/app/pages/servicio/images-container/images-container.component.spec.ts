import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesContainerComponent } from './images-container.component';

describe('ImagesContainerComponent', () => {
  let component: ImagesContainerComponent;
  let fixture: ComponentFixture<ImagesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagesContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImagesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
