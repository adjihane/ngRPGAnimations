import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from "@angular/animations";
import { bounce, flip, headShake, jello, pulse, rubberBand, shakeX, swing, wobble } from 'ng-animate';
import { lastValueFrom, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger("death", [transition(":increment", useAnimation(shakeX, { params: { timing: 0.5 } })),]),
    trigger("attack", [transition(":increment",
      [useAnimation(jello, { params: { timing: 0.3, scale: 4.5 } }),
      useAnimation(pulse, { params: { timing: 0.3, scale: 4.5 } }),
      ]),]),
    trigger("bounce", [transition(":increment", useAnimation(bounce, { params: { timing: 1 } })),]),
    trigger("shake", [transition(":increment", useAnimation(shakeX, { params: { timing: 0.75 } })),]),
    trigger("flip", [transition(":increment", useAnimation(flip, { params: { timing: 0.75 } })),]),
  ]
})
export class AppComponent {
  slimeIsPresent = false;
  ng_death = 0;
  ng_attack = 0;
  css_hit = false;
  ng_bounce = 0;
  ng_shake = 0;
  ng_flip = 0;
  css_rotatecenter = false;
  css_rotatehortop = false;
  constructor() {
  }

  async BounceShakeFlip() {
    console.log(this.ng_bounce)
    this.ng_bounce++;

    await lastValueFrom(timer(1000))
    this.ng_shake++;

    await lastValueFrom(timer(1000))
    this.ng_flip++;

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
    // TODO Utilisé Animista pour faire une animation différente
    this.css_hit = true;
    setTimeout(() => this.css_hit = false, 0.5 * 1000);
    console.log(this)
  }


  Spin() {
    this.Rotate1();
  }

  Rotate1() {
    this.css_rotatecenter = true;
    setTimeout(() => {
      this.css_rotatecenter = false;
      this.Rotate2();
    }, 1000);
  }

  Rotate2() {
    this.css_rotatehortop = true;
    setTimeout(() => {
      this.css_rotatehortop = false;
      this.Rotate1();
    }, 1000);
  }

}
