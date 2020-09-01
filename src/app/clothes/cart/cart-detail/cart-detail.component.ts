import { Component, OnInit, Input } from '@angular/core';
import { DressService } from 'src/app/services/dress.service';
import {  ActivatedRoute } from '@angular/router';
import { Dress } from 'src/app/dto/dress';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styles: [
  ]
})
export class CartDetailComponent implements OnInit {


  dress:Dress;

  constructor(
    public ds: DressService,
    private route: ActivatedRoute
   ) { 
     
   }
  
   ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => {
        let id = params['id'];
        return this.ds.findById(+id)
      })
    ).subscribe(
      dress => this.dress = dress
    )
    
  }


}
