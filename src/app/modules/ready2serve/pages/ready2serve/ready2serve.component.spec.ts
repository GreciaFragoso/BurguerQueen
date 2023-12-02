import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ready2serveComponent } from './ready2serve.component';

describe('Ready2serveComponent', () => {
  let component: Ready2serveComponent;
  let fixture: ComponentFixture<Ready2serveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ready2serveComponent]
    });
    fixture = TestBed.createComponent(Ready2serveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
