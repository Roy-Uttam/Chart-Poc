import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import Chart from 'chart.js/auto';
import { RoundProgressComponent } from 'angular-svg-round-progressbar';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.page.html',
  styleUrls: ['./charts.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RoundProgressComponent

  ],
})
export class ChartsPage implements OnInit {


  current1 = 45;
  current2 = 35;
  current3 = 60;
  stroke = 5;
  max = 80;
  radius = 70;
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
  animations = [
    'easeOutCubic',
  ];
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


  constructor() {
  }
    public chart: any;
  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'bar',

      data: {
        labels: ['sim', 'MM', 'Electrical'],
        datasets: [
          {
            label: 'OPEN',
            data: ['50', '70', '30', '20', '10', '40', '70', '55'],
            backgroundColor: 'rgba(230, 0, 120, 1)',
            borderRadius: 80,
            barPercentage: 0.7,
            categoryPercentage: 0.5,
          },
          {
            label: 'ONGOING',
            data: ['10', '50', '58', '65', '70', '25', '75', '45'],
            backgroundColor: 'rgba(4, 187, 241, 1)',
            borderRadius: 80,
            barPercentage: 0.7,
            categoryPercentage: 0.5,
          },
          {
            label: 'FINALISED',
            data: ['45', '75', '55', '65', '20', '10', '40', '35'],
            backgroundColor: 'rgba(148, 193, 46, 1)',
            borderRadius: 80,
            barPercentage: 0.7,
            categoryPercentage: 0.5,
          },
        ],
      },

      options: {
        responsive: true,
        aspectRatio: 2.5,

        plugins: {
          legend: {
            display: false,
          },
        },

        scales: {
          y: {
            title: {
              display: true,
              text: 'Assessment',
            },

            border: {
              dash: [5, 5],
              display: false,
            },

            beginAtZero: true,
            min: 0,
            max: 80,
            ticks: {
              stepSize: 20,
            },
          },

          x: {
            grid: {
              display: false,
            },
          },
        },
      },
    });
  }

  ngOnInit(): void {
    this.createChart();
  }

}
