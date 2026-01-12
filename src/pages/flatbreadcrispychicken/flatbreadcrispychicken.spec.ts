import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Flatbreadcrispychicken } from './flatbreadcrispychicken';

describe('Flatbreadcrispychicken', () => {
  let component: Flatbreadcrispychicken;
  let fixture: ComponentFixture<Flatbreadcrispychicken>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Flatbreadcrispychicken]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Flatbreadcrispychicken);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
