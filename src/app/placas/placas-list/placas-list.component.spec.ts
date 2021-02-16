import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacasListComponent } from './placas-list.component';

describe('PlacasListComponent', () => {
  let component: PlacasListComponent;
  let fixture: ComponentFixture<PlacasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacasListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
