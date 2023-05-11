import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentlyMarketComponent } from './currently-market.component';

describe('CurrentlyMarketComponent', () => {
  let component: CurrentlyMarketComponent;
  let fixture: ComponentFixture<CurrentlyMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentlyMarketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentlyMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
