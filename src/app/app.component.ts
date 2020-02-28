import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'votre caisse enregistreuse';
  login;

  constructor(private router : Router){}

  connexion(){
    if (this.login == "kalons") {
      //permet de cacher la partie haute de la page de connecion
      document.getElementById('login-container').style.visibility = 'hidden';
      document.getElementById('login-container').style.height = '0px';
      this.router.navigate(['/home']);
    }
  }

}
