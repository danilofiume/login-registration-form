import { AbstractControl, ValidationErrors } from "@angular/forms";

// null quando la validazione e okei
// key: value quando la validazione e ko
 export const repeatPasswordValidator = (form: AbstractControl): null | ValidationErrors => {
    
    // con get prendiamo il valore dei due campi 
    const passwordValue = form.get('password').value
    const repeatPasswordValue = form.get('repeatPassword').value

    if(passwordValue == repeatPasswordValue){
        return null
    } else { 
        return {repeatPassword: true}
     }
    
}