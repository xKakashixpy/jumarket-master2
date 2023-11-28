import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formularioRegistro: FormGroup;

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController
  ) {
    this.formularioRegistro = this.fb.group({
      usuario: ['', Validators.required],
      password: [
        '',
        [
          Validators.minLength(8),
          Validators.required,
          Validators.pattern('^(?=.*[A-Z])(?=.*[a-z]{3})(?=.*\\d{4})[A-Za-z0-9]+$'),
        ],
      ],
      confirmacionPassword: ['', Validators.required],
    }, {
      validators: this.passwordMatchValidator()
    });
  }

  ngOnInit() {}

  async guardar() {
    if (this.formularioRegistro.valid) {
      const formul = this.formularioRegistro.value;

      // Resto del código para guardar el registro si las contraseñas coinciden
      // Por ejemplo, guardar en el almacenamiento local o enviar al servidor
      var nom = {
        usuario: formul.usuario,
        password: formul.password,
      };

      localStorage.setItem('nom', JSON.stringify(nom));

      const alert = await this.alertController.create({
        message: 'Registrado!'
      });
      await alert.present();

      // Navega a la página "Home" después de guardar
      this.navCtrl.navigateRoot('/home');
    } else {
      // Si el formulario no es válido, muestra un mensaje de alerta
      const alert = await this.alertController.create({
        header: 'Atención',
        message: 'Por favor, complete el formulario correctamente.',
        buttons: ['Aceptar']
      });
      await alert.present();
    }
  }

  passwordMatchValidator(): ValidatorFn {
    return (formGroup: AbstractControl) => {
      const password = formGroup.get('password');
      const confirmacionPassword = formGroup.get('confirmacionPassword');

      if (password && confirmacionPassword) {
        if (password.value !== confirmacionPassword.value) {
          confirmacionPassword.setErrors({ passwordMismatch: true });
        } else {
          confirmacionPassword.setErrors(null);
        }
      }

      return null;
    };
  }
}
