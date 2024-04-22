import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent implements OnInit {

  private isLocalStorageAvailable = typeof localStorage !== 'undefined';

  ngOnInit(): void {

    const localstorage:any = document.getElementById('localstorage')

    if(this.isLocalStorageAvailable) {

      const user:any = localStorage.getItem('user')

      localstorage.innerHTML = `WELCOME ${user}`
    }




    }
  

  


}
