import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ProductAllPage } from './product-all.page';

describe('ProductAllPage', () => {
  let component: ProductAllPage;
  let fixture: ComponentFixture<ProductAllPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(ProductAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
