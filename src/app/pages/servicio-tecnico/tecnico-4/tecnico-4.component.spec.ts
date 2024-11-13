import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tecnico4Component } from './tecnico-4.component';

describe('Tecnico4Component', () => {
  let component: Tecnico4Component;
  let fixture: ComponentFixture<Tecnico4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tecnico4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Tecnico4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
