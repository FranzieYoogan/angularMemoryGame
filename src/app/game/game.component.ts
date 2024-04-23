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

      const color11:any = document.getElementById('color1')

      const color22:any = document.getElementById('color2')

      const color33:any = document.getElementById('color3')


      let color1:any = 1;

      let color2:any = 1;

      let color3:any = 1;

      let colorT1 = ""

      let colorT2 = ""

      let colorT3 = ""

     color1 =   Math.floor((Math.random() * 4));

     color2 =   Math.floor((Math.random() * 4));

     color3 =   Math.floor((Math.random() * 4));

        if(color1 == 1) {

          colorT1 = "purple";
          color11.style.display= "block"
          color11.innerHTML = "purple"
          console.log("color1" , colorT1)
        } if(color1 == 2) {

          colorT1 = "pink";
          color11.style.display= "block"
          color11.innerHTML = "pink"
          console.log("color1" , colorT1)
        

      } if(color1 == 3) {

        colorT1 = "black";
        color11.style.display= "block"
        color11.innerHTML = "black"
        console.log("color1" , colorT1)
      }





      if(color2 == 1) {

        colorT2 = "black";
        color22.style.display= "block"
        color22.innerHTML = "black"
        console.log("color2" , colorT2)
      } if(color2 == 2) {

        colorT2 = "pink";
        color22.style.display= "block"
        color22.innerHTML = "pink"
        console.log("color2" , colorT2)
      

    } if(color2 == 3) {

      colorT2 = "purple";
      color22.style.display= "block"
      color22.innerHTML = "purple"
      console.log("color2" , colorT2)
    }




    

    if(color3 == 1) {

      colorT3 = "pink";
      color33.style.display= "block"
      color33.innerHTML = "pink"
      console.log("color3" , colorT3)
    } if(color3 == 2) {

      colorT3 = "black";
      color33.style.display= "block"
      color33.innerHTML = "purple"
      console.log("color3" , colorT3)
    

  } if(color3 == 3) {

    colorT3 = "purple";
    color33.style.display= "block"
    color33.innerHTML = "black"
    console.log("color3" , colorT3)
  }


    }
  

  


}
