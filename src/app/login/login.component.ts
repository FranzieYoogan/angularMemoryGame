import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {



    private apiUrl = "http://localhost:3000/user_memory"

    private http= inject(HttpClient)

  data:any

  ngOnInit(): void {


  
  }

  submit() {

    const email:any = document.getElementById('email');
    const password:any = document.getElementById('password');
    const logged:any = document.getElementById('logged');
    const error:any = document.getElementById('error');
    
    this.http.get(this.apiUrl).subscribe((response) => {
      console.log(response);
      this.data = response;

    });

    for(let z = 0; z<= this.data.length; z++) {

  

      if(email.value == this.data[z].user_email  && password.value == this.data[z].user_password ) {
   
        console.log(this.data[z].user_email)
        logged.style.display = 'block'
  
    } else {

      console.log("error")
      error.style.display = "block"

    }

  }


    }

    



}

