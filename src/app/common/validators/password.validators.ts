import { AbstractControl, ControlContainer, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";

export class PasswordValidators{
    static cannotContainSpace(control:AbstractControl):ValidationErrors | null{
        if ((control.value as String).indexOf(' ') >= 0)
            return {cannotContainSpace : true};
        return null;
    }
    static passwordMustMatch(control:AbstractControl): ValidationErrors | null{
        const password = control.get('newPassword')?.value;
        const confirmation = control.get('confirmPassword')?.value;
        if (password != confirmation)
            return {passwordMustMatch :true }
        return null
    }
    
    /* The following function simulates a call to the server to validate that the previous password is the current one using an asynchronous operation*/
    static validCurrentPassword(control:AbstractControl): Promise<ValidationErrors | null>|Observable<ValidationErrors|null>{
        /* Adding a timeout so the app won't block until the server sends a response*/
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                if (control.value != 'abc123' )
                    resolve( {validCurrentPassword:true});
                else
                    resolve(null);
            }, 2000);
        });
    }
}