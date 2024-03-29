import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeDateComponent } from './pipe-date.component';

describe('PipeDateComponent', () => {
  let component: PipeDateComponent;
  let fixture: ComponentFixture<PipeDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeDateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipeDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
