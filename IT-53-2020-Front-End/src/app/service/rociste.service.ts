import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ROCISTA_URL, ROCISTE_URL } from "../constants";
import { Rociste } from "../models/rociste";

@Injectable({
    providedIn: 'root'
  })
  export class RocisteService {
  
    constructor(private httpClient:HttpClient) { }
  
    public getRocistaForPredmet(idPredmeta:number):Observable<any>{
      return this.httpClient.get(`${ROCISTA_URL}/${idPredmeta}`);
    }
  
    public getAllRocista():Observable<any>{
      return this.httpClient.get(`${ROCISTE_URL}`);
    }
  
    public addRociste(rociste:Rociste):Observable<any>{
      return this.httpClient.post(`${ROCISTE_URL}`,rociste);
    }
  
    public updateRociste(rociste:Rociste):Observable<any>{
      return this.httpClient.post(`${ROCISTE_URL}/${rociste.id}`,rociste);
    }
  
    public deleteRociste(id:number):Observable<any>{
      return this.httpClient.delete(`${ROCISTE_URL}/${id}`);
    }
  }