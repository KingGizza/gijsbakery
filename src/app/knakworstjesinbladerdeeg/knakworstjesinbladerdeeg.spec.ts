import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Knakworstjesinbladerdeeg } from './knakworstjesinbladerdeeg';

describe('Knakworstjesinbladerdeeg', () => {
  let component: Knakworstjesinbladerdeeg;
  let fixture: ComponentFixture<Knakworstjesinbladerdeeg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Knakworstjesinbladerdeeg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Knakworstjesinbladerdeeg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
