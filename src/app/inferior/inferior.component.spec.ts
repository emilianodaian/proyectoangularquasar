import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InferiorComponent } from './inferior.component';

describe('InferiorComponent', () => {
  let component: InferiorComponent;
  let fixture: ComponentFixture<InferiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InferiorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InferiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
