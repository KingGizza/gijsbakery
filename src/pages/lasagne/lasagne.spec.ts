import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lasagne } from './lasagne';

describe('Lasagne', () => {
  let component: Lasagne;
  let fixture: ComponentFixture<Lasagne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lasagne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lasagne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
