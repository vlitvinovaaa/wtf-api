import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DalleComponent } from './dalle.component';

describe('DalleComponent', () => {
  let component: DalleComponent;
  let fixture: ComponentFixture<DalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
