import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperarcon',
  templateUrl: './recuperarcon.page.html',
  styleUrls: ['./recuperarcon.page.scss'],
})
export class RecuperarconPage implements OnInit {

  formularioRecuperarcon: FormGroup;

  constructor(public fb: FormBuilder, private router: Router, private alertController: AlertController) { 
    this.formularioRecuperarcon = this.fb.group({
    'email': new FormControl("", [Validators.required, Validators.email])
  });
  }
  ngOnInit() {
  }

async enviarFormulario(){
  if (this.formularioRecuperarcon.controls['email'].valid) {
    this.router.navigate(['/login']);
  }else{
    const alert=await this.alertController.create({
      header:'¡AVISO!',
      message:'El correo no es valido',
      buttons:['Cerrar']
    });
    await alert.present();
  }
}


}

