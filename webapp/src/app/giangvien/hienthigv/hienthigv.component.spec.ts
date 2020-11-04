import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HienthigvComponent } from './hienthigv.component';

describe('HienthigvComponent', () => {
  let component: HienthigvComponent;
  let fixture: ComponentFixture<HienthigvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HienthigvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HienthigvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
