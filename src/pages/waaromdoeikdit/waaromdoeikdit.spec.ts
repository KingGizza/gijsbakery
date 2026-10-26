import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Waaromdoeikdit } from './waaromdoeikdit';

describe('Waaromdoeikdit', () => {
  let component: Waaromdoeikdit;
  let fixture: ComponentFixture<Waaromdoeikdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Waaromdoeikdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Waaromdoeikdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
