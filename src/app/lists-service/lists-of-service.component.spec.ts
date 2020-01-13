import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsOfServiceComponent } from './lists-of-service.component';

describe('ListsOfServiceComponent', () => {
  let component: ListsOfServiceComponent;
  let fixture: ComponentFixture<ListsOfServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsOfServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsOfServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
