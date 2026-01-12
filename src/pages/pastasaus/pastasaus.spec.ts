import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pastasaus } from './pastasaus';

describe('Pastasaus', () => {
  let component: Pastasaus;
  let fixture: ComponentFixture<Pastasaus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pastasaus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pastasaus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
