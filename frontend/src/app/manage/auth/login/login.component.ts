import { AuthResponceData, AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MetaTagsService } from '../../../services/meta-tags.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isLogingMode = true;
  private metaTitle = "Department | Login";
  error: string = null;

  constructor(private authService: AuthService, private router: Router, private _MetaTagsService: MetaTagsService, private token: TokenService) { }

  ngOnInit(): void {
    this._MetaTagsService.updateTitleTag(this.metaTitle);
  }

  onSwithcMode(){
    this.isLogingMode = !this.isLogingMode;
  }

  onSubmit(form: NgForm){
    const username = form.value.username;
    const password = form.value.ups;

    if(!form.valid){
      return;
    }

    let authObs: Observable<AuthResponceData>;

    authObs = this.authService.singIn(username, password);

    authObs.subscribe(
      resData=>{
        //console.log(resData);
        this.handleReponse(resData);
        this.error = null;
        this.router.navigate(['/dashboard']);
      },
      errorMessage=>{
        console.log(errorMessage);
        this.error = errorMessage;
      }
    );

    form.reset();
  }//end onSubmit function

  handleReponse(data){
    this.token.handleToken(data.access_token);
  }//end handleReponse function

}//end export class