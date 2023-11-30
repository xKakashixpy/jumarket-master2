import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; // Asegúrate de importar el módulo de HttpClient
import { ProductServiceService } from './product-service.service';

describe('ProductServiceService', () => {
  let service: ProductServiceService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], // Importa HttpClientModule
    });
    service = TestBed.inject(ProductServiceService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
