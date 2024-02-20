import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoFavoriteComponent } from './exo-favorite.component';

describe('ExoFavoriteComponent', () => {
  let component: ExoFavoriteComponent;
  let fixture: ComponentFixture<ExoFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoFavoriteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExoFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
