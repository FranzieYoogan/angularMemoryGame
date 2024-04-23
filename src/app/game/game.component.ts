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

    colorsStart() {

      let color1:any = 1;

      let color2:any = 3;

      let color3:any = 2;

      let colorT1 = ""

      let colorT2 = ""

      let colorT3 = ""

     color1 =   Math.floor((Math.random() * 4));

     color2 =   Math.floor((Math.random() * 4));

     color3 =   Math.floor((Math.random() * 4));

        if(color1 == 1) {

          colorT1 = "purple";
          console.log("color1" , colorT1)
        } else if(color1 == 2) {

          colorT1 = "pink";
          console.log("color1" , colorT1)
        

      } else if(color1 == 3) {

        colorT1 = "black";
        console.log("color1" , colorT1)
      }

      if(color2 == 1) {

        colorT2 = "purple";
        console.log("color2" , colorT2)
      } else if(color2 == 2) {

        colorT2 = "pink";
        console.log("color2" , colorT2)
      

    } else if(color2 == 3) {

      colorT2 = "black";
      console.log("color2" , colorT2)
    }



    if(color3 == 1) {

      colorT3 = "purple";
      console.log("color3" , colorT3)
    } else if(color3 == 2) {

      colorT3 = "pink";
      console.log("color3" , colorT3)
    

  } else if(color3 == 3) {

    colorT3 = "black";
    console.log("color3" , colorT3)
  }


    }
  

  


}
