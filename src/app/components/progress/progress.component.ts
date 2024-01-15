import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RoundProgressComponent } from 'angular-svg-round-progressbar';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RoundProgressComponent],
})
export class ProgressComponent {
  constructor() {}

  current1 = 45;
  current2 = 35;
  current3 = 60;
  stroke = 5;
  max = 80;
  radius = 40;
  semicircle = false;
  rounded = false;
  responsive = false;
  clockwise = true;
  color1 = '#F00014';
  color2 = '#FF6E00';
  color3 = '#FFD200';
  background1 = '#F0001433';
  background2 = '#FF6E0033';
  background3 = '#FFD20066';
  animation = 'easeOutCubic';
  animationDelay = 0;
  animations = ['easeOutCubic'];
  gradient = false;
  realCurrent = 0;
  getOverlayStyle() {
    const isSemi = this.semicircle;
    const transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';
    return {
      top: isSemi ? 'auto' : '50%',
      bottom: isSemi ? '5%' : 'auto',
      left: '50%',
      transform,
    };
  }
}
