import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ClienteEditPage } from './cliente-edit.page';
import { ActivatedRoute } from '@angular/router';  // Importa ActivatedRoute
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ClienteEditPage', () => {
  let component: ClienteEditPage;
  let fixture: ComponentFixture<ClienteEditPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteEditPage],
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
    fixture = TestBed.createComponent(ClienteEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});





