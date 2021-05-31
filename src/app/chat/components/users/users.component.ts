import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  name1:string ='Irine';
  text1:string= 'Irine is online';
  src1:string = 'assets/image/avatar.png';

  name2:string ='Santhosh sathyan';
  text2:string= 'Santhosh sathyan is online';
  src4:string = 'assets/image/avatar4.png';

  constructor() {
   
  }

  ngOnInit(): void {
  }

  
} 
