import { Component, OnInit } from '@angular/core';
import {ApiService} from './api.service'

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.css']
})
export class HistogramComponent implements OnInit {
  x_axis_title: string = "hour of day"
  y_axis_title: string = "# of trips"
  data;
  factor: number = 1;
  labels: Array<string> = ["0","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"]
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getData().subscribe(
      res => {
        this.data = res;        
        for (let number of this.data){
          if (number > this.factor) {
            this.factor = number
          }

        }
      }

    );
    
  }

}
