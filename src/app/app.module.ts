import { AdminAuthGuard } from './services/guards/admin-auth-guard.service';
import { AuthGuard } from './services/auth-guard.service';
import { fakeBackendProvider } from './helpers/fake-backend';
import { ErrorHandler, NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { AppErrorHandler } from './common/interceptors/app-error-handler';
import { ErrorInterceptor } from './common/interceptors/error.interceptor';

import { HomeComponent } from './pages/home/home.component';
import { FollowersComponent } from './pages/followers/followers.component';
import { FollowerDetailComponent } from './pages/follower-detail/follower-detail.component';
import { PostsComponent } from './pages/posts/posts.component';
import { ChangePasswordFormComponent } from './pages/change-password-form/change-password-form.component';
import { SignupFormComponent } from './pages/signup-form/signup-form.component';
import { ObjectListComponentComponent } from './pages/object-list-component/object-list-component.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { NavbarComponent } from './common/web-components/navbar/navbar.component';
import { ModalContentComponent } from './common/web-components/modal-content/modal-content.component';
import { PostModalContentComponent } from './common/web-components/post-modal-content/post-modal-content.component';
import { FollowerModalContentComponent } from './common/web-components/follower-modal-content/follower-modal-content.component';
import { DoubleFormComponent } from './pages/double-form/double-form.component';
import { BlogArchivesComponent } from './pages/blog-archives/blog-archives.component';
import { BlogArchiveDetailComponent } from './pages/blog-archive-detail/blog-archive-detail.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { OrderService } from './services/order.service';
import { AuthService } from './services/auth.service';

/* The following imports are only required because the app uses a mock server - it's not required when there's a connection with a real server*/
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { PermissionDeniedComponent } from './pages/permission-denied/permission-denied.component';
import { OrdersComponent } from './pages/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    FollowersComponent,
    PostsComponent,
    NavbarComponent,
    HomeComponent,
    FollowerDetailComponent,
    NotFoundComponent,
    ModalContentComponent,
    PostModalContentComponent,
    FollowerModalContentComponent,
    ChangePasswordFormComponent,
    SignupFormComponent,
    ContactFormComponent,
    ObjectListComponentComponent,
    DoubleFormComponent,
    BlogArchivesComponent,
    BlogArchiveDetailComponent,
    PermissionDeniedComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation:false}
    ),
    NgbModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path: 'followers/:id/:login/:i', component:FollowerDetailComponent, canActivate:[AuthGuard]},
      {path: 'followers', component:FollowersComponent, canActivate:[AuthGuard]},
      {path: 'posts', component:PostsComponent, canActivate:[AuthGuard]},
      {path: 'formexamples', component:ObjectListComponentComponent, canActivate:[AuthGuard,AdminAuthGuard]},
      {path: 'doubleform',component:DoubleFormComponent, canActivate:[AuthGuard]},
      {path: 'archives', component:BlogArchivesComponent, canActivate:[AuthGuard]},
      {path: 'archives/:year/:month', component:BlogArchiveDetailComponent, canActivate:[AuthGuard]},
      {path: 'orders', component:OrdersComponent, canActivate:[AuthGuard,AdminAuthGuard]},
      {path: 'no-access', component:PermissionDeniedComponent},
      {path: '**', component:NotFoundComponent}
    ])
  ],
  providers: [
    AuthService,
    OrderService,
    AuthGuard,
    AdminAuthGuard,
    //Only needed to mock the backend services
    fakeBackendProvider,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    }
  ],

  bootstrap: [AppComponent],
  entryComponents: [ModalContentComponent]
})
export class AppModule { }
