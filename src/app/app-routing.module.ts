import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumStartComponent } from './albums/album-start/album-start.component';
import { AlbumEditComponent } from './albums/album-edit/album-edit.component';
import { AlbumDetailComponent } from './albums/album-detail/album-detail.component';
import { AlbumResolverService } from './albums/album-start/album-resolver.service';
import { LibraryStartComponent } from './library/library-start/library-start.component';
import { LibraryEditComponent } from './library/library-edit/library-edit.component';
import { LibraryDetailComponent } from './library/library-detail/library-detail.component';

import { LoginComponent } from './authentication/login/login.component';
import { LoginCallbackComponent } from './authentication/login-callback/login-callback.component';


const routes: Routes = [
  //{path: '', redirectTo: '/albums', pathMatch: 'full'},
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'login-callback', component: LoginCallbackComponent
  },
  {path: 'library', component: AlbumsComponent, children: [
    {path: '', component: LibraryStartComponent},
    {path: 'new', component: LibraryEditComponent},
    {path: ':id', component: LibraryDetailComponent, resolve: [AlbumResolverService]},
    {path: ':id/edit', component: LibraryEditComponent,  resolve: [AlbumResolverService]},
    ]
  },
  {path: 'albums', component: AlbumsComponent, children: [
    {path: '', component: AlbumStartComponent},
    {path: 'new', component: AlbumEditComponent},
    {path: ':id', component: AlbumDetailComponent, resolve: [AlbumResolverService]},
    {path: ':id/edit', component: AlbumEditComponent,  resolve: [AlbumResolverService]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
