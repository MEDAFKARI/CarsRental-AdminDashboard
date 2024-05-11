import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreownerlistComponent } from './storeownerlist.component';

describe('StoreownerlistComponent', () => {
  let component: StoreownerlistComponent;
  let fixture: ComponentFixture<StoreownerlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreownerlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreownerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
