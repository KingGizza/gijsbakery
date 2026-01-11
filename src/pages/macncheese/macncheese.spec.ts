import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Macncheese } from './macncheese';

describe('Macncheese', () => {
  let component: Macncheese;
  let fixture: ComponentFixture<Macncheese>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Macncheese]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Macncheese);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
