import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacasItemComponent } from './placas-item.component';

describe('PlacasItemComponent', () => {
  let component: PlacasItemComponent;
  let fixture: ComponentFixture<PlacasItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacasItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacasItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
