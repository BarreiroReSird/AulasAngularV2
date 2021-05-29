import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcolorComponent } from './fcolor.component';

describe('FcolorComponent', () => {
  let component: FcolorComponent;
  let fixture: ComponentFixture<FcolorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FcolorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FcolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
