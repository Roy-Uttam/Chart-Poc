import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-findings',
  templateUrl: './findings.component.html',
  styleUrls: ['./findings.component.scss'],
  standalone:true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
})
export class FindingsComponent {

  constructor() { }

}
