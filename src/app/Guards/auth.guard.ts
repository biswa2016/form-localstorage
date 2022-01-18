import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private veri:AuthService){}
  canActivate(){
    if(this.veri.verify()){
      return true
    }else{
      window.alert("you need  login first")
      return false;
    }
    
  }
  
}
