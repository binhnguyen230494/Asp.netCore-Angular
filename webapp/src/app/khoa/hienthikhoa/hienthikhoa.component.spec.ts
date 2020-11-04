import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HienthikhoaComponent } from './hienthikhoa.component';

describe('HienthikhoaComponent', () => {
  let component: HienthikhoaComponent;
  let fixture: ComponentFixture<HienthikhoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HienthikhoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HienthikhoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
