import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cupcakes } from './cupcakes';

describe('Cupcakes', () => {
  let component: Cupcakes;
  let fixture: ComponentFixture<Cupcakes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cupcakes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cupcakes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
