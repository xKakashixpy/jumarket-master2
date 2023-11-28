import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormdietaPage } from './formdieta.page';

describe('FormdietaPage', () => {
  let component: FormdietaPage;
  let fixture: ComponentFixture<FormdietaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormdietaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
