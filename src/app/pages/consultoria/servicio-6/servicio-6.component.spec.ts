import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicio6Component } from './servicio-6.component';

describe('Servicio6Component', () => {
  let component: Servicio6Component;
  let fixture: ComponentFixture<Servicio6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Servicio6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Servicio6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
