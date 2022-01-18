import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Ruser=localStorage.getItem("Regid")
  Rpass=localStorage.getItem("Regpass")
  luser=localStorage.getItem("logid")
  lpass=localStorage.getItem("logpass")

  constructor() { }

  verify(){
    if(this.Ruser===this.luser && this.Rpass===this.lpass){
      return true
    }else{
      window.alert("invalid user")
      return false
    }
  }
}
