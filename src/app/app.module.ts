import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { LibraryComponent } from './library/library.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { PlaylistDetailComponent } from './library/playlists/playlist-detail/playlist-detail.component';
import { PlaylistEditComponent } from './library/playlists/playlist-edit/playlist-edit.component';
import { PlaylistListComponent } from './library/playlists/playlist-list/playlist-list.component';
import { HomeComponent } from './home/home.component';
import { AlbumsComponent } from './library/albums/albums.component';
import { AlbumEditComponent } from './library/albums/album-edit/album-edit.component';
import { AlbumDetailComponent } from './library/albums/album-detail/album-detail.component';
import { AlbumListComponent } from './library/albums/album-list/album-list.component';
import { PlaylistsComponent } from './library/playlists/playlists.component';
import { PlaylistItemComponent } from './library/playlists/playlist-list/playlist-item/playlist-item.component';
import { AlbumItemComponent } from './library/albums/album-list/album-item/album-item.component';
import { HomeAlbumListComponent } from './home/home-album-list/home-album-list.component';
import { SongItemComponent } from './library/songs/song-list/song-item/song-item.component';
import { SongListComponent } from './library/songs/song-list/song-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    AlbumsComponent,
    AlbumEditComponent,
    AlbumDetailComponent,
    AlbumListComponent,

    LoadingSpinnerComponent,

    LibraryComponent,

    PlaylistsComponent,
    PlaylistDetailComponent,
    PlaylistEditComponent,
    PlaylistListComponent,
    
    HomeComponent,
    PlaylistItemComponent,
    AlbumItemComponent,
    HomeAlbumListComponent,
    SongListComponent,
    SongItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    //AuthenticationModule,
    HttpClientModule
  ],
  providers:
   [
      // UserService, 
      // {
      //   provide: HTTP_INTERCEPTORS, 
      //   useClass: AuthInterceptorService,
      //   multi: true
      // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
