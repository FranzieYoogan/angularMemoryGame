import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {




ngOnInit(): void {

  const anchor:any = document.getElementById('anchor')
  const logout:any = document.getElementById('logout')


    if(window.location.href == "http://localhost:4200/") {

    anchor.href = "http://localhost:4200/"
    
  
    }
    
    if(window.location.href == "http://localhost:4200/game") {

    logout.style.display = 'block'
 
  
      anchor.href = "http://localhost:4200/game"

    }
  

  }

  logout() {

    window.location.href = "http://localhost:4200"

    localStorage.removeItem("user");

  }



}
