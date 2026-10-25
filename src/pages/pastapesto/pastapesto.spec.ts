import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pastapesto } from './pastapesto';

describe('Pastapesto', () => {
  let component: Pastapesto;
  let fixture: ComponentFixture<Pastapesto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pastapesto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pastapesto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
