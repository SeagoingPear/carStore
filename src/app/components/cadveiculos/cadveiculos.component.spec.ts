import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadveiculosComponent } from './cadveiculos.component';

describe('CadveiculosComponent', () => {
  let component: CadveiculosComponent;
  let fixture: ComponentFixture<CadveiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadveiculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadveiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
