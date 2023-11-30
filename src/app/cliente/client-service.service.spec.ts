import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ClientServiceService } from './client-service.service';

describe('ClientServiceService', () => {
  let service: ClientServiceService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ClientServiceService], // Agrega el servicio como un proveedor
    });
    service = TestBed.inject(ClientServiceService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a method that performs a certain functionality', () => {
    // Agrega pruebas específicas para métodos del servicio si es necesario
    // Ejemplo: expect(service.miMetodo()).toBeAlgo();
  });
});
