import { ComponentFixture, TestBed,waitForAsync } from '@angular/core/testing';
import { ClienteAddPage } from './cliente-add.page';
import { ActivatedRoute } from '@angular/router';  // Importa ActivatedRoute
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ClienteAddPage', () => {
  let component: ClienteAddPage;
  let fixture: ComponentFixture<ClienteAddPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteAddPage],
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
    fixture = TestBed.createComponent(ClienteAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});





