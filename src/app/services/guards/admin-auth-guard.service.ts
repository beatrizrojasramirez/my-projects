import { AuthService } from './../auth.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate{

  constructor(private router:Router, private authService:AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    let user = this.authService.currentUser;
    if (user && user.role == "security-admin") return true;    
    this.router.navigate(['/no-access']);
    return false;
  }
}
