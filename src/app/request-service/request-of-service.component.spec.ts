import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestOfServiceComponent } from './request-of-service.component';

describe('RequestOfServiceComponent', () => {
  let component: RequestOfServiceComponent;
  let fixture: ComponentFixture<RequestOfServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestOfServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestOfServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
