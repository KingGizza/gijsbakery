import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maurice } from './maurice';

describe('Maurice', () => {
  let component: Maurice;
  let fixture: ComponentFixture<Maurice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Maurice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Maurice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
