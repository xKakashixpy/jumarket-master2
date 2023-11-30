import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';  // Importa ActivatedRoute
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ClienteDetailPage } from './cliente-detail.page';

describe('ClienteDetailPage', () => {
  let component: ClienteDetailPage;
  let fixture: ComponentFixture<ClienteDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteDetailPage],
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
    fixture = TestBed.createComponent(ClienteDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
