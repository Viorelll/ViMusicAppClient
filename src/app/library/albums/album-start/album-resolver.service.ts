import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Album } from '../../../shared/album.model';
import { AlbumService } from '../album.service';


@Injectable({providedIn: 'root'})
export class AlbumResolverService implements Resolve<Album[]> {

    /**
     *
     */     
    constructor(private albumService: AlbumService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot, ) {
        let albums = this.albumService.getAlbums();
        return albums;
    }

}