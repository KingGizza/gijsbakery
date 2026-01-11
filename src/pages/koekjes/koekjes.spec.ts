import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Koekjes } from './koekjes';

describe('Koekjes', () => {
  let component: Koekjes;
  let fixture: ComponentFixture<Koekjes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Koekjes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Koekjes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
