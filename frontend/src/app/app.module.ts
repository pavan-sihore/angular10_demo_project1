import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './manage/auth/auth.module';
import { SharedModule } from './manage/shared/shared.module';
import { HomeComponent } from './front/components/home/home.component';
import { DashboardComponent } from './manage/conponents/dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, HomeComponent],
  imports: [
    BrowserModule, 
    AuthModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule, 
    SharedModule, 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
