import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodaListComponent } from './boda-list.component';

describe('BodaListComponent', () => {
  let component: BodaListComponent;
  let fixture: ComponentFixture<BodaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
