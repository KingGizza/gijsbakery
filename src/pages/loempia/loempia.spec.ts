import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loempia } from './loempia';

describe('Loempia', () => {
  let component: Loempia;
  let fixture: ComponentFixture<Loempia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loempia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loempia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
