import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RegistroPage } from './registro.page';

describe('RegistroPage', () => {
  let fixture: ComponentFixture<RegistroPage>;
  let component: RegistroPage;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroPage],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
