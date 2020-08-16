import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideCartComponent } from './side-cart.component';

describe('SideCartComponent', () => {
  let component: SideCartComponent;
  let fixture: ComponentFixture<SideCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
