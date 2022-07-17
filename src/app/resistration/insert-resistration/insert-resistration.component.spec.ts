import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertResistrationComponent } from './insert-resistration.component';

describe('InsertResistrationComponent', () => {
  let component: InsertResistrationComponent;
  let fixture: ComponentFixture<InsertResistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertResistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertResistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
