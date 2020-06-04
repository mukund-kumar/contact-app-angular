import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortContactComponent } from './sort-contact.component';

describe('SortContactComponent', () => {
  let component: SortContactComponent;
  let fixture: ComponentFixture<SortContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
