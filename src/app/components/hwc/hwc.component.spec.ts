
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { HwcComponent } from './hwc.component';

describe('HwcComponent', () => {
  let component: HwcComponent;
  let fixture: ComponentFixture<HwcComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HwcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HwcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
