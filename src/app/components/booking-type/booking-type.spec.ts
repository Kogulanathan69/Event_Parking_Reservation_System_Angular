import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingType } from './booking-type';

describe('BookingType', () => {
  let component: BookingType;
  let fixture: ComponentFixture<BookingType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingType],
    }).compileComponents();

    fixture = TestBed.createComponent(BookingType);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
