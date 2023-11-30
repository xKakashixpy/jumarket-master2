import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormdietaPage } from './formdieta.page';

describe('FormdietaPage', () => {
  let component: FormdietaPage;
  let fixture: ComponentFixture<FormdietaPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(FormdietaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
