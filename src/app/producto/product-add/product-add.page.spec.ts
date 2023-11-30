import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ProductAddPage } from './product-add.page';
import { ActivatedRoute } from '@angular/router';  // Importa ActivatedRoute
import { HttpClientTestingModule } from '@angular/common/http/testing';





describe('ProductAddPage', () => {
  let component: ProductAddPage;
  let fixture: ComponentFixture<ProductAddPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductAddPage],
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
    fixture = TestBed.createComponent(ProductAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});















