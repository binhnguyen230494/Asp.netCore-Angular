import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaoSuakhoaComponent } from './tao-suakhoa.component';

describe('TaoSuakhoaComponent', () => {
  let component: TaoSuakhoaComponent;
  let fixture: ComponentFixture<TaoSuakhoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaoSuakhoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaoSuakhoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
