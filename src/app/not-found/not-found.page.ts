import { Component, ElementRef, ViewChildren, ViewChild, OnInit } from '@angular/core';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit {
  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;

  private animation!: Animation;


  constructor(private animationCtrl: AnimationController) {}

  ngOnInit() {
  }

  //Aqui se crea la animacion
  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(750)
      .iterations(Infinity)
      .direction('alternate')
      .fromTo('background', 'yellow', 'var(--background)');
      this.play() 
  }

  
  play() {
    this.animation.play();// Aqui se inicia
  }

}

