import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dress } from 'src/app/dto/dress';
import { DressService } from 'src/app/services/dress.service';
import { Router } from '@angular/router';
import { UploadService } from 'src/app/services/upload.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-new-clothe',
  templateUrl: './new-clothe.component.html',
  styles: [
  ]
})
export class NewClotheComponent implements OnInit {

  clothe : Dress[]=[];
  clotheform : FormGroup;
  constructor(fb:FormBuilder,private ds:DressService,private router: Router, private uploadService: UploadService) {
    this.clotheform=fb.group({
      'name':['',Validators.required],
       'color':['',Validators.required],
        'size':[''],
        'price':[0,[Validators.required,Validators.min(1000),Validators.max(50000)]],
        'type':['',Validators.required],
        'madeby':['',Validators.required],
        'buyingdate':['']
    })
   }

  ngOnInit(): void {
  }

  get name(){
    return this.clotheform.get('name');
  }
  get color(){
    return this.clotheform.get('color');
  }
  get size(){
    return this.clotheform.get('size');
  }
  get price(){
    return this.clotheform.get('price');
  }
  get type(){
    return this.clotheform.get('type');
  }
  get madeby(){
    return this.clotheform.get('madeby');
  }
  get image(){
    return this.clotheform.get('image');
  }

  get buyingdate(){
    return this.clotheform.get('buyingdate');
  }


  save(file: File){
    //let d = new Dress();

    // d.name=this.clotheform.get('name').value;
    // d.color=this.clotheform.get('color').value;
    // d.price=this.clotheform.get('price').value;
    // d.type=this.clotheform.get('type').value;
    // d.madeby=this.clotheform.get('madeby').value;
    // d.size=this.clotheform.get('size').value;
    // d.buyingdate=this.clotheform.get('buyingdate').value;    
    
    this.uploadService.upload(file).pipe(
      switchMap(photo => {
        let clothe = this.clotheform.value;
        clothe.image = photo;
        return this.ds.save(clothe)
      })
    ).subscribe(next => {
      this.clotheform.reset();
      this.router.navigate(['/clothes'])
    })
  }

  cancle(){
    this.clotheform.reset();
    this.router.navigate(['/']);
  }

  delete(id){
    this.ds.deleteClothe(id).subscribe(res =>{
      this.clothe=this.clothe.filter(i => i.id !== id);
      console.log('Post deleted successfully');
    })
  }

}
