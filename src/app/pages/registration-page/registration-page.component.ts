import { Component } from '@angular/core';
// importare questi 
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { repeatPasswordValidator } from '../../shared/validators/repeat-password.validator';
import { AuthService } from '../../services/auth.service';
import { IUser } from '../../shared/models/user.model';
import { Router } from '@angular/router';


// possiamo anche tipizzare il nostro form per evitare errori

interface IRegistration {
  email: FormControl<string>;
  password: FormControl<string>;
  repeatPassword: FormControl<string>;

}

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.css'
})
export class RegistrationPageComponent {


  constructor(private authService: AuthService, private router: Router){}


// creare un istanza, vuole per forza un argomento, un oggetto vuole 
registrationForm = new FormGroup<IRegistration>(
  {
   // bisogna assegnare ad ogni campo formControl
 
   // formControl accetta come prima valore um tipo di placeholder, il secondo un array dove dentro andiamo am mettere tutti i tipi di validatori semplici, come terzo un array con validatori asincroni
   email: new FormControl('',[Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],[]),
   password: new FormControl('',[Validators.required],[]),
   repeatPassword: new FormControl('',[Validators.required],[])
  }, 
  // qui andiamo ad inserire il validatore custom che abbiamo creato nel file shared, bisogna solo passarlo
  [repeatPasswordValidator]);
 
 // collegare il sumbit
 
 onRegistration(){
   console.log(this.registrationForm);
   const user: IUser = {
    email: this.registrationForm.get('email').value,
    password: this.registrationForm.get('password').value,
   }
   this.authService.registration(user).subscribe((response)=>{

    console.log(response);
    this.router.navigate(['auth', 'login'])
    
   })
   
 }
}
