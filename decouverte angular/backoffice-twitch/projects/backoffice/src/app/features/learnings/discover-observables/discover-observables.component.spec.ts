import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverObservablesComponent } from './discover-observables.component';

describe('DiscoverObservablesComponent', () => {
  let component: DiscoverObservablesComponent;
  let fixture: ComponentFixture<DiscoverObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoverObservablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscoverObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
