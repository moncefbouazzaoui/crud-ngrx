import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterLayout } from './master.component';

describe('MasterComponent', () => {
  let component: MasterLayout;
  let fixture: ComponentFixture<MasterLayout>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterLayout ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
