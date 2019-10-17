import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoSensoresComponent } from './foto-sensores.component';

describe('FotoSensoresComponent', () => {
  let component: FotoSensoresComponent;
  let fixture: ComponentFixture<FotoSensoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotoSensoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoSensoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
