import { Component, OnInit, Input } from '@angular/core';
import { DressService } from '../services/dress.service';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styles: [
  ]
})
export class ClothesComponent implements OnInit {

  @Input()
  dressService:DressService
  constructor() { }

  ngOnInit(): void {
  }

}
