import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './library/albums/albums.component';

import { AlbumEditComponent } from './library/albums/album-edit/album-edit.component';
import { AlbumDetailComponent } from './library/albums/album-detail/album-detail.component';

import { LoginComponent } from './authentication/login/login.component';
import { LibraryComponent } from './library/library.component';
import { AuthorizationGuard } from './authentication/guards/authorization.guard';
import { LoginActivateGuard } from './authentication/guards/login-activate.guard';
import { LoginCallbackComponent } from './authentication/login-callback/login-callback.component';
import { HomeComponent } from './home/home.component';
import { PlaylistsComponent } from './library/playlists/playlists.component';
import { AlbumListComponent } from './library/albums/album-list/album-list.component';
import { HomeAlbumListComponent } from './home/home-album-list/home-album-list.component';
import { SongDetailComponent } from './library/songs/song-detail/song-detail.component';


const routes: Routes = [
  // {
  //   path: 'login', component: LoginComponent, canActivate: [LoginActivateGuard]
  // },
  // {
  //   path: 'login-callback', component: LoginCallbackComponent
  // },
  {
    path: 'home', component: HomeComponent,
    // children: [
    //   {path: '', component: HomeAlbumListComponent},
    //   {path: ':id', redirectTo: '/library/albums/:id', pathMatch: 'full'}
    // ]
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
              { path: '', component: AlbumListComponent}, 
              { path: ':id', component: AlbumDetailComponent, children: 
                [
                  { path: ':id', component: SongDetailComponent}
                ]}
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
