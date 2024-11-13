import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tecnico6Component } from './tecnico-6.component';

describe('Tecnico6Component', () => {
  let component: Tecnico6Component;
  let fixture: ComponentFixture<Tecnico6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tecnico6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Tecnico6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
