import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service'
import { Router, Params } from '@angular/router';
import { DataService } from '../data.service';
import * as CanvasJS from 'canvasjs.min.js';
import { HttpBackend, HttpHeaderResponse } from '@angular/common/http';
import { animationFrame } from 'rxjs/internal/scheduler/animationFrame';
import { Button, promise } from 'protractor';
import { of, from } from 'rxjs';
import { on } from 'cluster';
import { Money, Currencies } from 'ts-money'
import { CurrencyIndex } from '@angular/common/src/i18n/locale_data';
import { UserComponent } from '../user/user.component';
import { UserService } from '../core/user.service';
import { FirebaseUserModel } from '../core/user.model';
import { userInfo } from 'os';
import { NumericTextboxModule } from 'ngx-numeric-textbox';
import { template } from '@angular/core/src/render3';




@Component({
	selector: 'app-statistics',
	templateUrl: './statistics.component.html',
	styleUrls: ['./statistics.component.scss'],
	
  
    
	

})

export class StatisticsComponent {
	
	objectKeys = Object.keys;
	cryptos: any;
	history: any;
	user: any;
	x:any;
	number:number;
	currencyOn: any;
	newCurrency:any;
	result:any;
	constructor(private _data: DataService, private router: Router, public userService: UserService) { }
	ngOnInit() {
		
		
		this._data.getPricesEUR()
			.subscribe(res => {
				this.cryptos = res;
				console.log(this.cryptos.BTC.EUR);
			});
		this._data.gethistoricalData()
			.subscribe(res => {
				this.history = res;
				let chart = new CanvasJS.Chart("chartContainer", {
					animationEnabled: true,
					exportEnabled: true,
					title: {
						text: "BTC Daily History"
					},
					data: [{
						type: "column",
						dataPoints: [
							{ y: this.history.Data[0].high, label: "Monday" },
							{ y: this.history.Data[1].high, label: "Tuesday" },
							{ y: this.history.Data[2].high, label: "Wednesday" },
							{ y: this.history.Data[3].high, label: "Thursday" },
							{ y: this.history.Data[4].high, label: "Friday" },
							{ y: this.history.Data[5].high, label: "Saturday" },
							{ y: this.history.Data[6].high, label: "Sunday" }
						]
					}]
				});

				chart.render();
			})

			



	}
	BackUser() {
		this.router.navigate(['/user']);
	}
	onClickMe() {
		this.number = document.getElementById("input").value;
		this.currencyOn=document.getElementById("selector").value;
		this.newCurrency=document.getElementById("selector2").value;
		if(this.currencyOn=='EUR'&&this.newCurrency=='BTC'){
			this.result=(this.number/this.cryptos.BTC.EUR);
			console.log(this.result)
			
		}
	  }



}






