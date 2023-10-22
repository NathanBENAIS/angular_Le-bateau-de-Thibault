import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SingleBoatPage } from './single-boat.page';

describe('SingleBoatPage', () => {
  let component: SingleBoatPage;
  let fixture: ComponentFixture<SingleBoatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SingleBoatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
