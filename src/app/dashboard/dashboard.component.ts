import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { DashboardService } from '../services/dashboard.service';
import {NgChartsModule} from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  clientsPerMonthData: ChartData<'bar'> = {
    labels: [],
    datasets: [{ label: 'Nombre de clients', data: [], backgroundColor: 'rgba(75, 192, 192, 0.6)' }]
  };
  clientsPerMonthOptions: ChartOptions<'bar'> = { responsive: true };

  accountsTypeData: ChartData<'pie'> = {
    labels: [],
    datasets: [{ data: [], backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'] }]
  };

  operationsVolumeData: ChartData<'line'> = {
    labels: [],
    datasets: [
      { label: 'Débit', data: [], borderColor: 'red', fill: false },
      { label: 'Crédit', data: [], borderColor: 'green', fill: false }
    ]
  };
  operationsVolumeOptions: ChartOptions<'line'> = { responsive: true };

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.loadClientsPerMonth();
    this.loadAccountsType();
    this.loadOperationsVolume();
  }

  loadClientsPerMonth() {
    this.dashboardService.getClientsPerMonth().subscribe(data => {
      this.clientsPerMonthData.labels = data.map(d => d.month);
      this.clientsPerMonthData.datasets[0].data = data.map(d => d.count);
    });
  }

  loadAccountsType() {
    this.dashboardService.getAccountsTypeDistribution().subscribe(data => {
      this.accountsTypeData.labels = data.map(d => d.type);
      this.accountsTypeData.datasets[0].data = data.map(d => d.count);
    });
  }

  loadOperationsVolume() {
    this.dashboardService.getOperationsVolume().subscribe(data => {
      this.operationsVolumeData.labels = data.map(d => d.month);
      this.operationsVolumeData.datasets[0].data = data.map(d => d.debit);
      this.operationsVolumeData.datasets[1].data = data.map(d => d.credit);
    });
  }
}
