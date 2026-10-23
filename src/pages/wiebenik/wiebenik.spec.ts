import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wiebenik } from './wiebenik';

describe('Wiebenik', () => {
  let component: Wiebenik;
  let fixture: ComponentFixture<Wiebenik>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wiebenik]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wiebenik);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
