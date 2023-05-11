import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoursJumbotronComponent } from './yours-jumbotron.component';

describe('YoursJumbotronComponent', () => {
  let component: YoursJumbotronComponent;
  let fixture: ComponentFixture<YoursJumbotronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoursJumbotronComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoursJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
