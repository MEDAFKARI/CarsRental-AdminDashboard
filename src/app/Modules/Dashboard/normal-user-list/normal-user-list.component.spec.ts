import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalUserListComponent } from './normal-user-list.component';

describe('NormalUserListComponent', () => {
  let component: NormalUserListComponent;
  let fixture: ComponentFixture<NormalUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalUserListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormalUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
