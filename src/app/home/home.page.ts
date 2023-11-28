import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  nombreUsuario: string = '';
  private animation: any; // Cambia el tipo de Animation a any

  constructor(
    private router: Router,
    private alertController: AlertController,
    private navCtrl: NavController,
    private animationCtrl: AnimationController
  ) {}

  ngOnInit() {
    const nomString = localStorage.getItem('nom');
    if (nomString) {
      const nom = JSON.parse(nomString);
      this.nombreUsuario = nom.usuario;
    }
  }

  @ViewChild('animatedCard', { read: ElementRef }) animatedCard: ElementRef | undefined;

  ngAfterViewInit() {
    if (this.animatedCard) {
      this.animation = this.animationCtrl
        .create()
        .addElement(this.animatedCard.nativeElement)
        .duration(4000)
        .iterations(3)
        .keyframes([
          { offset: 0, transform: 'scale(1)' },
          { offset: 0.5, transform: 'scale(0.7)' },
          { offset: 1, transform: 'scale(1)' },
        ]);
    }
  }

  play() {
    this.animation.play();
  }

  pause() {
    this.animation.pause();
  }

  stop() {
    this.animation.stop();
  }


  async salir() {
    const alert = await this.alertController.create({
      header: '¿Seguro que deseas salir?',
      buttons: [
        {
          text: 'No',
          handler: () => {

          }
        },
        {
          text: 'Sí',
          handler: () => {
            localStorage.removeItem('Ingresado');
            this.navCtrl.navigateRoot('/login');
          }
        }
      ]
    });

    await alert.present();
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.animation.play();
    }, 100);
  }

  ionViewWillLeave() {
    if (this.animation) {
      this.animation.stop();
    }
  }
}




