import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherContainerComponent } from './father-container.component';

describe('FatherContainerComponent', () => {
  let component: FatherContainerComponent;
  let fixture: ComponentFixture<FatherContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FatherContainerComponent]
    });
    fixture = TestBed.createComponent(FatherContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
