import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateResistrationComponent } from './update-resistration.component';

describe('UpdateResistrationComponent', () => {
  let component: UpdateResistrationComponent;
  let fixture: ComponentFixture<UpdateResistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateResistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateResistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
