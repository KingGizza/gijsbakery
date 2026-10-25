import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nasigoreng } from './nasigoreng';

describe('Nasigoreng', () => {
  let component: Nasigoreng;
  let fixture: ComponentFixture<Nasigoreng>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nasigoreng]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nasigoreng);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
