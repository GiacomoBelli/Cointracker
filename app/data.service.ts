import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  result:any;
  constructor(private _http: HttpClient) { }
  getPricesEUR() {
    return this._http.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD,EUR")
      .map(result => this.result = result);
  }
  gethistoricalData(){
    return this._http.get("https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=EUR&limit=6")
    .map(result => this.result=result);
  }
}
