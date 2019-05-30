import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './core/auth.guard';
import { AuthService } from './core/auth.service';
import { UserService } from './core/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { DataService } from './data.service';         
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { NumericTextboxModule, NumericTextboxComponent } from 'ngx-numeric-textbox';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, 
    AngularFireAuthModule, 
    HttpClientModule,
    
   
   
    
  ],
  providers: [AuthService, UserService, UserResolver, AuthGuard,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
