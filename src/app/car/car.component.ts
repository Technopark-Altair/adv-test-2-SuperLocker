import { Component,Input, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car.model';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input() carInput: Car;

  constructor(){ }

  ngOnInit(): void {
    
  }

}
