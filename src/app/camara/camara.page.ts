import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  photos: string[] = [];

  constructor(
    private photoService: PhotoService
    ) {
      this.photos = this.photoService.photos;
    }

  ngOnInit() {
  }

  async takePhoto() {// Codigo Youtube
    await this.photoService.addNewPhoto();
  }

}
