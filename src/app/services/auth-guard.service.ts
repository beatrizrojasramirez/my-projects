import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private authService: AuthService, private router: Router) { }
  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean{
    if (this.authService.isLoggedIn()) return true;
    this.router.navigate(['/'],{queryParams:{returnUrl:state.url}});
    return false;
  }
}
