import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaLoginComponentComponent } from './ruta-login-component.component';

describe('RutaLoginComponentComponent', () => {
  let component: RutaLoginComponentComponent;
  let fixture: ComponentFixture<RutaLoginComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaLoginComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaLoginComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
