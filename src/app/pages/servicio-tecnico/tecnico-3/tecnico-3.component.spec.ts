import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tecnico3Component } from './tecnico-3.component';

describe('Tecnico3Component', () => {
  let component: Tecnico3Component;
  let fixture: ComponentFixture<Tecnico3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tecnico3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Tecnico3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
