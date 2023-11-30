import { ComponentFixture, TestBed,waitForAsync } from '@angular/core/testing';
import { ProductDetailPage } from './product-detail.page';
import { ActivatedRoute } from '@angular/router';  // Importa ActivatedRoute
import { HttpClientTestingModule } from '@angular/common/http/testing';



describe('ProductDetailPage', () => {
  let component: ProductDetailPage;
  let fixture: ComponentFixture<ProductDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailPage],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1' // Puedes ajustar este valor según tus necesidades
              }
            }
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});










