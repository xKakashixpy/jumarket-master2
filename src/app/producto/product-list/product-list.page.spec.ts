import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; // Asegúrate de importar el módulo de HttpClient
import { ProductListPage } from './product-list.page';

describe('ProductListPage', () => {
  let component: ProductListPage;
  let fixture: ComponentFixture<ProductListPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListPage],
      imports: [HttpClientModule], // Importa HttpClientModule
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
