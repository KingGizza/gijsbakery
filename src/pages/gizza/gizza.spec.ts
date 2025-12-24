import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gizza } from './gizza';

describe('Gizza', () => {
  let component: Gizza;
  let fixture: ComponentFixture<Gizza>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gizza]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gizza);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
