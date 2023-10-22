import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoatsPage } from './boats.page';

describe('BoatsPage', () => {
  let component: BoatsPage;
  let fixture: ComponentFixture<BoatsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BoatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
