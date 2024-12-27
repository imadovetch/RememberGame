import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxColorComponent } from './box-color.component';

describe('BoxColorComponent', () => {
  let component: BoxColorComponent;
  let fixture: ComponentFixture<BoxColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxColorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoxColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
