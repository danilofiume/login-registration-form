import { Component } from '@angular/core';

// importare questi 
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { IUser } from '../../shared/models/user.model';
import { Router } from '@angular/router';

// validators per gestire le validita di formcontrol

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
// form con ReactiveFormModule

constructor(private authService: AuthService, private router: Router){}


// creare un istanza, vuole per forza un argomento, un oggetto vuole 
loginForm = new FormGroup(
 {
  // bisogna assegnare ad ogni campo formControl

  // formControl accetta come prima valore um tipo di placeholder, il secondo un array dove dentro andiamo am mettere tutti i tipi di validatori semplici, come terzo un array con validatori asincroni
  email: new FormControl('',[Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],[]),
  password: new FormControl('',[Validators.required],[])
 }
);

// collegare il sumbit

onLogin(){
  console.log(this.loginForm);
  this.authService.login(this.loginForm.value as IUser)
  .subscribe((response)=> {
    console.log(response);
    localStorage.setItem('token', response.accessToken)
    this.router.navigate(['dashboard']);
  })
  
}
}
