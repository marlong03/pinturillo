import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
    {
     path:":room", //:room - nombre de la variable para que pueda cambiar / sala1, sala2 etc
    component:RoomComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
