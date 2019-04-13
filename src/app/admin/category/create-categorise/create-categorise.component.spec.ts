import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategoriseComponent } from './create-categorise.component';

describe('CreateCategoriseComponent', () => {
  let component: CreateCategoriseComponent;
  let fixture: ComponentFixture<CreateCategoriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCategoriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCategoriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
