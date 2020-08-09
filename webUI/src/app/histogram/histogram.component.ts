import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.css']
})
export class HistogramComponent implements OnInit {

  data = [0.2, 0.3, 0.4, 0.5, 0 ,0.7, 0.8, 0.6, 0.5, 0.4, 0.3, 0.1, 0.05];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    let url = "http://localhost:8000/data"
    this.http.get(url).subscribe(      
      res => {
        debugger;
        console.log(res);
      }

    );
    console.log(this.data);
  }

}
