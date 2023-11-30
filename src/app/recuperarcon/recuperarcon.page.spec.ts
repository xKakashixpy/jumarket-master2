import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RecuperarconPage } from './recuperarcon.page';

describe('RecuperarconPage', () => {
  let component: RecuperarconPage;
  let fixture: ComponentFixture<RecuperarconPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(RecuperarconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
