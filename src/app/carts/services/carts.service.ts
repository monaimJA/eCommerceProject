import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private http:HttpClient) {

   }
   addCartItem(Model:any){
    return this.http.post(environment.host+"/carts",Model);
   }
}
