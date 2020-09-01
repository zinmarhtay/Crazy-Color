import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DRESS_API, BASE_API } from '../common/api-const';
import { Dress } from '../dto/dress';
import { $ } from 'protractor';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class DressService {

  private _dress: Dress[];
  constructor(private http:HttpClient) {
    this.findAll().subscribe(
      data=>this._dress =data
    )
  }
   
  findAll(){
   return this.http.get<Dress[]>(DRESS_API);
  }

  save(dress: Dress){
    return this.http.post(DRESS_API,dress);
  }

  findById(id):Observable<any>{
    return this.http.get(`${DRESS_API}/${id}`)
    .pipe(
      catchError(this.errorHandler)
    )

  // return this._dress.find(p=>p.id ===id )
  }

  deleteClothe(id:number){
    return this.http.delete(DRESS_API+'/'+id);
   // return this.http.delete<Dress>(`${BASE_API}/dress/${id}`);
  }

  find(id): Observable<any> {
    return this.http.get<Dress>(DRESS_API + '/clothes/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
