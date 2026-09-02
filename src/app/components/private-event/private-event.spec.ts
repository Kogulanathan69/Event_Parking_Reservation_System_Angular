import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateEvent } from './private-event';

describe('PrivateEvent', () => {
  let component: PrivateEvent;
  let fixture: ComponentFixture<PrivateEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateEvent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivateEvent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
