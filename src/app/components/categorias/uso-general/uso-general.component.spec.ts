import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsoGeneralComponent } from './uso-general.component';

describe('UsoGeneralComponent', () => {
  let component: UsoGeneralComponent;
  let fixture: ComponentFixture<UsoGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsoGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsoGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
