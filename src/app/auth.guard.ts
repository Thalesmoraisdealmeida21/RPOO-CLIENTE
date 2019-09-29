import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  
  constructor(private auth: AuthService, private router: Router){}
 canActivate(){
  if(!this.auth.checkSession()){
    this.router.navigateByUrl("login");
    return false;
  }
   return true;
 }
}
