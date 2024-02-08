import { Component, OnInit } from '@angular/core';
import { ApexChart, ApexDataLabels, ApexNonAxisChartSeries, ApexTitleSubtitle } from 'ng-apexcharts';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  chartSeries: ApexNonAxisChartSeries = [40,25,10,8,10];

  chartDetails: ApexChart = {
    type: 'pie',
    toolbar: {
      show: true
    }
  };

  chartLabels = ["PHP", "MYSQL", "AWS", "PYTHON","ANGULAR"];

  chartTitle: ApexTitleSubtitle = {
    text: 'Habilidades',
    align: 'center'
  };

  chartDataLabels: ApexDataLabels = {
    enabled: true
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
