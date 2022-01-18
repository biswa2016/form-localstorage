import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-registrstion',
  templateUrl: './registrstion.component.html',
  styleUrls: ['./registrstion.component.css']
})
export class RegistrstionComponent implements OnInit {

  constructor() { }

  register(regi:NgForm){

    localStorage.setItem('Regid',regi.value.uid)
    localStorage.setItem('Regpass',regi.value.upass)
    window.alert("Data submit")
    console.log(regi.value);
    
  }

  ngOnInit(): void {
  }

}
