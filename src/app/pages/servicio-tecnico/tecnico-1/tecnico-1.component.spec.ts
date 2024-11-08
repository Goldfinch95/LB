import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tecnico1Component } from './tecnico-1.component';

describe('Tecnico1Component', () => {
  let component: Tecnico1Component;
  let fixture: ComponentFixture<Tecnico1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tecnico1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Tecnico1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
