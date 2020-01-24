import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { AlbumsComponent } from './albums/albums.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { AlbumEditComponent } from './albums/album-edit/album-edit.component';
import { AlbumDetailComponent } from './albums/album-detail/album-detail.component';
import { AlbumListComponent } from './albums/album-list/album-list.component';
import { AlbumStartComponent } from './albums/album-start/album-start.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { LibraryComponent } from './library/library.component';
import { LibraryDetailComponent } from './library/library-detail/library-detail.component';
import { LibraryEditComponent } from './library/library-edit/library-edit.component';
import { LibraryListComponent } from './library/library-list/library-list.component';
import { LibraryStartComponent } from './library/library-start/library-start.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { UserService } from './authentication/services/user.service';
import { AuthInterceptorService } from './authentication/interceptors/auth-interceptor.service';
import { initAuthentication } from './authentication/auth.config';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlbumsComponent,
    PlaylistsComponent,
    AlbumEditComponent,
    AlbumDetailComponent,
    AlbumListComponent,
    AlbumStartComponent,
    LoadingSpinnerComponent,
    LibraryComponent,
    LibraryDetailComponent,
    LibraryEditComponent,
    LibraryListComponent,
    LibraryStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AuthenticationModule,
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
