import { Component, OnInit } from '@angular/core';
import { DressService } from 'src/app/services/dress.service';
import { Dress } from 'src/app/dto/dress';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent implements OnInit {

  id:number;
  clothe : Dress[];
  
  constructor(
    private ds:DressService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.ds.findAll().subscribe(
      c => this.clothe =c
    )
  }

  delete(id){
    this.ds.deleteClothe(id).subscribe(res =>{
      this.clothe=this.clothe.filter(i => i.id !== id);
      console.log('Post deleted successfully');
    })
  }


  
}
