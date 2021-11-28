import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadclientesComponent } from './cadclientes.component';

describe('CadclientesComponent', () => {
  let component: CadclientesComponent;
  let fixture: ComponentFixture<CadclientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadclientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
