import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PhotoService } from '../services/photo.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-formdieta',
  templateUrl: './formdieta.page.html',
  styleUrls: ['./formdieta.page.scss'],
})
export class FormdietaPage implements OnInit {
  dietaForm: FormGroup;
  photos: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    public photoService: PhotoService,
    private alertController: AlertController
  ) {
    this.dietaForm = this.formBuilder.group({
      sexo: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(0)]],
      kg: ['', Validators.pattern(/^\d+(\.\d{1,2})?$/)],
      enfermedadesCronicas: [''],
      alergias: [''],
    });
    this.photos = this.photoService.photos;
  }

  ngOnInit() {}

  async enviarFormulario() {
    if (this.dietaForm.valid) {
      console.log(this.dietaForm.value);
  
      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Datos Enviados',
        buttons: ['Aceptar']
      });
      await alert.present();
    } else {
      // Maneja la lógica en caso de que el formulario no sea válido
    }
  }

  async seleccionarImagen() {
    await this.photoService.addNewPhoto();
  }
}
