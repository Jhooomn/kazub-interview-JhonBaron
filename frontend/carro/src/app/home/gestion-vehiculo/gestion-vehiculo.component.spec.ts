import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionVehiculoComponent } from './gestion-vehiculo.component';

describe('GestionVehiculoComponent', () => {
  let component: GestionVehiculoComponent;
  let fixture: ComponentFixture<GestionVehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionVehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
