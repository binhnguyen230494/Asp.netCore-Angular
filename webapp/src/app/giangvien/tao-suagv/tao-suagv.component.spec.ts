import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaoSuagvComponent } from './tao-suagv.component';

describe('TaoSuagvComponent', () => {
  let component: TaoSuagvComponent;
  let fixture: ComponentFixture<TaoSuagvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaoSuagvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaoSuagvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
