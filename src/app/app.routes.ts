import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GameComponent } from './game/game.component';

export const routes: Routes = [

    { path: '', component: LoginComponent },
    { path: 'game', component: GameComponent },
];
