import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  room:string
  constructor(private router:ActivatedRoute,
              private cookieService:CookieService) {
   }

  ngOnInit(): void {
     /* Con el activateRoute estamos haciendo referencia a los parametros 
    que angular trae por defecto para acceder a las variables de los parametros */
    this.room = this.router.snapshot.paramMap.get('room')  
    this.cookieService.set('room',this.room)
  }

}
