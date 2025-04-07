import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from "@angular/animations";
import { headShake, jello, pulse, rubberBand, shakeX, swing, wobble } from 'ng-animate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger("death", [transition(":increment", useAnimation(shakeX, { params: { timing: 0.5 } })),]),
    trigger("attack", [transition(":increment",
      [useAnimation(wobble, { params: { timing: 0.3, scale: 4.5 } }),
      useAnimation(pulse, { params: { timing: 0.3, scale: 4.5 } }),
      ]),]),
  ]
})
export class AppComponent {
  slimeIsPresent = false;
  ng_death = 0;
  ng_attack = 0;

  constructor() {
  }

  hideSlime() {
    var element = document.getElementById("slimeyId");
    element?.classList.remove("fadeIn");
    element?.classList.add("fadeOut");
  }

  spawn() {
    this.slimeIsPresent = true;
    // TODO Animation angular avec forwards

    var element = document.getElementById("slimeyId");
    element?.classList.remove("fadeOut");
    element?.classList.add("fadeIn");

    console.log(this)
  }

  death() {
    this.slimeIsPresent = false;
    // TODO Animation angular avec forwards
    this.hideSlime()
    this.ng_death++
    console.log(this.ng_death)
    // TODO 2e animation angular en même temps

  }

  attack() {
    // TODO Jouer une animation et augmenter l'intensité du mouvement avec scale
    // TODO Jouer une autre animation avant
    this.ng_attack++;
    console.log(this)
  }

  hit() {
    // TODO Utilisé Animista pour faire une animation différente avec css (wobble)
  }
}
