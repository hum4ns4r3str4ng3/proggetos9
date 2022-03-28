import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompiutiComponent } from './compiuti.component';

describe('CompiutiComponent', () => {
  let component: CompiutiComponent;
  let fixture: ComponentFixture<CompiutiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompiutiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompiutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
