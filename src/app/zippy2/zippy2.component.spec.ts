import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zippy2Component } from './zippy2.component';

describe('Zippy2Component', () => {
  let component: Zippy2Component;
  let fixture: ComponentFixture<Zippy2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Zippy2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Zippy2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
