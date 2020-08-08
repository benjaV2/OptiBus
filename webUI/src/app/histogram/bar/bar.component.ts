import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  @Input() barHeight;
  constructor() { }

  ngOnInit() {
    console.log("BAR!");
    console.log(this.barHeight);
  }

}
