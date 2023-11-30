import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; // Asegúrate de importar el módulo de HttpClient
import { ClienteListPage } from './cliente-list.page';

describe('ClienteListPage', () => {
  let component: ClienteListPage;
  let fixture: ComponentFixture<ClienteListPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteListPage],
      imports: [HttpClientModule], // Importa HttpClientModule
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
