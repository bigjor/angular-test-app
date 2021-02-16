import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacaDetailComponent } from './placa-detail.component';

describe('PlacaDetailComponent', () => {
  let component: PlacaDetailComponent;
  let fixture: ComponentFixture<PlacaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacaDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
