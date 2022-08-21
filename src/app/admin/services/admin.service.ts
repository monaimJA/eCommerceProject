import { environment } from './../../../environments/environment.prod';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private Http:HttpClient) { }
  getCart(params?:any){
    let param=new HttpParams();
    param.append("startdate",params?.start).append("enddate",params?.end);
    return this.Http.get(environment.host+"/carts",{params:param});
  }
  deleteCart(id:any){
    return this.Http.delete(environment.host+"/carts/"+id);
  }
}
