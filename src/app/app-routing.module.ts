import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './library/albums/albums.component';
import { AlbumStartComponent } from './library/albums/album-start/album-start.component';
import { AlbumEditComponent } from './library/albums/album-edit/album-edit.component';
import { AlbumDetailComponent } from './library/albums/album-detail/album-detail.component';
import { AlbumResolverService } from './library/albums/album-start/album-resolver.service';
import { LoginComponent } from './authentication/login/login.component';
import { LibraryComponent } from './library/library.component';
import { AuthorizationGuard } from './authentication/guards/authorization.guard';
import { LoginActivateGuard } from './authentication/guards/login-activate.guard';
import { LoginCallbackComponent } from './authentication/login-callback/login-callback.component';
import { HomeComponent } from './home/home.component';
import { PlaylistsComponent } from './library/playlists/playlists.component';


const routes: Routes = [
  // {
  //   path: 'login', component: LoginComponent, canActivate: [LoginActivateGuard]
  // },
  // {
  //   path: 'login-callback', component: LoginCallbackComponent
  // },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'library', component: LibraryComponent, //canActivate: [AuthorizationGuard], 
    children: 
    [
      { path: '', redirectTo: 'albums', pathMatch: 'full'},  
      { path: 'playlists', component: PlaylistsComponent},  
      { path: 'albums', component: AlbumsComponent, 
          children: 
          [
             { path: '', component: AlbumsComponent}, 
             { path: ':id', component: AlbumDetailComponent},//, resolve: [AlbumResolverService]},
             { path: 'vio', component: AlbumDetailComponent} 
          ]
      } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
