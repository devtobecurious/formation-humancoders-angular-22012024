import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowGameComponent } from './row-game.component';

describe('RowGameComponent', () => {
  let component: RowGameComponent;
  let fixture: ComponentFixture<RowGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RowGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
