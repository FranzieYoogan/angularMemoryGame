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

      const answerContainer:any = document.getElementById('answerContainer')

      const start:any = document.getElementById('start')

      setTimeout(() => {

        answerContainer.style.display = "flex";
        start.innerHTML = "RESET COLORS"

      }, 300);
    


      let color1:any = 1;

      let color2:any = 1;

      let color3:any = 1;

      let colorT1 = ""

      let colorT2 = ""

      let colorT3 = ""

      setTimeout(() => {

        color1 =   Math.floor((Math.random() * 4));

        color2 =   Math.floor((Math.random() * 4));
   
        color3 =   Math.floor((Math.random() * 4));

        if(color1 == 1) {

          colorT1 = "purple";
          color11.style.display= "block"
          color11.innerHTML = "purple"
          color11.style.backgroundColor= "purple"
          color11.style.color = "purple"
          console.log("color1" , colorT1)
        } if(color1 == 2) {

          colorT2 = "black";
          color22.style.display= "block"
          color22.innerHTML = "black"
          color22.style.backgroundColor= "black"
          color22.style.color = "black"
          console.log("color1" , colorT1)
        

      } if(color1 == 3) {

        colorT3 = "black";
        color33.style.display= "block"
        color33.innerHTML = "black"
        color33.style.backgroundColor= "black"
        color33.style.color = "black"
        console.log("color1" , colorT1)
      }





      if(color2 == 1) {

        colorT1 = "black";
        color11.style.display= "block"
        color11.innerHTML = "black"
        color11.style.backgroundColor= "black"
        color11.style.color = "black"
        console.log("color2" , colorT2)
      } if(color2 == 2) {

        colorT2 = "pink";
        color22.style.display= "block"
        color22.innerHTML = "pink"
        color22.style.backgroundColor= "pink"
        color22.style.color = "pink"
        console.log("color2" , colorT2)
      

    } if(color2 == 3) {

      colorT3 = "pink";
      color33.style.display= "block"
      color33.innerHTML = "pink"
      color33.style.backgroundColor= "pink"
      color33.style.color = "pink"
      console.log("color2" , colorT2)
    }






    if(color3 == 1) {

      colorT1 = "pink";
      color11.style.display= "block"
      color11.innerHTML = "pink"
      color11.style.color = "pink"
      color11.style.backgroundColor= "pink"
      console.log("color3" , colorT3)
    } if(color3 == 2) {

      colorT2 = "purple";
      color22.style.display= "block"
      color22.innerHTML = "purple"
      color22.style.backgroundColor= "purple"
      color22.style.color = "purple"
      console.log("color3" , colorT3)
    

  } if(color3 == 3) {

    colorT3 = "purple";
    color33.style.display= "block"
    color33.innerHTML = "purple"
    color33.style.backgroundColor= "purple"
    color33.style.color = "purple"
    console.log("color3" , colorT3)
  }
        
      }, 300);






      setTimeout(() => {

        color1 =   Math.floor((Math.random() * 4));

        color2 =   Math.floor((Math.random() * 4));
   
        color3 =   Math.floor((Math.random() * 4));

        if(color1 == 1) {

          colorT1 = "purple";
          color11.style.display= "block"
          color11.innerHTML = "purple"
          color11.style.backgroundColor= "purple"
          color11.style.color = "purple"
          console.log("color1" , colorT1)
        } if(color1 == 2) {

          colorT2 = "black";
          color22.style.display= "block"
          color22.innerHTML = "black"
          color22.style.backgroundColor= "black"
          color22.style.color = "black"
          console.log("color1" , colorT1)
        

      } if(color1 == 3) {

        colorT3 = "black";
        color33.style.display= "block"
        color33.innerHTML = "black"
        color33.style.backgroundColor= "black"
        color33.style.color = "black"
        console.log("color1" , colorT1)
      }





      if(color2 == 1) {

        colorT1 = "black";
        color11.style.display= "block"
        color11.innerHTML = "black"
        color11.style.backgroundColor= "black"
        color11.style.color = "black"
        console.log("color2" , colorT2)
      } if(color2 == 2) {

        colorT2 = "pink";
        color22.style.display= "block"
        color22.innerHTML = "pink"
        color22.style.backgroundColor= "pink"
        color22.style.color = "pink"
        console.log("color2" , colorT2)
      

    } if(color2 == 3) {

      colorT3 = "black";
      color33.style.display= "block"
      color33.innerHTML = "black"
      color33.style.backgroundColor= "black"
      color33.style.color = "black"
      console.log("color2" , colorT2)
    }






    if(color3 == 1) {

      colorT1 = "pink";
      color11.style.display= "block"
      color11.innerHTML = "pink"
      color11.style.color = "pink"
      color11.style.backgroundColor= "pink"
      console.log("color3" , colorT3)
    } if(color3 == 2) {

      colorT2 = "purple";
      color22.style.display= "block"
      color22.innerHTML = "purple"
      color22.style.backgroundColor= "purple"
      color22.style.color = "purple"
      console.log("color3" , colorT3)
    

  } if(color3 == 3) {

    colorT3 = "purple";
    color33.style.display= "block"
    color33.innerHTML = "purple"
    color33.style.backgroundColor= "purple"
    color33.style.color = "purple"
    console.log("color3" , colorT3)
  }
        
      }, 500);



      setTimeout(() => {

        color1 =   Math.floor((Math.random() * 4));

        color2 =   Math.floor((Math.random() * 4));
   
        color3 =   Math.floor((Math.random() * 4));

        if(color1 == 1) {

          colorT1 = "purple";
          color11.style.display= "block"
          color11.innerHTML = "purple"
          color11.style.backgroundColor= "purple"
          color11.style.color = "purple"
          console.log("color1" , colorT1)
        } if(color1 == 2) {

          colorT2 = "pink";
          color22.style.display= "block"
          color22.innerHTML = "pink"
          color22.style.backgroundColor= "pink"
          color22.style.color = "pink"
          console.log("color1" , colorT1)
        

      } if(color1 == 3) {

        colorT3 = "purple";
        color33.style.display= "block"
        color33.innerHTML = "purple"
        color33.style.backgroundColor= "purple"
        color33.style.color = "purple"
        console.log("color1" , colorT1)
      }





      if(color2 == 1) {

        colorT1 = "black";
        color11.style.display= "block"
        color11.innerHTML = "black"
        color11.style.backgroundColor= "black"
        color11.style.color = "black"
        console.log("color2" , colorT2)
      } if(color2 == 2) {

        colorT2 = "purple";
        color22.style.display= "block"
        color22.innerHTML = "purple"
        color22.style.backgroundColor= "purple"
        color22.style.color = "purple"
        console.log("color2" , colorT2)
      

    } if(color2 == 3) {

      colorT3 = "pink";
      color33.style.display= "block"
      color33.innerHTML = "pink"
      color33.style.backgroundColor= "pink"
      color33.style.color = "pink"
      console.log("color2" , colorT2)
    }






    if(color3 == 1) {

      colorT1 = "pink";
      color11.style.display= "block"
      color11.innerHTML = "pink"
      color11.style.color = "pink"
      color11.style.backgroundColor= "pink"
      console.log("color3" , colorT3)
    } if(color3 == 2) {

      colorT2 = "black";
      color22.style.display= "block"
      color22.innerHTML = "black"
      color22.style.backgroundColor= "black"
      color22.style.color = "black"
      console.log("color3" , colorT3)
    

  } if(color3 == 3) {

    colorT3 = "black";
    color33.style.display= "block"
    color33.innerHTML = "black"
    color33.style.backgroundColor= "black"
    color33.style.color = "black"
    console.log("color3" , colorT3)
  }


        
      }, 700);

 

      setTimeout(() => {

        color1 =   Math.floor((Math.random() * 4));

        color2 =   Math.floor((Math.random() * 4));
   
        color3 =   Math.floor((Math.random() * 4));

        if(color1 == 1) {

          colorT1 = "purple";
          color11.style.display= "block"
          color11.innerHTML = "purple"
          color11.style.backgroundColor= "purple"
          color11.style.color = "purple"
          console.log("color1" , colorT1)
        } if(color1 == 2) {

          colorT2 = "purple";
          color22.style.display= "block"
          color22.innerHTML = "purple"
          color22.style.backgroundColor= "purple"
          color22.style.color = "purple"
          console.log("color1" , colorT1)
        

      } if(color1 == 3) {

        colorT3 = "black";
        color33.style.display= "block"
        color33.innerHTML = "black"
        color33.style.backgroundColor= "black"
        color33.style.color = "black"
        console.log("color1" , colorT1)
      }





      if(color2 == 1) {

        colorT1 = "black";
        color11.style.display= "block"
        color11.innerHTML = "black"
        color11.style.backgroundColor= "black"
        color11.style.color = "black"
        console.log("color2" , colorT2)
      } if(color2 == 2) {

        colorT2 = "purple";
        color22.style.display= "block"
        color22.innerHTML = "purple"
        color22.style.backgroundColor= "purple"
        color22.style.color = "purple"
        console.log("color2" , colorT2)
      

    } if(color2 == 3) {

      colorT3 = "pink";
      color33.style.display= "block"
      color33.innerHTML = "pink"
      color33.style.backgroundColor= "pink"
      color33.style.color = "pink"
      console.log("color2" , colorT2)
    }






    if(color3 == 1) {

      colorT1 = "pink";
      color11.style.display= "block"
      color11.innerHTML = "pink"
      color11.style.color = "pink"
      color11.style.backgroundColor= "pink"
      console.log("color3" , colorT3)
    } if(color3 == 2) {

      colorT2 = "black";
      color22.style.display= "block"
      color22.innerHTML = "black"
      color22.style.backgroundColor= "black"
      color22.style.color = "black"
      console.log("color3" , colorT3)
    

  } if(color3 == 3) {

    colorT3 = "purple";
    color33.style.display= "block"
    color33.innerHTML = "purple"
    color33.style.backgroundColor= "purple"
    color33.style.color = "purple"
    console.log("color3" , colorT3)
  }

        
      }, 800);




      setTimeout(() => {

        color1 =   Math.floor((Math.random() * 4));

        color2 =   Math.floor((Math.random() * 4));
   
        color3 =   Math.floor((Math.random() * 4));

        if(color1 == 1) {

          colorT1 = "purple";
          color11.style.display= "block"
          color11.innerHTML = "purple"
          color11.style.backgroundColor= "purple"
          color11.style.color = "purple"
          console.log("color1" , colorT1)
        } if(color1 == 2) {

          colorT2 = "pink";
          color22.style.display= "block"
          color22.innerHTML = "pink"
          color22.style.backgroundColor= "pink"
          color22.style.color = "pink"
          console.log("color1" , colorT1)
        

      } if(color1 == 3) {

        colorT3 = "black";
        color33.style.display= "block"
        color33.innerHTML = "black"
        color33.style.backgroundColor= "black"
        color33.style.color = "black"
        console.log("color1" , colorT1)
      }





      if(color2 == 1) {

        colorT1 = "black";
        color11.style.display= "block"
        color11.innerHTML = "black"
        color11.style.backgroundColor= "black"
        color11.style.color = "black"
        console.log("color2" , colorT2)
      } if(color2 == 2) {

        colorT2 = "purple";
        color22.style.display= "block"
        color22.innerHTML = "purple"
        color22.style.backgroundColor= "purple"
        color22.style.color = "purple"
        console.log("color2" , colorT2)
      

    } if(color2 == 3) {

      colorT3 = "pink";
      color33.style.display= "block"
      color33.innerHTML = "pink"
      color33.style.backgroundColor= "pink"
      color33.style.color = "pink"
      console.log("color2" , colorT2)
    }






    if(color3 == 1) {

      colorT1 = "pink";
      color11.style.display= "block"
      color11.innerHTML = "pink"
      color11.style.color = "pink"
      color11.style.backgroundColor= "pink"
      console.log("color3" , colorT3)
    } if(color3 == 2) {

      colorT2 = "black";
      color22.style.display= "block"
      color22.innerHTML = "black"
      color22.style.backgroundColor= "black"
      color22.style.color = "black"
      console.log("color3" , colorT3)
    

  } if(color3 == 3) {

    colorT3 = "purple";
    color33.style.display= "block"
    color33.innerHTML = "purple"
    color33.style.backgroundColor= "purple"
    color33.style.color = "purple"
    console.log("color3" , colorT3)
  }
        
      }, 1000);


    }
  

  


}
