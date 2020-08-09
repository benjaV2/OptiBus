import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.css']
})
export class HistogramComponent implements OnInit {

  data;
  factor = 1;
  labels = ["0","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"]
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // const headers = new HttpHeaders()
    //   .append('Content-Type', 'application/json')
    //   .append('Access-Control-Allow-Headers', 'Content-Type')
    //   .append('Access-Control-Allow-Methods', 'GET')
    //   .append('Access-Control-Allow-Origin', '*');
    
    let url = "http://benja.com:8000/data"
    this.http.get(url).subscribe(
      res => {
        //debugger;
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
