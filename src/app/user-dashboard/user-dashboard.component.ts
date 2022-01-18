import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  
    value=[
      {name:"rama",department:"UI-developer",hight:5.9,age:23,id:101},
      {name:"lucky",department:"development",hight:5.7,age:27,id:102},
      {name:"yami",department:"development",hight:5.4,age:28,id:103},
      {name:"neha",department:"Testing",hight:5.8,age:23,id:104},
      {name:"seha",department:"Testing",hight:5.7,age:23,id:105},
      {name:"libu",department:"development",hight:5.9,age:23,id:106},
      {name:"jilu",department:"Testing",hight:5.5,age:23,id:107},
      {name:"raj",department:"development",hight:5.6,age:23,id:108},
      {name:"jitu",department:"Testing",hight:5.10,age:23,id:109}

    
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
