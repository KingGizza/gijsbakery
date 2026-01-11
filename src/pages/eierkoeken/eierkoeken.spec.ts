import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eierkoeken } from './eierkoeken';

describe('Eierkoeken', () => {
  let component: Eierkoeken;
  let fixture: ComponentFixture<Eierkoeken>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eierkoeken]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eierkoeken);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
