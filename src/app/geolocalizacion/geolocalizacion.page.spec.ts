import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GeolocalizacionPage } from './geolocalizacion.page';

describe('GeolocalizacionPage', () => {
  let component: GeolocalizacionPage;
  let fixture: ComponentFixture<GeolocalizacionPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(GeolocalizacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
