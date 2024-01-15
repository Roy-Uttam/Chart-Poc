import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-asset-cards',
  templateUrl: './asset-cards.component.html',
  styleUrls: ['./asset-cards.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
})
export class AssetCardsComponent  {
  constructor() {}

}
