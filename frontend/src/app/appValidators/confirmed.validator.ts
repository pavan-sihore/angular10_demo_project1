import {FormGroup} from "@angular/forms";

export function mustMatch(controllerName:string, matchingControllerName:string){
    return (formGroup:FormGroup)=>{
        const control = formGroup.controls[controllerName];
        const matchingControl = formGroup.controls[matchingControllerName];

        if(matchingControl.errors && !matchingControl.errors.mustMatch){
            return;
        }

        if(control.value !== matchingControl.value){
            matchingControl.setErrors({ mustMatch: true })
        }else{
            matchingControl.setErrors(null);
        }

    }
}//end mustMatch controller


/*Use example: Html file
<input formControlName="confirmPassword" />
<div *ngif="f.confirmPassword.mustMatch">Passord must match</div>

Component File:
import {mustMatch} from "../appValidators/confirmed.validator";

createForm(){
    this.form = this.formBuilder.group({
        password:['',Validators.required],
        comfirmPassword:['',Validators.required]
    },{
        validator: mustMatch('password','comfirmPassword');
    })
}
*/
