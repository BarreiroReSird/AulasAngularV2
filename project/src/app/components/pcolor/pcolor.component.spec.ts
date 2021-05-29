import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcolorComponent } from './pcolor.component';

describe('PcolorComponent', () => {
  let component: PcolorComponent;
  let fixture: ComponentFixture<PcolorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcolorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
