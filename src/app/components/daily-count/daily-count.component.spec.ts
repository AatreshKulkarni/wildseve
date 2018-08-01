
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyCountComponent } from './daily-count.component';

describe('DailyCountComponent', () => {
  let component: DailyCountComponent;
  let fixture: ComponentFixture<DailyCountComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
