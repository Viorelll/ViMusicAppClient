import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AlbumsComponent } from './albums/albums.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { AlbumEditComponent } from './albums/album-edit/album-edit.component';
import { AlbumDetailComponent } from './albums/album-detail/album-detail.component';
import { AlbumListComponent } from './albums/album-list/album-list.component';
import { AlbumStartComponent } from './albums/album-start/album-start.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { LibraryComponent } from './library/library.component';
import { LibraryDetailComponent } from './library/library-detail/library-detail.component';
import { LibraryEditComponent } from './library/library-edit/library-edit.component';
import { LibraryListComponent } from './library/library-list/library-list.component';
import { LibraryStartComponent } from './library/library-start/library-start.component';

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
    AuthComponent,
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
