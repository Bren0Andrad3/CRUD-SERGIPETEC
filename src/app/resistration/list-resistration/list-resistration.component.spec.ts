import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResistrationComponent } from './list-resistration.component';

describe('ListResistrationComponent', () => {
  let component: ListResistrationComponent;
  let fixture: ComponentFixture<ListResistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListResistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListResistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
