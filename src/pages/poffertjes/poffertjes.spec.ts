import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Poffertjes } from './poffertjes';

describe('Poffertjes', () => {
  let component: Poffertjes;
  let fixture: ComponentFixture<Poffertjes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Poffertjes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Poffertjes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
